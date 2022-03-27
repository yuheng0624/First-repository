package com.bus.entity;

import lombok.Data;

import javax.persistence.*;

@Data
public class Admin {
    @Id
    @Column(name = "admin_id")
    private Integer adminId;

    @Column(name = "admin_name")
    private String adminName;

    @Column(name = "admin_password")
    private String adminPassword;


}