package com.example.railway_reservation_system.activity;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.railway_reservation_system.R;
import com.example.railway_reservation_system.entity.Users;
import com.example.railway_reservation_system.utils.RetrofitClient;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ProfileActivity extends AppCompatActivity {
    Toolbar toolbar;
    Button btnEdit;
    TextView textfirstName, textlastName,textEmail,textAddress,textPhone,textPassword;

    Users users;
    Users users1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        btnEdit = findViewById(R.id.btnEditProfile);
        toolbar = findViewById(R.id.toolbarP);
        setSupportActionBar(toolbar);

        textfirstName = findViewById(R.id.textfirstName);
        textlastName = findViewById(R.id.textlastName);
        textEmail = findViewById(R.id.textEmail);
        textAddress = findViewById(R.id.textAddress);
        textPhone = findViewById(R.id.textPhone);
        textPassword=findViewById(R.id.textPassword);

        btnEdit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ProfileActivity.this, EditProfileActivity.class);
                intent.putExtra("users1",users1);
                startActivity(intent);

            }
        });
    }

    protected void onResume() {

        super.onResume();

        int id = getSharedPreferences("rrs_app", MODE_PRIVATE).getInt("uid", 0);
        RetrofitClient.getInstance().getApi().getuserByuserId(id).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if (response.body().getAsJsonObject().get("status").getAsString().equals("success")) {
                    JsonArray array = response.body().getAsJsonObject().get("data").getAsJsonArray();

                    for (JsonElement element : array) {
                        users = new Users();

                        users.setUser_id(element.getAsJsonObject().get("user_id").getAsInt());
                        users.setFirst_Name(element.getAsJsonObject().get("first_Name").getAsString());
                        users.setLast_Name(element.getAsJsonObject().get("last_Name").getAsString());
                        users.setEmail_id(element.getAsJsonObject().get("email_id").getAsString());
                        users.setGender(element.getAsJsonObject().get("gender").getAsString());
                        users.setDob(element.getAsJsonObject().get("dob").getAsString());
                        users.setAddress(element.getAsJsonObject().get("address").getAsString());
                        users.setPhone_no(element.getAsJsonObject().get("phone_no").getAsString());
                        users.setPassword(element.getAsJsonObject().get("password").getAsString());

                        users1 = users;
                        textfirstName.setText("FIRST NAME : " +users.getFirst_Name());
                        textlastName.setText("LAST NAME : " +users.getLast_Name());
                        textEmail.setText("EMAIL : " +users.getEmail_id());

                        textAddress.setText("address: " +users.getAddress());
                        textPhone.setText("phone_no:" +users.getPhone_no());
                        textPassword.setText("password : " +users.getPassword());

                    }

                }
            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {

            }

        });
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu)
    {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.logout,menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        startActivity(new Intent(ProfileActivity.this, LoginActivity.class));
        finish();
        return super.onOptionsItemSelected(item);
    }
}

