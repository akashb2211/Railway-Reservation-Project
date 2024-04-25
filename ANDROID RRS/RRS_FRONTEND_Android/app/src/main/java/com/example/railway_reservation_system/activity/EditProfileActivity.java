package com.example.railway_reservation_system.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
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

public class EditProfileActivity extends AppCompatActivity {
    EditText  editfirstName,editlastName,editEmail,editAddress,editPhone,editPassword;
    Button btnSave,btnCancel;
    Users users;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_profile);
        editfirstName = findViewById(R.id.editfirstName);
        editlastName = findViewById(R.id.editlastName);
        editEmail = findViewById(R.id.editEmail);
        editAddress = findViewById(R.id.editAddress);
        editPhone = findViewById(R.id.editPhone);
        editPassword = findViewById(R.id.editPassword);

        btnCancel = findViewById(R.id.btnCancel);
        btnSave = findViewById(R.id.btnSave);

        users = (Users) getIntent().getSerializableExtra("users1");

        editfirstName.setText(users.getFirst_Name());
        editlastName.setText(users.getLast_Name());
        editEmail.setText(users.getEmail_id());
        editAddress.setText(users.getAddress());
        editPhone.setText(users.getPhone_no());
        editPassword.setText(users.getPassword());

        btnCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity( new Intent(EditProfileActivity.this, MainActivity.class));
            }
        });

        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Users users1 = new Users();
                users1.setFirst_Name(editfirstName.getText().toString());
                users1.setLast_Name(editlastName.getText().toString());
                users1.setEmail_id(editEmail.getText().toString());
                users1.setAddress(editAddress.getText().toString());
                users1.setPhone_no(editPhone.getText().toString());
                users1.setPassword(editPassword.getText().toString());


                RetrofitClient.getInstance().getApi().editUsers(users.getUser_id(),users1).enqueue(new Callback<JsonObject>() {
                    @Override
                    public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                        if(response.body().getAsJsonObject().get("status").getAsString().equals("success"))
                        {
                            Toast.makeText(EditProfileActivity.this, "EDITED", Toast.LENGTH_SHORT).show();
                            finish();
                        }
                    }

                    @Override
                    public void onFailure(Call<JsonObject> call, Throwable t) {

                    }
                });

            }
        });
    }
}