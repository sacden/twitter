import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const NewTweetButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewTweet");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <MaterialCommunityIcons name={"feather"} size={30} color="white" />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
