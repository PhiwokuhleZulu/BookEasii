import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import StoreFront from "../app/StoreFrontScreen";

// const [loaded, error] = useFonts({
//   'Inter-Black': require('../assets/fonts/InriaSans-Bold.ttf'),
// });

export const Colors = {
  PrimaryBlack: "#000000",
  DarkBrown: '#322E2E',
  White: '#FFFFFF',
  Green: '#A8C6A6',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'InriaSans-Bold',
  },
  headerText2: {
    fontSize: 15,
    fontFamily: 'InriaSans-Bold',
  },
  bodyText: {
    fontSize: 15,
    fontFamily: 'InriaSans-Regular',
  },
  bodyText2: {
    fontSize: 15,
    fontFamily: 'InriaSans-Light',
  },

  //Styling for the SignInScreen component
  signInContainer: {
    backgroundColor: Colors.DarkBrown,
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
  signInBox: {
    backgroundColor: Colors.White,
    padding: 15,
    margin: 30,
    marginTop: 200,
    height: 264,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  signupRow: {
    flexDirection: 'row',
  },
  signInInput: {
    borderBottomWidth: 1,
  },
  signInButton: {
    height: 30,
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 5,
    backgroundColor: Colors.Green,
    borderRadius: 5,
  },

  //Styling for the SignUp screen component
  signUpContainer: {
    margin: 30,
    marginTop: 150,
    backgroundColor: Colors.DarkBrown,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
  },
  signUpInput: {
    backgroundColor: 'white',
    marginTop: 5,
    borderRadius: 5,
  },
  signUpButton: {

  },
  signUpRow: {
    margin: 5,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  // Styling for the HomePage screen component
  HomePageContainer: {
    backgroundColor: Colors.DarkBrown,
    height: '100%',
    width: 'auto',
    padding: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 30,
  },
  storefrontContainer: {
    marginRight: 50,
    borderRadius: 10,
    marginTop: 5,
    paddingBottom: 5,
  },

  storefrontBackground: {
    resizeMode: 'cover',
    height: 150,
    width: 370,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  storefrontImage: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.PrimaryBlack,
  },
  storefrontOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  storefrontContent: {
    flex: 1,
    margin: 10,
  },


  // Styling for the StoreFront Screen
  storefrontLanding: {

  },
  storelandingImage: {
    height: 200,
  },
  landingText: {
    margin: 30,
    marginTop: 10,
  },
  backButton: {
    // backgroundColor: Colors.White,
    margin: 15,
    marginTop: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    borderRadius: 50,
    paddingTop: 5,
  },
  collapsibleContent: {
    backgroundColor: Colors.White,
    // padding: 16,
    // borderRadius: 10,
    // marginHorizontal: 16,
    overflow: "hidden",
  },

  serviceContainer: {
    backgroundColor: Colors.Green,
    alignSelf: 'center',
    // marginVertical: 5,
    marginTop: 5,
    borderRadius: 10,
    width: '93%',
    height: 60,
    shadowColor: Colors.PrimaryBlack,
    shadowOffset: { width: 0, height: 10},
    shadowOpacity: 0.3,
  },

        // The following part is for the "Gallery" tab in the Storefront
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },

        // The following part is for the "Reviews" tab for the Storefront
  clientReview: {

  },
  divider: {
    borderColor: Colors.White,
    borderWidth: 0.5,
    marginHorizontal: 20,
  },

  // Styling for the Booking Screen for each storefront
  bookingScreenContainer: {
    flex: 1,
    backgroundColor: Colors.Green,
    flexDirection: 'column',
    padding: 15,
  },
  bookingsTitle: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  bookingItems: {
    height: 390,
  },
  bookedService: {
    width: '100%',
    height: 61,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: '#C5E0C4',
    padding: 10,
  },
  extraService: {
    width: '100%',
    height: 35,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 20,
    paddingLeft: 10,
  },

  bookingsOptions: {
    // margin: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  dateInput: {
    backgroundColor: Colors.White,
    width: 330,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  calenderSelect: {
    backgroundColor: Colors.White,
    height: 40,
    width: 45,
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
  },
  timeSlotTab: {
    backgroundColor: Colors.White,
    height: 40,
    width: 75,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 15,
    marginRight: -10,
  },

  bookingSummary: {
    justifyContent: 'flex-end',
    margin: 15,
  },
  brownButton: {
    width: '100%',
    backgroundColor: Colors.DarkBrown,
    borderRadius: 5,
    height: 35,
    justifyContent: 'center',
    marginTop: 5,
  }

});

export default styles;