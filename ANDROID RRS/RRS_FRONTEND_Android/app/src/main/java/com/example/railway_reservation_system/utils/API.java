package com.example.railway_reservation_system.utils;

import com.example.railway_reservation_system.entity.Ticket;
import com.example.railway_reservation_system.entity.Users;
import com.google.gson.JsonObject;


import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface API
{
    public static final String BASE_URL = "http://192.168.24.148:4000";


    @POST("/user/login")
    Call<JsonObject> loginUser(@Body Users users);

    @POST("/user/register")
    Call<JsonObject> registerUser(@Body Users users);

    @GET("/train/")
    Call<JsonObject> getAllTrains();


    @GET("user/viewprofile/{user_id}")
    Call<JsonObject> getuserByuserId(@Path("user_id")int id);

    @PUT("/user/profile/{user_id}")
    Call<JsonObject> editUsers(@Path("user_id") int id, @Body Users users);

    @POST("/tktbook/booktkt")
    Call<JsonObject> placeOrder(@Body Ticket ticket);

    @GET("/tktbook/{user_id}")
    Call<JsonObject> getuserOrders(@Path("user_id")int id);


}

