import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const CollapsibleSection = () => {
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
    outputRange: [0, 100], // Adjust the height based on your content
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        {/* <Text style={styles.headerText}>Tap to {collapsed ? 'Expand' : 'Collapse'}</Text> */}
        <Text style={styles.headerText}>Tap to Expand</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.content, { height: heightInterpolation }]}>
        <Text style={styles.contentText}>
          This is the hidden content that appears when you tap the header.
        </Text>

        <TouchableOpacity onPress={toggleCollapse}>
            <Text>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#A8C6A6',
    padding: 16,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#F0F0F0',
    padding: 16,
  },
  contentText: {
    fontSize: 14,
  },
});

export default CollapsibleSection;