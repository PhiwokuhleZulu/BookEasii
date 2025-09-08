// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableHighlight } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import styles from "../utils/styles";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const SignUpScreen = ({ navigation }: { navigation: any }) => {

//     const [roles, setRoles] = useState<string>("");
//     const [values, setValues] = useState<{email: string; password: string; password2: string; fname: string; role: string}>({
//             email: "",
//             password: "",
//             password2: "",
//             fname: "",
//             role: "",
//         })
    
//         function handleChange(text: string, eventName: keyof typeof values){
//             setValues(prev => {
//                 return {
//                     ...prev,
//                     [eventName] : text
//                 }
//             })
//         }

//     function SignUp() {
//         if (values.password == values.password2) {

//             const auth = getAuth();
//             createUserWithEmailAndPassword(auth, values.email, values.password)
//             .then((userCredential) => {
//                 // Signed up 
//                 const user = userCredential.user;
//                 navigation.navigate('Sign In');
//             })
//             .catch((error) => {
//                 alert(error.message)
//             });
//         } else {
//             alert("Passwords do not match")
//         }
//     }

//     return(
//         <View style={styles.signUpContainer}>
//             <Text style={[styles.headerText, {color: 'white', marginBottom: 15}]}>Sign Up</Text>
//             <TextInput
//                 style={styles.signUpInput}
//                 placeholder='Full Name'
//                 //placeholderTextColor={'#D7D7D7'}
//                 //value={dishName}
//                 onChangeText={text => handleChange(text, "fname")}
//             />
//             <TextInput
//                 style={styles.signUpInput}
//                 placeholder='Email'
//                 //placeholderTextColor={'#D7D7D7'}
//                 //value={dishName}
//                 onChangeText={text => handleChange(text, "email")}
//             />
//             <TextInput
//                 style={styles.signUpInput}
//                 placeholder='Password'
//                 secureTextEntry={true}
//                 //placeholderTextColor={'#D7D7D7'}
//                 //value={dishName}
//                 onChangeText={text => handleChange(text, "password")}
//             />
//             <TextInput
//                 style={styles.signUpInput}
//                 placeholder='Confirm Password'
//                 secureTextEntry={true}
//                 //placeholderTextColor={'#D7D7D7'}
//                 //value={dishName}
//                 onChangeText={text => handleChange(text, "password2")}
//             />
//             <Text style={[styles.bodyText, {color: 'white', marginTop: 15}]}>Specify your role by typing one of the following</Text>
//             <Text style={[styles.bodyText, {color: 'white'}]}>- Host: if you plan to host a storefront</Text>
//             <Text style={[styles.bodyText, {color: 'white', marginBottom: 5}]}>- Client: if you're looking to browse and use services.</Text>
//             <TextInput
//                 style={styles.signUpInput}
//                 placeholder="Role"
//                 onChange={text => handleChange(text, "role")}
//             />
//             <TouchableHighlight style={styles.signInButton} onPress={() => SignUp()}>
//                 <Text style={{fontFamily: 'InriaSans-Regular', fontSize: 15}}>Create new account</Text>
//             </TouchableHighlight>
//             <View style={styles.signUpRow}>
//                 <Text style={[styles.bodyText, {color: 'white'}]}>Already have an account?</Text>
//                 <Text 
//                     style={[styles.bodyText, {color: '#A8C6A6'}]}
//                     onPress={()=>navigation.navigate('Sign In')}
//                 > Sign In</Text>
//             </View>
//         </View>
//     );
// };

// export default SignUpScreen;

import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Alert } from "react-native";
import styles from "../utils/styles";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }: { navigation: any }) => {
    const [values, setValues] = useState<{
        email: string;
        password: string;
        password2: string;
        fname: string;
        role: string;
    }>({
        email: "",
        password: "",
        password2: "",
        fname: "",
        role: "",
    });

    function handleChange(text: string, eventName: keyof typeof values) {
        setValues((prev) => ({
            ...prev,
            [eventName]: text,
        }));
    }

    function validateRole(role: string): boolean {
        const validRoles = ["Host", "Client"];
        return validRoles.includes(role);
    }

    function SignUp() {

        if (values.password !== values.password2) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        // Right now this is doing nothing. The user still signs up without a name
        if (values.fname == null) {
            Alert.alert("Error", "You must enter your name.");
            return;
        }

        if (!validateRole(values.role)) {
            Alert.alert("Error", "Invalid role. Please enter 'Host' or 'Client'.");
            return;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                Alert.alert("Success", "Account created successfully!");
                navigation.navigate("Sign In");
            })
            .catch((error) => {
                Alert.alert("Error", "Please enter an email.");
            });
    }

    return (
        <View style={styles.signUpContainer}>
            <Text style={[styles.headerText, { color: "white", marginBottom: 15 }]}>Sign Up</Text>
            <TextInput
                style={styles.signUpInput}
                placeholder="Full Name"
                onChangeText={(text) => handleChange(text, "fname")}
            />
            <TextInput
                style={styles.signUpInput}
                placeholder="Email"
                onChangeText={(text) => handleChange(text, "email")}
            />
            <TextInput
                style={styles.signUpInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => handleChange(text, "password")}
            />
            <TextInput
                style={styles.signUpInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(text) => handleChange(text, "password2")}
            />
            <Text style={[styles.bodyText, { color: "white", marginTop: 15 }]}>
                Specify your role by typing one of the following:
            </Text>
            <Text style={[styles.bodyText, { color: "white" }]}>- Host: if you plan to host a storefront</Text>
            <Text style={[styles.bodyText, { color: "white", marginBottom: 5 }]}>
                - Client: if you're looking to browse and use services
            </Text>
            <TextInput
                style={styles.signUpInput}
                placeholder="Role"
                onChangeText={(text) => handleChange(text, "role")}
            />
            <TouchableHighlight style={styles.signInButton} onPress={SignUp}>
                <Text style={{ fontFamily: "InriaSans-Regular", fontSize: 15 }}>Create new account</Text>
            </TouchableHighlight>
            <View style={styles.signUpRow}>
                <Text style={[styles.bodyText, { color: "white" }]}>Already have an account?</Text>
                <Text
                    style={[styles.bodyText, { color: "#A8C6A6" }]}
                    onPress={() => navigation.navigate("Sign In")}
                >
                    {" "}
                    Sign In
                </Text>
            </View>
        </View>
    );
};

export default SignUpScreen;
