import React, { useState } from "react";
import { Text, View, TouchableHighlight, TextInput, Dimensions, Alert } from "react-native";
import styles from "../utils/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const { width, height } = Dimensions.get('window');

const SignInScreen = ({ navigation }: { navigation: any }) => {

    const [values, setValues] = useState<{email: string; password: string}>({
        email: "",
        password: "",
    })

    function handleChange(text: string, eventName: keyof typeof values){
        setValues(prev => {
            return {
                ...prev,
                [eventName] : text
            }
        })
    }

    function Login(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log("User signed in:", user);
            navigation.navigate('Home');
        })
        .catch((error) => {
            Alert.alert("Error", "Invalid Credentials. Please try again.");
        });
    }

    return(
        <View style={styles.signInContainer}>
            <View style={styles.signInBox}>
                <Text style={styles.headerText}>Sign In</Text>
                <View style={styles.signupRow}>
                    <Text style={styles.bodyText}>Don't have an account?</Text>
                    <Text 
                        style={[styles.bodyText, {color: '#A8C6A6'}]}
                        onPress={() => navigation.navigate('Sign Up')}
                    > Sign In</Text>
                </View>
                <TextInput 
                    style={styles.signInInput}
                    placeholder='Email'
                    onChangeText={text => handleChange(text, "email")}
                    //placeholderTextColor={'#D7D7D7'}
                    //value={dishName}
                />
                <TextInput 
                    style={styles.signInInput}
                    placeholder='Password'
                    onChangeText={text => handleChange(text, "password")}
                    secureTextEntry={true}
                    //placeholderTextColor={'#D7D7D7'}
                    //value={dishName}
                />
                <TouchableHighlight style={styles.signInButton} onPress={()=> Login()}>
                    <Text style={{fontFamily: 'InriaSans-Regular', fontSize: 15}}>Sign In</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default SignInScreen;