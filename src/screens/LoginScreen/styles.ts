import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bottomContainer: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
