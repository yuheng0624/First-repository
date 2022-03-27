package com.bus.entity;

import lombok.Data;

import javax.persistence.*;

@Data
public class Title {
    @Id
    @Column(name = "title_id")
    private Integer titleId;

    private String title;


}