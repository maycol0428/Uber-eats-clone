import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Icon, Image, Text, TouchableOpacity, View } from "../../helpers/base";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../redux/slices/restaurantSlice";

export default function RestaurantItem({ restaurants }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <>
      {restaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          className="mt-2"
          onPress={() => {
            dispatch(setRestaurant(restaurant));
            navigation.navigate("RestaurantDetail");
          }}
        >
          <View className="bg-white p-4">
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity className="absolute top-8 right-8">
      <Icon
        type="material-community"
        name="heart-outline"
        size={25}
        color="#fff"
      />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View className="flex-row justify-between items-center mt-3">
    <View>
      <Text className="text-sm font-bold">{props.name}</Text>
      <Text className="text-xs text-gray-500">30-45 • min</Text>
    </View>
    <View className="bg-gray-200 p-1.5 items-center justify-center rounded-full">
      <Text>{props.rating}</Text>
    </View>
  </View>
);
