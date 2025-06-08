package com.resumeMaker.service;

import java.io.IOException;
import java.util.Map;

public interface ResumeMakerService {

    Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException;
}
