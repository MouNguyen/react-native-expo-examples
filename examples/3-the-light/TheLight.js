import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  Switch,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import bulbOff from "../../assets/the-light-images/bulb-off.jpg";
import bulbOn from "../../assets/the-light-images/bulb-on.jpg";

export default function TheLight() {
  // https://reactjs.org/docs/hooks-reference.html#usestate
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Image
        fadeDuration={0}
        source={isEnabled ? bulbOn : bulbOff}
        style={styles.image}
      />

      {/* https://reactnative.dev/docs/switch */}
      <Switch
        trackColor={{ false: "#fff", true: "#52d964" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </SafeAreaView>
  );
}

// https://reactnative.dev/docs/dimensions
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: screenHeight - 180,
    resizeMode: "contain",
    marginBottom: 20,
  },
  switch: {
    alignSelf: "center",
    transform: Platform.OS === "android" ? [{ scale: 1.5 }] : [],
  },
});
