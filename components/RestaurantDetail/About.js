import React from "react";
import { useSelector } from "react-redux";
import { Image, Text, View } from "../../helpers/base";
import { selectRestaurant } from "../../redux/slices/restaurantSlice";

const yelpApiRestaurantInfo = {
  name: "GArmaksdmasdasds",
  image: "https://images.unsplash.com/photo-1632985660129-0f67d8b1a48b",
  price: "USDadas",
  reviews: "133",
  rating: "5",
  categories: [{ title: "Thai" }, { title: "Comfort Foot" }],
};

export default function About() {
  const restaurant = useSelector(selectRestaurant);
  const { name, image_url, price, review_count, rating, categories } =
    restaurant;
  const formattedCategories = categories.map((cat) => cat.title).join(" · ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${review_count}+)`;
  return (
    <View className=" pb-3">
      <View className="w-full ">
        <Image
          source={{ uri: image_url }}
          style={{ resizeMode: "cover" }}
          className="w-full h-56"
        ></Image>
      </View>
      <Text className="text-xl font-bold mx-3 mt-2">{name}</Text>
      <Text className="mt-2 mx-3 text-sm">{description}</Text>
    </View>
  );
}
