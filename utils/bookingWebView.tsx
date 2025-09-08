import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function BookingPayment() {
    
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://buy.stripe.com/test_eVa4hWdYp8kl5jy9AA' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
