package com.example.railway_reservation_system.entity;

import java.io.Serializable;

public class Users implements Serializable {
    private int user_id;
    private String first_Name;
    private String last_Name;
    private String email_id;
    private String gender;
    private String dob;
    private String address;
    private String phone_no;
    private String password;

    public Users() {
    }

    public Users(int user_id, String first_Name, String last_Name, String email_id, String gender, String dob, String address, String phone_no, String password) {
        this.user_id = user_id;
        this.first_Name = first_Name;
        this.last_Name = last_Name;
        this.email_id = email_id;
        this.gender = gender;
        this.dob = dob;
        this.address = address;
        this.phone_no = phone_no;
        this.password = password;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getFirst_Name() {
        return first_Name;
    }

    public void setFirst_Name(String first_Name) {
        this.first_Name = first_Name;
    }

    public String getLast_Name() {
        return last_Name;
    }

    public void setLast_Name(String last_Name) {
        this.last_Name = last_Name;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone_no() {
        return phone_no;
    }

    public void setPhone_no(String phone_no) {
        this.phone_no = phone_no;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Users{" +
                "user_id=" + user_id +
                ", first_Name='" + first_Name + '\'' +
                ", last_Name='" + last_Name + '\'' +
                ", email_id='" + email_id + '\'' +
                ", gender='" + gender + '\'' +
                ", dob='" + dob + '\'' +
                ", address='" + address + '\'' +
                ", phone_no='" + phone_no + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
