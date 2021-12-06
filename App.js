import * as React from "react";
import { View, Text } from "react-native";
import RootNavigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation></RootNavigation>
    </Provider>
  );
}
