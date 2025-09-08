import React from "react";
import { View, Text, TextInput, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../utils/styles";

const HomePage = ({ navigation }: { navigation: any }) => {
    return(
        <View style={styles.HomePageContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
            />
            {/* Insert Filter UI */}
            <Text 
                style={[styles.bodyText2, {alignSelf: 'center', color: 'white', marginTop: 15}]}
            >Locations within 50km
            </Text>


            {/* All this storefront info will be in a function and referenced with a Flatlist in this return statement later */}
            <View  style={styles.storefrontContainer}>
                <TouchableOpacity 
                    style={{borderRadius: 5}}
                    onPress={() => navigation.navigate('StoreFront')}
                >
                    <ImageBackground
                        source={require('../assets/images/landingImage(1).jpg')}
                        style={styles.storefrontBackground}
                        imageStyle={styles.storefrontImage}
                    >
                        <View style={styles.storefrontOverlay}>
                            <View style={styles.storefrontContent}>
                                <Text style={[styles.headerText2, {paddingTop: 50}]}>Milan Hair Studio</Text>
                                <Text style={styles.bodyText2}>Parkhurst, Gauteng</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={require('../assets/images/5StarRatings.png')}/>
                                    <Text style={[styles.bodyText2, {paddingTop: 6, paddingLeft: 200}]}>21Km</Text>
                                </View>
                            </View>
                        </View>                        
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.storefrontContainer}>
                <TouchableOpacity style={{borderRadius: 5}}>
                    <ImageBackground
                        source={require('../assets/images/landingImage(2).jpg')}
                        style={styles.storefrontBackground}
                        imageStyle={styles.storefrontImage}
                    >
                        <View style={styles.storefrontOverlay}>
                            <View style={styles.storefrontContent}>
                                <Text style={[styles.headerText2, {paddingTop: 50}]}>Ofentse Hair & Beauty</Text>
                                <Text style={styles.bodyText2}>Sandton, Gauteng</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={require('../assets/images/4StarRating.png')}/>
                                    <Text style={[styles.bodyText2, {paddingTop: 6, paddingLeft: 200}]}>16Km</Text>
                                </View>
                            </View>
                        </View>                        
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <View style={styles.storefrontContainer}>
                <TouchableOpacity style={{borderRadius: 5}}>
                    <ImageBackground
                        source={require('../assets/images/landingImage(3).jpg')}
                        style={styles.storefrontBackground}
                        imageStyle={styles.storefrontImage}
                    >
                        <View style={styles.storefrontOverlay}>
                            <View style={styles.storefrontContent}>
                                <Text style={[styles.headerText2, {paddingTop: 50}]}>The Beauty Spot</Text>
                                <Text style={styles.bodyText2}>Rosebank, Gauteng</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Image source={require('../assets/images/5StarRatings.png')}/>
                                    <Text style={[styles.bodyText2, {paddingTop: 6, paddingLeft: 200}]}>10Km</Text>
                                </View>
                            </View>
                        </View>                        
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            
        </View>
    );
};

export default HomePage;