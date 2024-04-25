package com.example.railway_reservation_system.entity;

import java.io.Serializable;

public class Ticket implements Serializable {

    private int id;
    private int uid;
    private int tno;

    public Ticket() {
    }

    public Ticket(int id, int uid, int tno) {
        this.id = id;
        this.uid = uid;
        this.tno = tno;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public int getTno() {
        return tno;
    }

    public void setTno(int tno) {
        this.tno = tno;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "id=" + id +
                ", uid=" + uid +
                ", tno=" + tno +
                '}';
    }
}