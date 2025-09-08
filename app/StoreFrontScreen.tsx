import React, { useState } from "react";
import { View, Text, useWindowDimensions, 
        Image, ImageBackground, TouchableHighlight, 
        TouchableOpacity, ScrollView, Animated, Linking, 
        Dimensions,
        } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";
import { StoreFrontNavigationProp } from "../utils/navigationStack";
import styles from "../utils/styles";

const servicesTab = () => {

    const navigation = useNavigation<StoreFrontNavigationProp>();

    return(
        <View style={{ flex: 1, backgroundColor: '#322E2E' }}>
            <View style={styles.serviceContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('BookingScreen')}>
                    <Text style={[styles.bodyText, {paddingTop: 8, paddingLeft: 8}]}>Wash & Blow Dry (30min)</Text>
                    <Text style={[styles.headerText2, {paddingLeft: 8, paddingTop: 5}]}>R150.00</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.serviceContainer}>
                <TouchableOpacity>
                    <Text style={[styles.bodyText, {paddingTop: 8, paddingLeft: 8}]}>Dutch Braids - Medium (60min)</Text>
                    <Text style={[styles.headerText2, {paddingLeft: 8, paddingTop: 5}]}>R250.00</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.serviceContainer}>
                <TouchableOpacity>
                    <Text style={[styles.bodyText, {paddingTop: 8, paddingLeft: 8}]}>Butterfly Locs - Long (120min)</Text>
                    <Text style={[styles.headerText2, {paddingLeft: 8, paddingTop: 5}]}>R1 000.00</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const galleryTab = () => {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#322E2E' }}>
            <View style={styles.galleryRow}>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(1).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(2).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(3).png')}/>
            </View>

            <View style={styles.galleryRow}>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(4).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(5).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(6).png')}/>
            </View>

            <View style={styles.galleryRow}>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(7).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(8).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(9).png')}/>
            </View>   

            <View style={styles.galleryRow}>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(10).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(11).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(12).png')}/>
            </View>  

            <View style={styles.galleryRow}>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(13).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(14).png')}/>
                <Image style={{width: '30%', aspectRatio: 0.8}} source={require('../assets/images/GalleryImage(15).png')}/>
            </View>         
        </ScrollView>
    );
}

const reviewTab = () => {    
    return(
        <View style={{ flex: 1, backgroundColor: '#322E2E'}}>
            <View style={styles.clientReview}>
                <Text style={[styles.headerText2, {color: 'white', marginLeft: 15, marginVertical: 5}]}>Amahle Nxumalo</Text>
                <Text style={[styles.bodyText2, {color: 'white', marginHorizontal: 15}]}>Fantastic!!! Her service is the best ever, and she makes a great friend you can easily speak to</Text>
                <Image style={{alignSelf: 'flex-end', marginHorizontal: 15, marginBottom: 10}} source={require('../assets/images/5StarRatings.png')}/>
                <View style={styles.divider}/>
            </View>

            <View style={styles.clientReview}>
                <Text style={[styles.headerText2, {color: 'white', marginLeft: 15, marginVertical: 5}]}>Less.ego</Text>
                <Text style={[styles.bodyText2, {color: 'white', marginHorizontal: 15}]}>Boo shes alwys booked i can never get her to do my hair</Text>
                <Image style={{alignSelf: 'flex-end', marginHorizontal: 15, marginBottom: 10}} source={require('../assets/images/4StarRating.png')}/>
                <View style={styles.divider}/>
            </View>
        </View>
    )
}

const renderPage = SceneMap({
    first: servicesTab,
    second: galleryTab,
    third: reviewTab,
  });

const routes = [
    { key: 'first', title: 'Services'},
    { key: 'second', title: 'Gallery'},
    { key: 'third', title: 'Reviews'},
];

