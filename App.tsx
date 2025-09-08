// import * as React from 'react';
// import * as SecureStore from 'expo-secure-store';
// import { Text, TextInput, View, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from 'react-native';

// // Types for navigation
// type RootStackParamList = {
//   Home: undefined;
//   SignIn: undefined;
// };

// type DrawerParamList = {
//   Main: undefined;
// };

// const AuthContext = React.createContext<{
//   signIn: (data: { username: string; password: string }) => void;
//   signOut: () => void;
// } | null>(null);

// function SplashScreen() {
//   return (
//     <View style={styles.centered}>
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   const authContext = React.useContext(AuthContext);

//   if (!authContext) return null;

//   return (
//     <View style={styles.centered}>
//       <Text>Welcome to the Home Screen!</Text>
//       <Button title="Sign out" onPress={authContext.signOut} />
//     </View>
//   );
// }

// function SignInScreen() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const authContext = React.useContext(AuthContext);

//   if (!authContext) return null;

//   return (
//     <View style={styles.centered}>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button
//         title="Sign in"
//         onPress={() => authContext.signIn({ username, password })}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator<DrawerParamList>();

// function RootStackNavigator() {
//   const [state, dispatch] = React.useReducer(
//     (prevState: any, action: any) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

//   React.useEffect(() => {
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await SecureStore.getItemAsync('userToken');
//       } catch (e) {
//         console.error('Failed to restore token', e);
//       }

//       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//     };

//     bootstrapAsync();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async (data: { username: string; password: string }) => {
//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//         await SecureStore.setItemAsync('userToken', 'dummy-auth-token');
//       },
//       signOut: async () => {
//         dispatch({ type: 'SIGN_OUT' });
//         await SecureStore.deleteItemAsync('userToken');
//       },
//     }),
//     []
//   );

//   if (state.isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         {state.userToken == null ? (
//           <Stack.Navigator>
//             <Stack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{ title: 'Sign In' }}
//             />
//           </Stack.Navigator>
//         ) : (
//           <Drawer.Navigator>
//             <Drawer.Screen name="Main" component={HomeScreen} />
//           </Drawer.Navigator>
//         )}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }

// export default function App() {
//   return <RootStackNavigator />;
// }

// const styles = StyleSheet.create({
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     width: 200,
//     paddingHorizontal: 8,
//   },
// });

//------------------------------ Version with an attempt at Firestore------------------------------------

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from "expo-font";
// import { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getFirestore, collection, addDoc } from "firebase/firestore";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import SignInScreen from "./app/SignInScreen";
// import SignUpScreen from "./app/SignUpScreen";
// import HomePage from './app/HomePage';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDnA-zPBQ2H9FWlk1Z8zPTwfbtqrI3uDJA",
//   authDomain: "bookeasii.firebaseapp.com",
//   projectId: "bookeasii",
//   storageBucket: "bookeasii.firebasestorage.app",
//   messagingSenderId: "561713353147",
//   appId: "1:561713353147:web:dd7e771d3cd3392bfab49e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Monitor authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoggedIn(!!user);
//     });
//     return () => unsubscribe(); // Clean up the listener
//   }, []);

//   // Function to add data to Firestore
//   const addData = async () => {
//     try {
//       const docRef = await addDoc(collection(db, "Tv Shows"), {
//         name: "Fullmetal Alchemist",
//         year: 2011,
//         studio: "Studio Bones",
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   // Add data to Firestore when the app starts
//   useEffect(() => {
//     addData();
//   }, []); // Empty dependency array ensures this runs only once

//   // Load fonts
//   const [fontsLoaded] = useFonts({
//     'InriaSans-Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
//     'InriaSans-Regular': require('./assets/fonts/InriaSans-Regular.ttf'),
//     'InriaSans-Light': require('./assets/fonts/InriaSans-Light.ttf'),
//   });

//   if (!fontsLoaded) {
//     return <Text>Loading Fonts...</Text>;
//   }

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
//           <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

// ---------------------------------- Version with firebase authentication----------------------------------------------
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from "expo-font";
// import { useState, useEffect } from 'react';
// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import SignInScreen from "./app/SignInScreen";
// import SignUpScreen from "./app/SignUpScreen";
// import HomePage from './app/HomePage';
// import StoreFront from './app/StoreFrontScreen';
// // import CollapsibleSection from './utils/CollapsibleSection';
// import BookingScreen from './app/StoreBookingScreen';


// const Stack = createNativeStackNavigator();

// export default function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDnA-zPBQ2H9FWlk1Z8zPTwfbtqrI3uDJA",
//     authDomain: "bookeasii.firebaseapp.com",
//     projectId: "bookeasii",
//     storageBucket: "bookeasii.firebasestorage.app",
//     messagingSenderId: "561713353147",
//     appId: "1:561713353147:web:dd7e771d3cd3392bfab49e"
//   };

//   // Phiwokuhle Zulu
//   // admin@email.com
//   // Password0

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

//   // Monitor authentication state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoggedIn(!!user);
//     });
//     return () => unsubscribe(); // Clean up the listener
//   }, []);
  
//   // Load fonts
//   const [fontsLoaded] = useFonts({
//     'InriaSans-Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
//     'InriaSans-Regular': require('./assets/fonts/InriaSans-Regular.ttf'),
//     'InriaSans-Light': require('./assets/fonts/InriaSans-Light.ttf'),
//   });

//   // return <SignInScreen/>

//   return(
//     <NavigationContainer>
//       {isLoggedIn ? <Stack.Navigator>
//         <Stack.Screen name='Home' component={HomePage} options={{headerShown: false}}/>
//         <Stack.Screen name='StoreFront' component={StoreFront} options={{headerShown: false}}/>
//         <Stack.Screen name='BookingScreen' component={BookingScreen} options={{headerShown: false}}/>
//       </Stack.Navigator> : 
//         <Stack.Navigator>
//           <Stack.Screen name='Sign In' component={SignInScreen} options={{headerShown: false}}/>
//           <Stack.Screen name='Sign Up'component={SignUpScreen} options={{headerShown: false}}/>
//         </Stack.Navigator>}
//     </NavigationContainer>
//   );
//  }
// --------------------------------Version with firebase authentication--------------------------------------------------------
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
  storageBucket: "bookeasii.firebaseapp.com",
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