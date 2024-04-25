package com.example.railway_reservation_system.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.railway_reservation_system.R;
import com.example.railway_reservation_system.entity.Ticket;
import com.example.railway_reservation_system.entity.Train;
import com.example.railway_reservation_system.utils.RetrofitClient;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class DetailTrainActivity extends AppCompatActivity {
    TextView textTrain_number,textTrainName,textSource,textDestination,texTrainTime;
    ImageView imageView;
    Train train;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail_train);

        textTrain_number = findViewById(R.id.textTrain_number);
        textTrainName = findViewById(R.id.textTrainName);
        textSource = findViewById(R.id.textSource);
        textDestination = findViewById(R.id.textDestination);
        texTrainTime = findViewById(R.id.texTrainTime);
        imageView = findViewById(R.id.imageView);
        train =(Train) getIntent().getSerializableExtra("train");

        getTrainDetails();
    }

    private void getTrainDetails() {
        textTrain_number.setText("train_number  :"+train.getTrain_number());
        textTrainName.setText("train_name  :"+train.getTrain_name());
        textSource.setText("source  :"+train.getSource());
        textDestination.setText("destination  :"+train.getDestination());
        texTrainTime.setText("train_time  :"+train.getTrain_time());
        // Glide.with(this).load(API.BASE_URL+"/"+mobile.getImage()).into(imageView);
    }

    public void book(View view){
        int uid = getSharedPreferences("rrs_app",MODE_PRIVATE).getInt("uid",0);
        int tno = train.getTrain_number();
        Ticket ticket = new Ticket();
        ticket.setUid(uid);
        ticket.setTno(tno);
        RetrofitClient.getInstance().getApi().placeOrder(ticket).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if(response.body().getAsJsonObject().get("status").getAsString().equals("success")){
                    Toast.makeText(DetailTrainActivity.this, "Book Ticket", Toast.LENGTH_SHORT).show();
                    finish();
                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(DetailTrainActivity.this, "Something went wrong", Toast.LENGTH_SHORT).show();
            }
        });
    }
}