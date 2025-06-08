package com.resumeMaker.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.resumeMaker.service.ResumeMakerService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeMakerServiceImpl implements ResumeMakerService {

    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public ResumeMakerServiceImpl(WebClient.Builder builder) {
        this.webClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {
        String promptString = this.loadPromptFromFile("resume_prompt.txt");

        String promptContent = this.putValuesToTemplate(promptString, Map.of(
                "userDescription", userResumeDescription
        ));

        // Gemini API requires: contents.parts.text
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of("parts", new Object[]{
                                Map.of("text", promptContent)
                        })
                }
        );

        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return parseMultipleResponses(response);
    }

    public String loadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }

    public String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
        }
        return template;
    }

    public static Map<String, Object> parseMultipleResponses(String jsonResponse) {
        Map<String, Object> output = new HashMap<>();

        try {
            ObjectMapper mapper = new ObjectMapper();
            JSONObject root = new JSONObject(jsonResponse);
            String text = root.getJSONArray("candidates")
                    .getJSONObject(0)
                    .getJSONObject("content")
                    .getJSONArray("parts")
                    .getJSONObject(0)
                    .getString("text");

            // Parse <think> tag
            int thinkStart = text.indexOf("<think>") + 7;
            int thinkEnd = text.indexOf("</think>");
            if (thinkStart != -1 && thinkEnd != -1 && thinkStart < thinkEnd) {
                output.put("think", text.substring(thinkStart, thinkEnd).trim());
            } else {
                output.put("think", null);
            }

            // Parse ```json block
            int jsonStart = text.indexOf("```json") + 7;
            int jsonEnd = text.lastIndexOf("```");
            if (jsonStart != -1 && jsonEnd != -1 && jsonStart < jsonEnd) {
                String jsonContent = text.substring(jsonStart, jsonEnd).trim();
                Map<String, Object> data = mapper.readValue(jsonContent, Map.class);
                output.put("data", data);
            } else {
                output.put("data", null);
            }

        } catch (Exception e) {
            output.put("error", "Parsing failed: " + e.getMessage());
        }


        return output;
    }
}
