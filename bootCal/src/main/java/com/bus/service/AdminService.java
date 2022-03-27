package com.bus.service;


import com.bus.entity.Admin;

public interface AdminService {

    /**
     * 根据用户名查询密码
     * @param name  需要的用户名
     * @return   对应的密码
     */
    String login(String name);

    /**
     * 根据用户名查询对象
     * @param name   需要的用户名
     * @return 返回查询的对象
     */
    Admin getByName(String name);

    /**
     * 注册
     * @param admin 注册的用户
     * @return 成功与否
     * @throws Exception 同名
     */
    String register(Admin admin) throws Exception;
}
