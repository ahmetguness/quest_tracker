import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/colors";
import { styles } from "./styles";
import SelectionCard from "../../components/ui/cards/SelectionCard";
import TextButton from "../../components/ui/buttons/TextButton";
import { Alert, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types";
import { useDispatch } from "react-redux";
import { setUserType } from "../../hooks/redux_toolkit/slices/UserSlice";
import { UserType } from "../../models/UserModel";

const SelectionScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();
  const [selectedCard, setSelectedCard] = useState<UserType>(null);
  const dispatch = useDispatch();

  const handleSelect = (type: UserType) => {
    setSelectedCard((prev) => (prev === type ? null : type));
  };

  const handleGoNextPage = () => {
    if (selectedCard) {
      dispatch(setUserType(selectedCard));
      if (selectedCard === "child") {
        navigation.navigate("ChildHomeScreen");
      } else if (selectedCard === "parent") {
        navigation.navigate("LoginScreen");
      } else if (selectedCard === "guest") {
        navigation.navigate("GuestHomeScreen");
      }
    } else {
      Alert.alert("Please select a plan");
    }
  };

  return (
    <LinearGradient
      style={styles.root}
      colors={[COLORS.primary, COLORS.secondary]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../../assets/background/bgc.png")}
        />
        <Text style={{ fontSize: 20, marginTop: "4%", fontWeight: "bold" }}>
          Please Select Your Plan
        </Text>
      </View>

      <SelectionCard
        title="Parent"
        description="ParentParentParentParentParentParentParentParentParentParentParentParentParentParentParentParentParentParentParentParent"
        isSelected={selectedCard === "parent"}
        onPress={() => handleSelect("parent")}
      />
      <SelectionCard
        title="Child"
        description="ChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChildChild"
        isSelected={selectedCard === "child"}
        onPress={() => handleSelect("child")}
      />
      <SelectionCard
        title="Guest"
        description="GuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuestGuest"
        isSelected={selectedCard === "guest"}
        onPress={() => handleSelect("guest")}
      />

      <TextButton title="GO NEXT" onPress={handleGoNextPage} />
    </LinearGradient>
  );
};

export default SelectionScreen;
