import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";

const LoginScreen = () => {
  const userType = useSelector((state: RootState) => state.user.userType);
  console.log(userType);
  return (
    <View style={styles.root}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
