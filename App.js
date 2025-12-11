// App.js
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'MontserratBold': require('./assets/fonts/Montserrat-Bold.ttf'),
  }); // Yüklemek istediğimiz fontları tanımlıyoruz [cite: 30, 31, 32, 33]

  if (!fontsLoaded) {
    return null; // Fontlar yüklenmezse hiçbir şey gösterme [cite: 34, 35]
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fonts Loaded!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'MontserratBold', // Yüklediğimiz fontu kullanıyoruz [cite: 53]
    fontSize: 24,
  },
});