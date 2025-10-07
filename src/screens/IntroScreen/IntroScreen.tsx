import { Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import TextButton from "../../components/ui/buttons/TextButton";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/colors";
import { ONBOARDING_CONTENT } from "../../data/data";
import { APP_NAME } from "../../data/appData";
import { useState } from "react";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();

  const [contentIndex, setContentIndex] = useState(() =>
    Math.floor(Math.random() * ONBOARDING_CONTENT.length)
  );

  const handlePress = () => {
    const newIndex = Math.floor(Math.random() * ONBOARDING_CONTENT.length);
    setContentIndex(newIndex);
  };

  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      activeOpacity={1}
      onPress={handlePress}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.root}
      >
        <Text style={[styles.text, { fontSize: 20, fontWeight: "bold" }]}>
          {APP_NAME}
        </Text>
        <Text style={styles.text}>{ONBOARDING_CONTENT[contentIndex].top}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/background/bgc.png")}
        />

        <Text style={styles.text}>
          {ONBOARDING_CONTENT[contentIndex].bottom}
        </Text>

        <TextButton
          title="NEXT PAGE"
          onPress={() => navigation.navigate("SelectionScreen")}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default IntroScreen;
