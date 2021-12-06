import React from "react";
import { Text, View } from "../../helpers/base";

export default function Order({ item }) {
  const { title, price } = item;
  return (
    <View className="flex-row justify-between p-5 border-b border-gray-400">
      <Text className="flex-shrink">{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}
