package com.example.railway_reservation_system.utils;



import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitClient {
    private static RetrofitClient retrofitClient = null;
    private API api;
    private RetrofitClient(){
        api = new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl(API.BASE_URL).build().create(API.class);
    }

    public static RetrofitClient getInstance(){
        if(retrofitClient==null)
            retrofitClient = new RetrofitClient();
        return  retrofitClient;
    }

    public API getApi() {
        return api;
    }
}