import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/colors";
import { styles } from "./styles";
import { View } from "react-native";

const LoginScreen = () => {
  return (
    <LinearGradient
      style={styles.root}
      colors={[COLORS.primary, COLORS.secondary]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.bottomContainer}></View>
    </LinearGradient>
  );
};

export default LoginScreen;
