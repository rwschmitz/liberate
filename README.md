# Liberate

## Purpose

The purpose of this app is:

- Allow users log notes about their anxiety, rate their anixety and communicate with a qualified professional

### Tools

- Google Firebase
- Google Firestore
- React Native
- React Navigation
- Styled Components

### Libraries / Packages

### React Native Setup

### iOS Development Environment

## Notes

---

### Apple Store

- App icon can not be transparent nor contain an alpha channel
  - [Github Issue #1086](https://github.com/expo/expo/issues/1086)
  - [Quick way to remove transparency / alpha channel](https://stackoverflow.com/questions/46585809/error-itms-90717-invalid-app-store-icon)
- Deploy application through [App Store Connect](https://appstoreconnect.apple.com)
- Application can also be upload via the Application Loader
  - [Stackoverflow 29741404](https://stackoverflow.com/questions/29741404/no-suitable-records-were-found-verify-your-bundle-identifier-is-correct)
- A quick way to deploy to Testflight for internal testing is to uncheck the box for bitwise compilation.
- Set up your bundle identifier on both developer.apple.com and appstoreconnect.apple.com

---

### Google Firebase

- Always have the most up to date GoogleService-Info.plist
- Ensure when setting up rules for the database, you're aware of defining rules for a Realtime Database or Google Firestore.
  - Different rules are written for different database types.
  - [Github Issue #12](https://github.com/firebase/friendlychat-ios/issues/12)

---

### React Native

- If `RCTBundleURLProvider.h` file is not found, you may need to change your schemes.
  - [Steps to change schemes](https://stackoverflow.com/questions/40368211/rctbundleurlprovider-h-file-not-found-appdelegate-m/44039891#44039891)

---

### React Native Firebase

- Ensure appropriate Pods are installed.
  - `pod 'Firebase/Core', '~> 5.15.0'`
  - `pod 'Firebase/Auth', '~> 5.15.0'`
- After installing the necessary pods, **within xCode**, you need to be opening the `.xcworkspace` file instead of the `.xcproj` file.
- Ensure an update to date GoogleService-Info.plist is installed at the correct location.
  - Location: ./ios/
- If the error `Filename.h file not found` occurs, it's possible your xCode project isn't looking at your `node_modules` folder.
  - [Github Issue #979, comment by leonelpena](https://github.com/invertase/react-native-firebase/issues/979#issuecomment-383919674)
  - [React Native, manually linking libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios#step-1-1)
  - The library you're looking for is likely located at `../node_modules/react-native-firebase/ios/RNFirebase`

---

#### Code Philosophy

- Start with large pages and break down redundant bits of code into re-usable components

##### Contact

- Email:    Rudolph.W.Schmitz@gmail.com
- Twitter:  [@RudolphSchmitz](https://twitter.com/RudolphSchmitz)
