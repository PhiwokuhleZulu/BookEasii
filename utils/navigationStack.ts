import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define stack navigator types
type RootStackParamList = {
  Home: undefined;
  StoreFront: undefined;
  BookingScreen: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

// Export type for navigation
export type StoreFrontNavigationProp = NativeStackNavigationProp<RootStackParamList, "StoreFront">;