export default function StoreFront() {

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [collapsed, setCollapsed] = useState(true);
    const [animation] = useState(new Animated.Value(0));
        
        const toggleCollapse = () => {
            if (collapsed) {
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start();
            } else {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
            }
            setCollapsed(!collapsed);
        };
        
        const heightInterpolation = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 400], // Adjust the height based on your content
        });

    return(

        <View style={{ flex: 1, backgroundColor: '#322E2E'}}>

            <View style={[styles.storefrontLanding, { flex: 0.3 }]}>
                <TouchableOpacity onPress={toggleCollapse}>
                    <ImageBackground
                        source={require('../assets/images/landingImage(1).jpg')}
                        imageStyle={styles.storelandingImage}
                    >
                        <TouchableHighlight style={styles.backButton}>
                            <Image style={{height: 30, width: 30, backgroundColor: 'white', borderRadius: 100,}} source={require('../assets/images/backButtonImage(1).png')}/>
                        </TouchableHighlight>
                        
                        <View style={styles.landingText}>
                            
                                <Text style={[styles.headerText, {color: 'white'}]}>Milan Hair Studio</Text>
                                <Image source={require('../assets/images/5StarRatings.png')}/>
                                <Text style={[styles.bodyText, {color: 'white'}]}>21km</Text>
                            
                        </View>
                    </ImageBackground>
                </TouchableOpacity>            
            </View>

            <Animated.View style={[styles.collapsibleContent, 
                { height: heightInterpolation, 
                    position: 'absolute', 
                    top: layout.height * 0.3 - 45, 
                    left: 0, right: 0, 
                    zIndex: 1 }
                ]}>
                    <ScrollView>
                        <Text style={[styles.bodyText, {marginHorizontal: 20, marginVertical: 10}]}>
                        Hi, I’m Sanele Zulu! I’m a student and passionate stylist, combining my love for hiar with my studies. I specialize in trendy,
                        affordable styles that fit your vibe. Every booking helps me grow my salon and fund my education. Let’s create something beauriful together!
                        </Text>

                        <Text style={[styles.headerText2, {marginHorizontal: 20}]}>Open/Close Schedule</Text>
                        <Text style={[styles.bodyText, {marginHorizontal: 20}]}>
                            Monday to Friday:  3:00PM -  9:00PM{'\n'}
                            Saturday: 9:00AM - 6:00PM{'\n'}
                            Sunday: Closed
                        </Text>

                        <Text style={[styles.headerText2, {marginHorizontal: 20, marginTop: 10}]}>Social Medias</Text>
                        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                            <TouchableOpacity onPress={()=> {Linking.openURL("https://www.facebook.com/");}}>
                                <Image source={require('../assets/images/FacebookIcon.png')}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> {Linking.openURL("https://www.tiktok.com/en/");}}>
                                <Image source={require('../assets/images/TikTokIcon.png')}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=> {Linking.openURL("https://za.linkedin.com/");}}>
                                <Image source={require('../assets/images/LinkedinIcon.png')}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.headerText2, {marginHorizontal: 20, marginTop: 10}]}>Location</Text>
                        <Text style={[styles.bodyText, {marginHorizontal: 20}]}>
                            65 6th St, {'\n'}
                            Parkhurst, {'\n'}
                            Randburg, 2193
                        </Text>

                        <TouchableOpacity 
                            onPress={toggleCollapse}
                            style={{width: '100%', height: 40, 
                                    alignItems: 'center', justifyContent: 'center', 
                                    marginTop: 10}}
                        >
                            <Image style={{transform: [{ rotate:  "180deg"  }]}} source={require('../assets/images/PullUpButton.png')}/>
                        </TouchableOpacity>
                    </ScrollView>
                  </Animated.View>
            
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderPage}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => (
                    <TabBar {...props} 
                        style={{backgroundColor: '#322E2E'}}
                        indicatorStyle={{backgroundColor: '#A8C6A6'}}
                    />)}
                style={{flex: 1, zIndex: 0}}
            />
        </View>

        
    );
}
