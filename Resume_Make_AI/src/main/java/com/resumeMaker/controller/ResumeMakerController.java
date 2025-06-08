package com.resumeMaker.controller;

import com.resumeMaker.ResumeRequest;
import com.resumeMaker.service.ResumeMakerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeMakerController {

    private final ResumeMakerService resumeService;

    public ResumeMakerController(ResumeMakerService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping("/generate")
    public ResponseEntity<Map<String, Object>> generate(@RequestBody ResumeRequest resumeRequest) {
        try {

            Map<String, Object> result = resumeService.generateResumeResponse(resumeRequest.userDescription());
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", e.getMessage()));
        }
    }
}
