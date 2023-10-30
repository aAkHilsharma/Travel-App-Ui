import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 flex justify-end">
      <Image
        source={require("../assets/images/welcome.png")}
        className="h-full w-full absolute"
      />

      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={["transparent", "rgba(3, 105, 161, 0.8)"]}
          style={{ width: wp(100), height: hp(60) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <View className="space-y-3">
          <Text
            className="text-white font-bold text-5xl"
            style={{ fontSize: wp(10) }}
          >
            Travelling made easy!
          </Text>
          <Text
            className="text-neutral-200 font-medium"
            style={{ fontSize: wp(4) }}
          >
            Experienc the world's best adventure around the world with us
          </Text>
        </View>
        <TouchableOpacity
          className="bg-orange-500 mx-auto p-3 px-12 rounded-full"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            Let's go!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}