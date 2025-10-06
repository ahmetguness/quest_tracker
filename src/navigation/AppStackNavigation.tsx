import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import SelectionScreen from "../screens/SelectionScreen/SelectionScreen";

const AppStackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
