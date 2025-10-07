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
      navigation.navigate("LoginScreen");
    } else {
      Alert.alert("Please select a plan");
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      style={styles.root}
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
