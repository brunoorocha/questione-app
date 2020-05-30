import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { SnackbarAreaView, SnackbarView, SnackbarText } from './styles';

export const Snackbar = ({ isVisible, text }) => {
  const [animation] = useState(new Animated.Value(0));
  // eslint-disable-next-line prettier/prettier
  const AnimatedSnackbarAreaView = Animated.createAnimatedComponent(SnackbarAreaView);

  const animatedStyles = {
    opacity: animation,
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1],
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isVisible, animation]);

  return (
    <AnimatedSnackbarAreaView style={[animatedStyles]}>
      <SnackbarView>
        <SnackbarText>{text}</SnackbarText>
      </SnackbarView>
    </AnimatedSnackbarAreaView>
  );
};
