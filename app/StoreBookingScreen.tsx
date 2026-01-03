import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, Image, TextInput, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StoreFrontNavigationProp } from "../utils/navigationStack";
import styles from "../utils/styles";
import BookingPayment from "../utils/bookingWebView";

const BookingScreen = () => {

    const navigation = useNavigation<StoreFrontNavigationProp>();
    const [webViewVisible, setWebViewVisible] = React.useState(false);

    return(
        <View style={styles.bookingScreenContainer}>
            <View style={styles.bookingsTitle}>
                <TouchableHighlight 
                    onPress={() => navigation.navigate('BookingScreen')}
                    style={{borderRadius: 100}}
                    >
                    <Image style={{height: 30, width: 30, backgroundColor: 'white', borderRadius: 100,}} source={require('../assets/images/backButtonImage(1).png')}/>
                </TouchableHighlight>

                <Text style={[styles.headerText2, {paddingTop: 5, marginLeft: 80}]}>Set up an appointment</Text>
            </View>

            <View style={styles.bookingItems}>
                {/* {width: '100%',  height: 61, borderWidth: 'black'} */}
                <View style={styles.bookedService}>
                    <Text style={[styles.headerText2, {paddingBottom: 2}]}>Butterfly Locs - Long</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={[styles.bodyText2]}>120 minutes</Text>
                        <Text style={[styles.headerText2]}>R 1000.00</Text>
                    </View>
                </View>

                <TouchableHighlight style={styles.extraService}>
                    <Text style={[styles.bodyText2]}>+ Add an Extra Service</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.bookingsOptions}>
                <View style={[styles.divider, {borderColor: 'black', marginBottom: 20}]}/>
                <Text style={[styles.bodyText]}>Date:</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <TextInput 
                        placeholder="yyyy-mm-dd"
                        style={[styles.dateInput, {width: 285, borderBottomRightRadius: 0, 
                                borderTopRightRadius: 0, borderRightWidth: 0}]}
                    />
                    <TouchableOpacity style={[styles.calenderSelect]}>
                        <Image style={{alignSelf: 'center'}} source={require('../assets/images/CalendarIcon.png')}/>
                    </TouchableOpacity>
                </View>
                
                <Text style={[styles.bodyText, {marginTop: 15}]}>Time Slot:</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={[styles.timeSlotTab]}>
                        <Text style={[styles.bodyText2, {alignSelf: 'center'}]}>3:00PM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.timeSlotTab]}>
                        <Text style={[styles.bodyText2, {alignSelf: 'center'}]}>4:00PM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.timeSlotTab]}>
                        <Text style={[styles.bodyText2, {alignSelf: 'center'}]}>5:00PM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.timeSlotTab]}>
                        <Text style={[styles.bodyText2, {alignSelf: 'center'}]}>6:00PM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.timeSlotTab]}>
                        <Text style={[styles.bodyText2, {alignSelf: 'center'}]}>7:00PM</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.bookingSummary}>
                <View style={[styles.divider, {borderColor: 'black'}]}/>
                <Text style={[styles.bodyText, {textAlign: 'center', marginTop: 20}]}>
                    August, Friday 19 2016 {'\n'}
                    @(65 6th St, Parkhurst, Randburg 2193)
                </Text>

                <Text style={[styles.bodyText, {marginTop: 10}]}>
                    Butterfly Locs - Long {'\n'}
                    3:00PM - 5:00PM
                </Text>

                <Text style={[styles.bodyText, {alignSelf: 'flex-end'}]}>
                    Total: {'\n'} 
                    R1 000.00
                </Text>

                <TouchableOpacity 
                    style={styles.brownButton}
                    onPress={() => setWebViewVisible(true)}
                >
                    <Text style={[styles.bodyText, {color: 'white', alignSelf: 'center'}]}>Confirm Booking</Text>
                </TouchableOpacity>

                <Modal visible={webViewVisible} animationType="slide">
                    <BookingPayment />
                </Modal>
            </View>
        </View>
    );
};

export default BookingScreen;