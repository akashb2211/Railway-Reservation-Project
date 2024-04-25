package com.example.railway_reservation_system.adapter;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.viewpager2.adapter.FragmentStateAdapter;

import com.example.railway_reservation_system.fragments.AllTrainFragment;
import com.example.railway_reservation_system.fragments.HomeFragment;
import com.example.railway_reservation_system.fragments.TicketFragment;


public class FragmentAdapter extends FragmentStateAdapter {


    public FragmentAdapter(@NonNull FragmentActivity fragmentActivity) {
        super(fragmentActivity);
    }

    @NonNull
    @Override
    public Fragment createFragment(int position) {

        switch (position)
        {
            case 0:
                return new HomeFragment();
            case 1:
                return new AllTrainFragment();
            case 2:
                return new TicketFragment();
        }
        return null;
    }

    @Override
    public int getItemCount() {
        return 3;
    }
}

