package com.bus.controller;

import com.bus.entity.Admin;
import com.bus.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
 private   AdminService adminService;

    @RequestMapping("/login")
    public String login(Admin admin) {
        System.out.println(admin);
        String password = adminService.login(admin.getAdminName());
        System.out.println(password);

        if (admin.getAdminPassword().equals(password) ) {
            return "ok";
        }
        return "false";
    }

    @RequestMapping("/register")
    public String register(Admin admin){
        System.out.println(admin);
        String s = null;
        try {
            s = adminService.register(admin);
        } catch (Exception e) {
            return "false";
        }
        return s;
    }
}

