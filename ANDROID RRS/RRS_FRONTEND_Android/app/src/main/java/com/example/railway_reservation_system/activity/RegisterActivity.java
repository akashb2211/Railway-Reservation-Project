package com.example.railway_reservation_system.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import android.view.View;

import android.widget.EditText;
import android.widget.Toast;

import com.example.railway_reservation_system.R;
import com.example.railway_reservation_system.entity.Users;
import com.example.railway_reservation_system.utils.RetrofitClient;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


public class RegisterActivity extends AppCompatActivity {
    EditText  editfirstName, editlastName, editEmail, editGender, editDob, editAddress, editPhone, editPassword, editConfirmpassword;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        editfirstName = findViewById(R.id.editfirstName);
        editlastName = findViewById(R.id.editlastName);
        editEmail = findViewById(R.id.editEmail);
        editGender = findViewById(R.id.editGender);
        editDob = findViewById(R.id.editDob);
        editAddress = findViewById(R.id.editAddress);
        editPhone = findViewById(R.id.editPhone);
        editPassword = findViewById(R.id.editPassword);
        editConfirmpassword = findViewById(R.id.editConfirmpassword);
    }
    public void register(View view) {
        Users users = validateUser();
        if (users!=null) {
            RetrofitClient.getInstance().getApi().registerUser(users).enqueue(new Callback<JsonObject>() {
                @Override
                public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                    if (response.body().getAsJsonObject().get("Status").getAsString().equals("Success")) {
                        Toast.makeText(RegisterActivity.this, "User Register successfully", Toast.LENGTH_SHORT).show();
                        finish();
                    }
                }


                @Override
                public void onFailure(Call<JsonObject> call, Throwable t) {
                    Toast.makeText(RegisterActivity.this, "Somethhing Went wrong", Toast.LENGTH_SHORT).show();
                }
            });
        }
    }

    private Users validateUser() {

        String password = editPassword.getText().toString();
        String confirmPassword = editConfirmpassword.getText().toString();
        if (password.equals(confirmPassword))
        {
            Users users = new Users();
            users.setFirst_Name(editfirstName.getText().toString());
            users.setLast_Name(editlastName.getText().toString());
            users.setEmail_id(editEmail.getText().toString());
            users.setGender(editGender.getText().toString());
            users.setDob(editDob.getText().toString());
            users.setAddress(editAddress.getText().toString());
            users.setPhone_no(editPhone.getText().toString());
            users.setPassword(password);
            return users;
        }
        else
        {
            Toast.makeText(this, "passwords do not match", Toast.LENGTH_SHORT).show();
            return null;
        }
    }
           public void cancel (View view)

           {
                  finish();
           }
    }
