import { useFonts } from "expo-font";
import { useState, useEffect } from 'react';
import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./app/SignInScreen";
import SignUpScreen from "./app/SignUpScreen";
import HomePage from './app/HomePage';
import StoreFront from './app/StoreFrontScreen';
import BookingScreen from './app/StoreBookingScreen';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnA-zPBQ2H9FWlk1Z8zPTwfbtqrI3uDJA",
  authDomain: "bookeasii.firebaseapp.com",
  projectId: "bookeasii",
  storageBucket: "bookeasii.firebasestorage.app",
  messagingSenderId: "561713353147",
  appId: "1:561713353147:web:dd7e771d3cd3392bfab49e"
};

// Ensure Firebase is only initialized once
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontsLoaded] = useFonts({
    'InriaSans-Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
    'InriaSans-Regular': require('./assets/fonts/InriaSans-Regular.ttf'),
    'InriaSans-Light': require('./assets/fonts/InriaSans-Light.ttf'),
  });

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading screen component
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name='StoreFront' component={StoreFront} options={{ headerShown: false }} />
      <Stack.Screen name='BookingScreen' component={BookingScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function UnauthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Sign In' component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Sign Up' component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
// import { useFonts } from "expo-font";
// import { useState, useEffect } from 'react';
// import { initializeApp, getApps } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import SignInScreen from "./app/SignInScreen";
// import SignUpScreen from "./app/SignUpScreen";
// import HomePage from './app/HomePage';
// import StoreFront from './app/StoreFrontScreen';
// import BookingScreen from './app/StoreBookingScreen';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDnA-zPBQ2H9FWlk1Z8zPTwfbtqrI3uDJA",
//   authDomain: "bookeasii.firebaseapp.com",
//   projectId: "bookeasii",
//   storageBucket: "bookeasii.firebaseapp.com",
//   messagingSenderId: "561713353147",
//   appId: "1:561713353147:web:dd7e771d3cd3392bfab49e"
// };

// // Ensure Firebase is only initialized once
// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

// const auth = getAuth();

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [fontsLoaded] = useFonts({
//     'InriaSans-Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
//     'InriaSans-Regular': require('./assets/fonts/InriaSans-Regular.ttf'),
//     'InriaSans-Light': require('./assets/fonts/InriaSans-Light.ttf'),
//   });

//   // Monitor authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoggedIn(!!user);
//     });
//     return unsubscribe;
//   }, []);

//   if (!fontsLoaded) {
//     return null; // or a loading screen component
//   }

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? <AuthenticatedStack /> : <UnauthenticatedStack />}
//     </NavigationContainer>
//   );
// }

// function AuthenticatedStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Home' component={HomePage} options={{ headerShown: false }} />
//       <Stack.Screen name='StoreFront' component={StoreFront} options={{ headerShown: false }} />
//       <Stack.Screen name='BookingScreen' component={BookingScreen} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }

// function UnauthenticatedStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Sign In' component={SignInScreen} options={{ headerShown: false }} />
//       <Stack.Screen name='Sign Up' component={SignUpScreen} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   );
// }


//-------------------------COMPLETE VERSION--------------------------------

// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// // Import screens
// import HomePage from './app/HomePage';
// import StoreFront from './app/StoreFrontScreen';
// import BookingScreen from './app/StoreBookingScreen';
// import SignInScreen from './app/SignInScreen';
// import SignUpScreen from './app/SignUpScreen';

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDnA-zPBQ2H9FWlk1Z8zPTwfbtqrI3uDJA",
//   authDomain: "bookeasii.firebaseapp.com",
//   projectId: "bookeasii",
//   storageBucket: "bookeasii.firebasestorage.app",
//   messagingSenderId: "561713353147",
//   appId: "1:561713353147:web:dd7e771d3cd3392bfab49e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Create navigators
// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// // Stack navigator for homepage -> storefront -> booking
// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomePage}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="StoreFront"
//         component={StoreFront}
//         options={{ title: "Storefront" }}
//       />
//       <Stack.Screen
//         name="Booking"
//         component={BookingScreen}
//         options={{ title: "Booking" }}
//       />
//     </Stack.Navigator>
//   );
// }

// // Drawer navigator with HomeStack
// function AppDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="HomeStack"
//         component={HomeStack}
//         options={{ title: "Home" }}
//       />
//     </Drawer.Navigator>
//   );
// }

// // Main App component
// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoggedIn(!!user);
//     });
//     return () => unsubscribe(); // Clean up listener
//   }, []);

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <AppDrawer />
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen
//             name="SignIn"
//             component={SignInScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="SignUp"
//             component={SignUpScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }