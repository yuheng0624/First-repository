package com.bus.service;


import com.bus.entity.Admin;
import com.bus.entity.Grade;
import com.bus.mapper.GradeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import java.util.List;

@Service
public class GradeServiceImp implements GradeService{

    @Autowired
    private  AdminService as;

    @Autowired
    private   GradeMapper g;

    @Override
    public String insertGrade(String name,String myGrade) {

        Admin ad = as.getByName(name);
        Integer id = ad.getAdminId();
        Integer max = g.getMax(id);
        if (max==null){
            max=0;
        }
        Grade grade = new Grade();
        grade.setGrade(Integer.parseInt(myGrade));
        grade.setGradeSum(max+1);
        grade.setAdminId(id);
        g.insertSelective(grade);
        return "ok";
    }

    @Override
    public List<Grade> getAllGradeByName(String name) throws Exception{
        Admin ad = as.getByName(name);
        Example example = new Example(Grade.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("adminId", ad.getAdminId());
        List<Grade> grades = g.selectByExample(example);
        return grades;
    }
}
