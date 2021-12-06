import React from "react";
import { Icon, Text, View } from "../../helpers/base";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_CLOUD_MAPS_KEY } from "@env";
const SearchBar = ({ setCity }) => {
  return (
    <View className="mt-4 flex-row">
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          setCity(city);
        }}
        query={{
          key: GOOGLE_CLOUD_MAPS_KEY,
          language: "es",
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View className={["ml-2"]}>
              <Icon type="ionicon" size={24} name="location-sharp"></Icon>
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View
              className={[
                "mr-3 flex-row bg-white p-2 rounded-full items-center",
              ]}
            >
              <Icon
                className="mr-1"
                type="antdesign"
                name="clockcircle"
                size={11}
              />
              <Text>Search</Text>
            </View>
          );
        }}
      ></GooglePlacesAutocomplete>
    </View>
  );
};

export default SearchBar;
