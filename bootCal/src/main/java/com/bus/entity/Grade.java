package com.bus.entity;

import lombok.Data;

import javax.persistence.*;

@Data
public class Grade {
    @Id
    @Column(name = "grade_id")
    private Integer gradeId;

    private Integer grade;

    @Column(name = "grade_sum")
    private Integer gradeSum;

    @Column(name = "admin_id")
    private Integer adminId;


}