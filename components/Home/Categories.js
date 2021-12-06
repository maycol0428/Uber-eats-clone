import React from "react";
import { FlatList } from "react-native";
import { Image, Text, View } from "../../helpers/base";
const items = [
  {
    id: "123",
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    id: "456",
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    id: "789",
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    id: "1011",
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    id: "1012",
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    id: "1013",
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    id: "1014",
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View className="mt-2 bg-white">
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
function renderItem({ item: { id, image, text } }) {
  return (
    <View className="items-center px-5 py-2">
      <Image
        source={image}
        className="w-12 h-10"
        style={{ resizeMode: "contain" }}
      ></Image>
      <Text className="text-sm font-bold">{text}</Text>
    </View>
  );
}
