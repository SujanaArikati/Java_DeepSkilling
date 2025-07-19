package com.cognizant.spring-learn;

import com.cognizant.spring-learn.model.Country;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class CountryControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testGetCountry() {
        Country country = this.restTemplate.getForObject("/countries/in", Country.class);
        assertThat(country.getCode()).isEqualTo("IN");
        assertThat(country.getName()).isEqualTo("India");
    }
}
