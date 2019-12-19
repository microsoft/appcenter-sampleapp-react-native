package com.appcentersample;

import android.app.AlertDialog;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.microsoft.appcenter.analytics.Analytics;

import java.util.HashMap;
import java.util.Map;

public class AppCenterSampleNativeModule extends ReactContextBaseJavaModule {

    public AppCenterSampleNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "AppCenterSample";
    }

    @ReactMethod
    public void showColoredEventsDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        CharSequence[] colors = {"Yellow", "Blue", "Red"};
        builder.setTitle("Pick a color").setItems(colors, (dialog, index) -> {
            Map<String, String> properties = new HashMap<>();
            switch (index) {
                case 0:
                    properties.put("Color", "Yellow");
                    Analytics.trackEvent("Color event", properties);
                    break;
                case 1:
                    properties.put("Color", "Blue");
                    Analytics.trackEvent("Color event", properties);
                    break;
                case 2:
                    properties.put("Color", "Red");
                    Analytics.trackEvent("Color event", properties);
                    break;
            }
        });
        builder.create().show();
    }
}