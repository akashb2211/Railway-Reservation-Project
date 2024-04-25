package com.example.railway_reservation_system.entity;

import java.io.Serializable;

public class Train implements Serializable {
    private int train_number;
    private int user_id;
    private String train_name;
    private String source;
    private String destination;

    private String classtype;
    private String train_time;
    private String train_date;
    private String running_days;
    private int halt_time;
    private String distance;

    public Train(int train_number, int user_id, String train_name, String source, String destination, String classtype, String train_time, String train_date, String running_days, int halt_time, String distance) {
        this.train_number = train_number;
        this.user_id = user_id;
        this.train_name = train_name;
        this.source = source;
        this.destination = destination;
        this.classtype = classtype;
        this.train_time = train_time;
        this.train_date = train_date;
        this.running_days = running_days;
        this.halt_time = halt_time;
        this.distance = distance;
    }

    public Train() {
    }

    public int getTrain_number() {
        return train_number;
    }

    public void setTrain_number(int train_number) {
        this.train_number = train_number;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getTrain_name() {
        return train_name;
    }

    public void setTrain_name(String train_name) {
        this.train_name = train_name;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getClasstype() {
        return classtype;
    }

    public void setClasstype(String classtype) {
        this.classtype = classtype;
    }

    public String getTrain_time() {
        return train_time;
    }

    public void setTrain_time(String train_time) {
        this.train_time = train_time;
    }

    public String getTrain_date() {
        return train_date;
    }

    public void setTrain_date(String train_date) {
        this.train_date = train_date;
    }

    public String getRunning_days() {
        return running_days;
    }

    public void setRunning_days(String running_days) {
        this.running_days = running_days;
    }

    public int getHalt_time() {
        return halt_time;
    }

    public void setHalt_time(int halt_time) {
        this.halt_time = halt_time;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    @Override
    public String toString() {
        return "Train{" +
                "train_number=" + train_number +
                ", user_id=" + user_id +
                ", train_name='" + train_name + '\'' +
                ", source='" + source + '\'' +
                ", destination='" + destination + '\'' +
                ", classtype='" + classtype + '\'' +
                ", train_time='" + train_time + '\'' +
                ", train_date='" + train_date + '\'' +
                ", running_days='" + running_days + '\'' +
                ", halt_time=" + halt_time +
                ", distance='" + distance + '\'' +
                '}';
    }
}