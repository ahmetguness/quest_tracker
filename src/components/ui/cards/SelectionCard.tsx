import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../theme/colors";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

interface SelectionCardProps {
  title: string;
  description: string;
  isSelected: boolean;
  onPress: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  description,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.root, { borderColor: isSelected ? "blue" : "white" }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.85 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}:</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.15,
            // backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isSelected ? (
            <Feather name="check-circle" size={26} color="blue" />
          ) : (
            <Entypo name="circle" size={26} color="gray" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SelectionCard;

const styles = StyleSheet.create({
  root: {
    width: "90%",
    height: "16%",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 16,
    marginVertical: 6,
    padding: "3%",
  },
  titleContainer: {
    width: "100%",
    height: "35%",
    // backgroundColor: "red",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
  },
  descriptionContainer: {},
  descriptionText: {},
});
