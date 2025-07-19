package com.cognizant.spring-learn.controller;

import com.cognizant.spring-learn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.info("START - getCountryIndia()");
        XmlBeanFactory factory = new XmlBeanFactory(new ClassPathResource("country.xml"));
        Country country = (Country) factory.getBean("in");
        LOGGER.info("END - getCountryIndia()");
        return country;
    }
}