import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "../../helpers/base";

export default function HeaderTabs({ activeTap, setActiveTap }) {
  return (
    <View className="flex-row justify-center">
      <HeaderButton
        text="Delivery"
        active={activeTap}
        btnColor="black"
        textColor="white"
        setActive={setActiveTap}
      ></HeaderButton>
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        active={activeTap}
        setActive={setActiveTap}
      ></HeaderButton>
    </View>
  );
}

const HeaderButton = ({ text, btnColor, textColor, setActive, active }) => {
  return (
    <TouchableOpacity
      onPress={() => setActive(text)}
      className={[
        active === text ? "bg-black" : "bg-white",
        "p-1 px-5 rounded-full",
      ]}
    >
      <Text
        className={[
          active === text ? "text-white" : "text-black",
          ,
          " text-lg font-bold",
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
