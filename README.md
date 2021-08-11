# App Center Sample App for React Native

The React Native application in this repository will help you quickly and easily onboard to Visual Studio App Center.

## About this repository

The App Center SDK modules are already integrated within the application.

### Build status (master branch)

| Build Service                   | Status                                                                                                                                                                                                                                                                |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App Center (iOS)                | [![Build status](https://build.appcenter.ms/v0.1/apps/b0241ddd-7d25-4594-9066-f337e833eeaf/branches/master/badge)](https://appcenter.ms)                                                                                                                              |
| App Center (Android)            | [![Build status](https://build.appcenter.ms/v0.1/apps/d15a5805-93ae-4edb-bd37-f81e51f92626/branches/master/badge)](https://appcenter.ms)                                                                                                                              |
| Azure Pipelines (iOS & Android) | [![Build Status](https://dev.azure.com/msmobilecenter/Mobile-Center/_apis/build/status/sampleapp/microsoft.appcenter-sampleapp-react-native?branchName=master)](https://dev.azure.com/msmobilecenter/Mobile-Center/_build/latest?definitionId=3728&branchName=master) |

## Tutorials

First navigate to the **Getting Started** tutorial linked below. After following that tutorial, you can choose which App Center service to explore.

## How to run the app

Make sure you are running [NodeJS](https://nodejs.org/) 7.4+ and have [CocoaPods](https://cocoapods.org) installed

```sh
npm install
npm install react-native-cli -g
cd ios && pod update && cd ..
```

Make sure you have the testing device plugged in or an emulator running and run `npm run ios` or `npm run android` depending on the platform you want to use.

> Note:
> The first time the application build may take very long, the subsequent builds are going to be faster.

## Contents

| Tutorial                                                                                          | Description                                                | Screenshot                                                                                                     |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [Getting Started](https://docs.microsoft.com/en-us/appcenter/quickstarts/android/getting-started) | Set up the app                                             |
| [Build](https://docs.microsoft.com/en-us/appcenter/quickstarts/android/build)                     | Build the app                                              | ![image](https://user-images.githubusercontent.com/30265843/38382707-5428679a-3913-11e8-93a9-29b47700ee1c.png) |
| [Test](https://docs.microsoft.com/en-us/appcenter/quickstarts/android/test)                       | Run automated UI tests on real devices                     | ![image](https://user-images.githubusercontent.com/30265843/38382756-72711986-3913-11e8-92fe-e4c3b643c3f4.png) |
| [Distribute](https://docs.microsoft.com/en-us/appcenter/quickstarts/android/distribute)           | Distribute application to a group of users                 | ![image](https://user-images.githubusercontent.com/30265843/38382777-81af96e8-3913-11e8-8c13-b191921e28ea.png) |
| [Crashes](https://docs.microsoft.com/en-us/appcenter/quickstarts/android/crashes)                 | Monitor application crashes                                | ![image](https://user-images.githubusercontent.com/30265843/38382795-8d46268e-3913-11e8-8363-da1f9b621cfa.png) |
| [Analytics](https://docs.microsoft.com/en-us/appcenter/quickstarts/android/analytics)             | View user analytics                                        | ![image](https://user-images.githubusercontent.com/30265843/38382813-953b1b56-3913-11e8-9e47-0f12c3f52149.png) |
| [CodePush](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/)                     | Deploy mobile app updates directly to their users’ devices | ![image](https://user-images.githubusercontent.com/30265843/38382840-a801ed64-3913-11e8-9e0d-36a5b7092a98.png) |
