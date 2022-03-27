package com.bus.controller;


import com.bus.entity.Grade;
import com.bus.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("grade")
@CrossOrigin
public class GradeController {
    @Autowired
    private  GradeService g;

    @RequestMapping("/storeGrade")
    public String storeGrade(String name, String myGrade) {
        System.out.println("ren：" + name);
        System.out.println("成绩：" + myGrade);
        String s = g.insertGrade(name, myGrade);
        return s;
    }

    @RequestMapping("/getAllGrade")
    public List<Grade> getAllGrade(String name){
        List<Grade> list = null;
        try {
            list = g.getAllGradeByName(name);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("-------------------------------");
        return list;
    }

    @RequestMapping("/getLastGrade")
    public Grade getLastGrade(String name){
        List<Grade> list = null;
        Grade grade =null;
        try {
            list = g.getAllGradeByName(name);
            grade = list.get(list.size() - 1);
        } catch (Exception e) {
            return null;
        }

        System.out.println("-------------------------------");
        return grade;
    }
}
