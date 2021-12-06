import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Text, View, TouchableOpacity } from "../../helpers/base";
import {
  selectCartItems,
  selectCartRestaurantName,
} from "../../redux/slices/cartSlice";
import "intl";
import "intl/locale-data/jsonp/en";
import FormatNumber from "../../helpers/FormatNumber";
import { Modal } from "react-native";
import Order from "./Order";
import LottieView from "lottie-react-native";
import firebase from "../../firebase";
import { useNavigation } from "@react-navigation/core";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const cartRestaurantName = useSelector(selectCartRestaurantName);
  const totalUSD = FormatNumber(cartItems);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const checkOutModelContent = () => {
    return (
      <>
        <View className="flex-1 justify-end bg-black bg-opacity-70 ">
          <View className="bg-white px-5 pt-5  h-4/5 border ">
            <Text className="text-center text-2xl mb-3">
              {cartRestaurantName}
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cartItems}
              renderItem={({ item, index }) => (
                <Order key={index} item={item} />
              )}
              keyExtractor={(item) => item.title}
              ListFooterComponent={
                <View className="flex-row justify-between mt-5 pb-24">
                  <Text className="text-base">Subtotal</Text>
                  <Text className="text-base">{totalUSD}</Text>
                </View>
              }
            />
            <View className="flex-1 self-center flex-row absolute bottom-5 z-50 w-full justify-center">
              <TouchableOpacity
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}
                activeOpacity={0.7}
                className="flex-row mt-5 bg-black w-3/4 p-4 rounded-full relative justify-end"
              >
                <Text className=" text-white w-1/3 text-sm text-center ">
                  Check Out
                </Text>
                <Text className="text-white text-sm w-1/3 text-right ">
                  {totalUSD}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  const addOrderToFirebase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: cartItems,
        restaurantName: cartRestaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setLoading(false);
        navigation.navigate("OrderCompleted");
      });
  };

  return (
    <>
      <Modal
        statusBarTranslucent={true}
        hardwareAccelerated={true}
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkOutModelContent()}
      </Modal>
      {cartItems.length != 0 && (
        <View className="flex-1 self-center flex-row absolute bottom-5 z-50 w-full justify-center  ">
          <TouchableOpacity
            disabled={loading}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
            className="flex-row   bg-black w-3/4 p-4 rounded-full relative justify-end"
          >
            <Text className=" text-white w-1/3 text-sm text-center ">
              View Cart
            </Text>
            <Text className="text-white text-sm w-1/3 text-right ">
              {totalUSD}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {loading && (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      )}
    </>
  );
}
