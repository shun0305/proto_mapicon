import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const IndicatorScreen = () => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    async () => {
      setTimeout(setAnimating(false), 5000);
    };
  }, 1000);
  console.log(animating);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator animating={animating} />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default IndicatorScreen;
