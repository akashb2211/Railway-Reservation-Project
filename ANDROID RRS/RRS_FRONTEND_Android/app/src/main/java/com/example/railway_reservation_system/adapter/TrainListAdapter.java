package com.example.railway_reservation_system.adapter;

import android.content.Context;
import android.content.Intent;
import android.media.Image;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.railway_reservation_system.R;
import com.example.railway_reservation_system.activity.DetailTrainActivity;
import com.example.railway_reservation_system.entity.Train;

import java.util.List;

public class TrainListAdapter extends RecyclerView.Adapter<TrainListAdapter.MyViewHolder>
{
    Context context;
    List<Train> trainList;

    public TrainListAdapter(Context context, List<Train> trainList) {
        this.context = context;
        this.trainList = trainList;
    }

    @NonNull
    @Override
    public TrainListAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.all_train_layout,null);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull TrainListAdapter.MyViewHolder holder, int position) {
        Train train=trainList.get(position);
        //holder.textTrainNumber.setText(train.getTrain_number());
        holder.textTrainName.setText(train.getTrain_name());
        holder.textSource.setText(train.getSource());
        holder.textDestination.setText(train.getDestination());
        holder.texTrainTime.setText(train.getTrain_time());


    }

    @Override
    public int getItemCount() {
        return trainList.size();
    }
    class MyViewHolder extends RecyclerView.ViewHolder{
        ImageView image;
        TextView textTrainNumber,textTrainName,textSource,textDestination,texTrainTime;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            image= itemView.findViewById(R.id.imageall_Train);
            textTrainNumber=itemView.findViewById(R.id.textTrainNumber);
            textTrainName=itemView.findViewById(R.id.textTrainName);
            textSource=itemView.findViewById(R.id.textSource);
            textDestination=itemView.findViewById(R.id.textDestination);
            texTrainTime=itemView.findViewById(R.id.texTrainTime);

            itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(context, DetailTrainActivity.class);
                intent.putExtra("train",trainList.get(getAdapterPosition()));
                context.startActivity(intent);
            }
            });

            }
    }
}
