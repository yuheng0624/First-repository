package com.bus.service;

import com.bus.entity.Title;
import com.bus.mapper.TitleMapper;
import com.bus.util.Calculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TitleServiceImp implements TitleService{

    @Autowired(required = false)
    private  TitleMapper titleMapper;

    @Override
    public Map<String, Double> getAllTitle() {
        List<Title> list = titleMapper.selectAll();
        HashMap<String, Double> map = new HashMap<>();
        for (Title title : list) {
            map.put(title.getTitle(), Calculator.conversion(title.getTitle()));
        }
        return map;
    }

    @Override
    public List<Object> getRandom() {
        ArrayList<Object> list = new ArrayList<>();
        Map<String, Double> map = getAllTitle();
        Set<Map.Entry<String, Double>> set = map.entrySet();
        Random random = new Random();
        Object[] objects = set.toArray();


        for (int i =0 ; i<=19 ; i++){
           /* System.out.println("length:"+objects.length);*/
            int s = random.nextInt(objects.length);
            System.out.println("当前取值："+s );
            System.out.println(objects[s]);
            list.add(objects[s]);

        }

        return list;
    }
}
