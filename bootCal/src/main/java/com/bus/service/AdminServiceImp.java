package com.bus.service;


import com.bus.entity.Admin;
import com.bus.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

@Service
public class AdminServiceImp implements AdminService{
    @Autowired
    private  AdminMapper adminMapper;
    @Override
    public String login(String name) {
        Example example = new Example(Admin.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("adminName", name);
        Admin admin = adminMapper.selectOneByExample(example);
        return admin.getAdminPassword();
    }

    @Override
    public Admin getByName(String name) {
        Example example = new Example(Admin.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("adminName", name);
        Admin admin = adminMapper.selectOneByExample(example);
        return admin;
    }

    @Override
    public String register(Admin admin) throws Exception{
        int i = adminMapper.insertSelective(admin);
        if (i==1){
            return "ok";
        }
        return "false";
    }
}
