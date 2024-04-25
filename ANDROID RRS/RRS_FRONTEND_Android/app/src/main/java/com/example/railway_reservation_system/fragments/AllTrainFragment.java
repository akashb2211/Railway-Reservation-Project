package com.example.railway_reservation_system.fragments;


import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

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

public class AllTrainFragment extends Fragment {
    RecyclerView recyclerView;
    TrainListAdapter trainListAdapter;
    List<Train> trainList;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_all_train, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        recyclerView = view.findViewById(R.id.recyclerViewAll);
        trainList = new ArrayList<>();
        trainListAdapter = new TrainListAdapter(getContext(), trainList);
        recyclerView.setAdapter(trainListAdapter);
        recyclerView.setLayoutManager(new GridLayoutManager(getContext(), 1));
        getAllTrains();

    }

    private void getAllTrains() {
        RetrofitClient.getInstance().getApi().getAllTrains().enqueue(new Callback<JsonObject>() {

            @Override
            public void onResponse(Call<JsonObject> call, Response<JsonObject> response) {
                if (response.body().getAsJsonObject().get("status").getAsString().equals("success")) {
                    JsonArray jsonArray = response.body().getAsJsonObject().get("data").getAsJsonArray();
                    for (JsonElement element : jsonArray) {
                        Train train = new Train();
                        train.setTrain_number(element.getAsJsonObject().get("train_number").getAsInt());
                        train.setTrain_name(element.getAsJsonObject().get("train_name").getAsString());
                        train.setSource(element.getAsJsonObject().get("source").getAsString());
                        train.setDestination(element.getAsJsonObject().get("destination").getAsString());
                        train.setClasstype(element.getAsJsonObject().get("classtype").getAsString());
                        train.setTrain_time(element.getAsJsonObject().get("train_time").getAsString());
                        train.setTrain_date(element.getAsJsonObject().get("train_date").getAsString());
                        train.setRunning_days(element.getAsJsonObject().get("running_days").getAsString());
                        train.setHalt_time(element.getAsJsonObject().get("halt_time").getAsInt());
                        train.setDistance(element.getAsJsonObject().get("distance").getAsString());
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