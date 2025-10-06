import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IntroScreen: undefined;
  SelectionScreen: undefined;
};

export type GeneralNavigationProp = NavigationProp<RootStackParamList>;
