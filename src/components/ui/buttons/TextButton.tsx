import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../theme/colors";

interface TextButtonProps {
  title: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  root: {
    width: "50%",
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    color: COLORS.text,
  },
});
