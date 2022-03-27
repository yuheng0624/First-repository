package com.bus.service;

import java.util.List;
import java.util.Map;

public interface TitleService {

    /**
     * 查询所有题目
     * @return  返回题目
     */
    Map<String, Double> getAllTitle();

    /**
     * 计算题目并返回
     * @return   返回题目和结果
     */
    List<Object> getRandom();
}
