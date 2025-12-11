// screens/ProfileScreen.js
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { COLORS, SPACING, RADII, FONTS } from '../theme'; // Tema jetonlarını içeri aktar [cite: 122]

export default function ProfileScreen() {
  const [theme, setTheme] = useState('light'); // Temayı tutan durum (state) [cite: 124]
  const currentTheme = COLORS[theme]; // Seçili temaya göre renkleri al [cite: 125]

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.bg }]}> {/* Arka planı temaya göre ayarla [cite: 128] */}
      <Text style={[styles.title, { color: currentTheme.text }]}>
        Profile Card
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold, // Font jetonunu kullan [cite: 142]
    fontSize: 24,
  },
});