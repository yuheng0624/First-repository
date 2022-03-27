package com.bus.service;

import com.bus.entity.Grade;

import java.util.List;

public interface GradeService {
    /**
     * 录入成绩
     * @param name 需要录入成绩同学姓名
     * @param myGrade    该同学的成绩
     * @return 返回对应结果
     */
    String insertGrade(String name,String myGrade);

    /**
     * 查询该同学所有成绩
     * @param name  该同学姓名
     * @return  返回该同学的所有成绩
     */
    List<Grade> getAllGradeByName(String name) throws Exception;
}
