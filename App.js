import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { StartApp } from "./src/components/StartApp";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StartApp />
          <Toast position="top" topOffset={20} />
          <StatusBar style="auto" />
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
  },
});
