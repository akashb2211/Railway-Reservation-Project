package com.example.railway_reservation_system.fragments;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.example.railway_reservation_system.R;
import com.example.railway_reservation_system.adapter.TrainListAdapter;
import com.example.railway_reservation_system.entity.Train;
import com.example.railway_reservation_system.utils.RetrofitClient;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TicketFragment extends Fragment {

    RecyclerView recyclerView;
    TrainListAdapter trainListAdapter;
    List<Train> trainList;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_ticket, container, false);
    }
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        recyclerView = view.findViewById(R.id.recyclerView);
        trainList = new ArrayList<>();
        trainListAdapter = new TrainListAdapter(getContext(),trainList);
        recyclerView.setAdapter(trainListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(getContext(),1));
    }

    @Override
    public void onResume() {
        super.onResume();
        getUserOrders();
    }

    private void getUserOrders() {
        trainList.clear();
        int id = getContext().getSharedPreferences("rrs_app", Context.MODE_PRIVATE).getInt("uid",0);
        RetrofitClient.getInstance().getApi().getuserOrders(id).enqueue(new Callback<JsonObject>() {
            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if(response.body().getAsJsonObject().get("status").getAsString().equals("success")){
                    JsonArray jsonArray = response.body().getAsJsonObject().get("data").getAsJsonArray();
                    for (JsonElement element :jsonArray) {
                        Train train = new Train();

                        train.setTrain_number(element.getAsJsonObject().get("train_number").getAsInt());
                        train.setTrain_name(element.getAsJsonObject().get("train_name").getAsString());
                        train.setSource(element.getAsJsonObject().get("source").getAsString());
                        train.setDestination(element.getAsJsonObject().get("destination").getAsString());
                        train.setTrain_time(element.getAsJsonObject().get("train_time").getAsString());
                        //mobile.setImage(element.getAsJsonObject().get("image").getAsString());
                        trainList.add(train);
                    }
                    trainListAdapter.notifyDataSetChanged();
                }

            }

            @Override
            public void onFailure(Call<JsonObject> call, Throwable t) {
                Toast.makeText(getContext(), "Something went wrong", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
