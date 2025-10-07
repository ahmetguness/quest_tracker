import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: "100%",
    height: "55%",
  },
  text: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: "center"
  },
});
