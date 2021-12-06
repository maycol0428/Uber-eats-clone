import React, { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTaps from "../components/Home/BottomTaps";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItem from "../components/Home/RestaurantItem";
import SearchBar from "../components/Home/SearchBar";
import { SafeAreaView, View } from "../helpers/base";
import globalStyle from "../helpers/base/globalStyle";

import { getRestaurantsFromYelp } from "../https";
export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function Home() {
  const [restaurants, setRestaurant] = useState(localRestaurants);
  const [city, setCity] = useState("Nueva York");
  const [activeTap, setActiveTap] = useState("Delivery");

  useEffect(() => {
    (async () => {
      setRestaurant(await getRestaurantsFromYelp(activeTap, city));
    })();
  }, [city, activeTap]);
  return (
    <SafeAreaView
      className=" bg-gray-200"
      style={[globalStyle.androidSafeArea]}
    >
      <View className="p-3 bg-white">
        <HeaderTabs setActiveTap={setActiveTap} activeTap={activeTap} />
        <SearchBar setCity={setCity} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Categories></Categories>}
        ListFooterComponent={
          <RestaurantItem restaurants={restaurants}></RestaurantItem>
        }
      ></FlatList>
      <Divider width={1}></Divider>
      <BottomTaps></BottomTaps>
    </SafeAreaView>
  );
}
