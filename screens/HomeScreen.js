import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6 " + topMargin}
      >
        {/* Header */}
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              color="gray"
              className="flex-1 text-base pl-1 tracking-wider"
            />
          </View>
        </View>

        {/* categories */}
        <View className="mb-4">
          <Categories />
        </View>

        {/* sorted categories */}
        <View className="mb-4">
          <SortCategories />
        </View>

        {/* destinations */}
        <View className="">
          <Destinations />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
