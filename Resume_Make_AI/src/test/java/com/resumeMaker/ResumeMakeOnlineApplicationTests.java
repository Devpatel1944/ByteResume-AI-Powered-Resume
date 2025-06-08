package com.resumeMaker;

import com.resumeMaker.service.ResumeMakerService;
import com.resumeMaker.service.ResumeMakerServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class ResumeMakeOnlineApplicationTests {

	@Autowired
	private ResumeMakerService resumeService;

	@Test
	void contextLoads() throws IOException {
		resumeService.generateResumeResponse("i am deven patel with 2 year of java developer experience");;
	}

}
