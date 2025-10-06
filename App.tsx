import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import store from "./src/hooks/redux_toolkit/store";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
}
