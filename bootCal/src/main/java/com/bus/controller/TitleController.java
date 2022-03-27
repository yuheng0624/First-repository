package com.bus.controller;

import com.bus.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/title")
public class TitleController {

    @Autowired
    private TitleService tit;

    @RequestMapping("/getAll")
    public List getAll(){
        List<Object> list = tit.getRandom();

        return list;
    }
}
