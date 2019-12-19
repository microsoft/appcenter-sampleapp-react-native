package com.microsoft.appcenter.reactnative.appcenter;

import androidx.test.espresso.ViewInteraction;
import androidx.test.espresso.core.internal.deps.guava.collect.Lists;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;
import com.microsoft.appcenter.espresso.Factory;
import com.microsoft.appcenter.espresso.ReportHelper;
import com.appcentersample.MainActivity;

import org.junit.After;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.List;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.swipeLeft;
import static androidx.test.espresso.matcher.ViewMatchers.withTagValue;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.core.AllOf.allOf;

@LargeTest
@RunWith(AndroidJUnit4.class)
public class AppCenterSampleUITest {

    @Rule
    public ReportHelper reportHelper = Factory.getReportHelper();

    @Rule
    public ActivityTestRule<MainActivity> mActivityTestRule = new ActivityTestRule<>(MainActivity.class);

    @Test
    public void navigationTest() throws InterruptedException {
        Thread.sleep(1500);
        List<String> screens = Lists.newArrayList(
                "welcomeScreen",
                "buildScreen",
                "testScreen",
                "codePushScreen",
                "distributeScreen",
                "crashesScreen",
                "analyticsScreen");
        swipeScreens(screens);
    }

    private void swipeScreens(List<String> screens) throws InterruptedException {
        for (String screen : screens) {
            ViewInteraction viewInteraction = onView(
                    allOf(withTagValue(is(screen))));
            viewInteraction.perform(swipeLeft());
            // wait for 5 seconds after swiping
            Thread.sleep(5000);
        }
    }

    @After
    public void tearDown() {
        reportHelper.label("Stopping App");
    }
}
