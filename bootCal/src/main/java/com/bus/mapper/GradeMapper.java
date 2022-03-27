package com.bus.mapper;

import com.bus.entity.Grade;
import com.bus.my.mapper.myMapper;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GradeMapper extends myMapper<Grade> {
    Integer getMax(int id);
}