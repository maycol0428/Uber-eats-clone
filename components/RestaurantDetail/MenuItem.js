import React from "react";
import { ScrollView } from "react-native";
import { Divider, Image, Text, View } from "../../helpers/base";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, setAddToCart } from "../../redux/slices/cartSlice";
import { selectRestaurant } from "../../redux/slices/restaurantSlice";
export default function MenuItem({
  marginBottom = 20,
  foods,
  isHideCheckBox = false,
}) {
  const dispatch = useDispatch();
  const { name: restaurantName } = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const isFooInCart = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.title === food.title));
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => {
          return (
            <View key={index}>
              <View className="flex-row m-5 justify-between items-center ">
                {!isHideCheckBox && (
                  <BouncyCheckBox
                    isChecked={isFooInCart(food, cartItems)}
                    onPress={(checkBoxValue) =>
                      dispatch(
                        setAddToCart({
                          item: food,
                          restaurantName,
                          checkBoxValue: checkBoxValue,
                        })
                      )
                    }
                    size={20}
                    fillColor="green"
                    unfillColor="white"
                    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                  />
                )}

                <View className="flex-1  justify-evenly mr-1">
                  <Text className="font-bold text-sm">{food.title}</Text>
                  <Text>{food.description}</Text>
                  <Text>{food.price}</Text>
                </View>
                <Image
                  source={{ uri: food.image }}
                  style={{ width: 100, height: 100, borderRadius: 8 }}
                ></Image>
              </View>
              {index != foods.length - 1 && (
                <Divider width={0.5} orientation="vertical"></Divider>
              )}
              {index === foods.length - 1 && (
                <Divider
                  className={`mb-${marginBottom}`}
                  width={0.5}
                  orientation="vertical"
                ></Divider>
              )}
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}
