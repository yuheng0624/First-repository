package com.bus.test;


import com.bus.entity.Admin;
import com.bus.entity.Grade;
import com.bus.mapper.AdminMapper;
import com.bus.mapper.GradeMapper;
import com.bus.service.GradeService;
import com.bus.service.TitleService;
import com.bus.util.Calculator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.management.MXBean;
import java.util.*;

@SpringBootTest
public class TestAdmin {

    @Autowired
    AdminMapper a;

    @Autowired
    TitleService t;

    @Autowired
    GradeMapper g;

    @Autowired
    GradeService gs;
    @Test
    public void  testOne(){
        List<Admin> list = a.selectAll();
        for (Admin admin : list) {
            System.out.println(admin);
        }
    }

    @Test
    public void  two(){
        String s = "1+2";
        double i = Calculator.conversion(s);
        System.out.println(i);
    }

    @Test
    public void  three(){
        Map<String, Double> allTitle = t.getAllTitle();
        Set<String> set = allTitle.keySet();
        Iterator<String> i = set.iterator();
        while (i.hasNext()){

            String key = i.next();
            Double aDouble = allTitle.get(key);
            System.out.println(key+"======>"+aDouble);
        }
    }

    @Test
    public void  four(){
        List<Object> set = t.getRandom();
        int i =1;
        for (Object o : set) {
            System.out.println(i+"==>"+o);
            i++;
        }
    }
    @Test
    public void  fours(){
        Integer max = g.getMax(1);
        System.out.println(max);
    }

//    @Test
//    public void  fourss(){
//        List<Grade> list = gs.getAllGradeByName("jack");
//        for (Grade grade : list) {
//            System.out.println(grade);
//
//        }
//
//    }
}
