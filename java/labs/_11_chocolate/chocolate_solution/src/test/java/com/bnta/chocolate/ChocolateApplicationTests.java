package com.bnta.chocolate;

import com.bnta.chocolate.models.Chocolate;
import com.bnta.chocolate.repositories.ChocolateRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class ChocolateApplicationTests {

	@Autowired
	ChocolateRepository chocolateRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindChocolateOver69CocoaPercentage(){
		List<Chocolate> found = chocolateRepository.findByCocoaPercentageGreaterThan(69);
		assertThat(found.size()).isEqualTo(3);
	}

}
