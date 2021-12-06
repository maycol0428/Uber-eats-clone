import React from "react";
import {
  SafeAreaView,
  Icon,
  Text,
  View,
  TouchableOpacity,
} from "../../helpers/base";

const bottomsTapsItems = [
  {
    type: "font-awesome-5",
    name: "home",
    title: "Home",
  },
  {
    type: "font-awesome-5",
    name: "search",
    title: "Browse",
  },
  {
    type: "font-awesome-5",
    name: "shopping-bag",
    title: "Grocery",
  },
  {
    type: "font-awesome-5",
    name: "receipt",
    title: "Orders",
  },
  {
    type: "font-awesome",
    name: "user",
    title: "Account",
  },
];
export default function BottomTaps() {
  return (
    <SafeAreaView className="flex-row py-1 px-6 justify-between">
      {bottomsTapsItems.map(({ type, name, title }, index) => (
        <TouchableOpacity key={index}>
          <View>
            <Icon type={type} name={name} size={20}></Icon>
            <Text className="text-xs">{title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
