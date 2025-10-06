import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/colors";
import { styles } from "./styles";

const SelectionScreen = () => {
  return (
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      style={styles.root}
    >
      <Text>asdasdasd</Text>
    </LinearGradient>
  );
};

export default SelectionScreen;
