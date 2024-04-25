package com.example.railway_reservation_system.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.railway_reservation_system.R;
import com.example.railway_reservation_system.entity.Users;
import com.example.railway_reservation_system.utils.RetrofitClient;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity implements View.OnClickListener {
    EditText editEmail, editPassword;
    Button btnLogin, btnRegister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        editEmail = findViewById(R.id.editEmail);
        editPassword = findViewById(R.id.editPassword);
        btnLogin = findViewById(R.id.btnLogin);
        btnRegister = findViewById(R.id.btnRegister);


        btnRegister.setOnClickListener(this);
        btnLogin.setOnClickListener(this);

    }


    @Override
    public void onClick(View view) {
        if (view.getId() == R.id.btnLogin) {

            Users users = new Users();
            users.setEmail_id(editEmail.getText().toString());
            users.setPassword(editPassword.getText().toString());

            RetrofitClient.getInstance().getApi().loginUser(users).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                  if(response.body().getAsJsonObject().get("status").getAsString().equals("success")){
                      int id = response.body().getAsJsonObject().get("data").getAsJsonArray().get(0).getAsJsonObject().get("user_id").getAsInt();
                      Toast.makeText(LoginActivity.this, ""+id, Toast.LENGTH_SHORT).show();
                      SharedPreferences preferences = getSharedPreferences("rrs_app",MODE_PRIVATE);
                      preferences.edit().putInt("uid",id).apply();
                      Toast.makeText(LoginActivity.this, "logged in", Toast.LENGTH_SHORT).show();
                      startActivity(new Intent(LoginActivity.this, MainActivity.class));

                  }
                }

                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(LoginActivity.this, "Something went wrong with DB", Toast.LENGTH_SHORT).show();
                }
            });
        }
        else if (view.getId() == R.id.btnRegister) {
            startActivity(new Intent(LoginActivity.this, RegisterActivity.class));
            Toast.makeText(this, "register", Toast.LENGTH_SHORT).show();
        }
    }
}