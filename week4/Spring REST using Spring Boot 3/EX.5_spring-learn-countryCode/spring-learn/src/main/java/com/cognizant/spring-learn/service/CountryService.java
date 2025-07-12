package com.cognizant.spring-learn.service;

import com.cognizant.spring-learn.model.Country;
import com.cognizant.spring-learn.exception.CountryNotFoundException;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;

import javax.xml.transform.stream.StreamSource;
import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    private List<Country> countryList;

    @Value("classpath:country.xml")
    private Resource countryXml;

    @PostConstruct
    public void init() throws Exception {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setClassesToBeBound(CountryList.class);
        CountryList countries = (CountryList) marshaller.unmarshal(new StreamSource(countryXml.getInputStream()));
        countryList = countries.getCountries();
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country code not found: " + code));
    }
}
