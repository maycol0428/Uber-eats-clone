import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, SafeAreaView } from "../helpers/base";
import FormatNumber from "../helpers/FormatNumber";
import GlobalStyles from "../helpers/base/globalStyle";
import {
  selectCartItems,
  selectCartRestaurantName,
} from "../redux/slices/cartSlice";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItem from "../components/RestaurantDetail/MenuItem";
import { ScrollView } from "react-native";
export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [],
  });
  const cartItems = useSelector(selectCartItems);
  const restaurantName = useSelector(selectCartRestaurantName);
  const totalUSD = FormatNumber(cartItems);

  useEffect(() => {
    const db = firebase.firestore();
    const unSubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return unSubscribe;
  }, []);

  return (
    <SafeAreaView
      style={[GlobalStyles.androidSafeArea]}
      className={["flex-1 bg-white "]}
    >
      {/* green checkmark */}
      <View className="flex-1 mx-3 mt-3">
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 20 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text className="text-center text-xl font-bold mb-3">
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        {/* menuitems */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem
            marginBottom="0"
            foods={lastOrder.items}
            isHideCheckBox={true}
          ></MenuItem>
          <LottieView
            style={{ height: 200, alignSelf: "center", marginBottom: 40 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
      {/* cooking */}
    </SafeAreaView>
  );
}
