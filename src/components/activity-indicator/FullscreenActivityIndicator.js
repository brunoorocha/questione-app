import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Animated, Dimensions } from 'react-native';
import { ActivityIndicatorFullScreenView } from './styles';
import { colors } from '../colors/Colors';

export const FullscreenActivityIndicator = ({ isVisible }) => {
  const [animation] = useState(new Animated.Value(0));
  // eslint-disable-next-line prettier/prettier
  const AnimatedActivityIndicatorView = Animated.createAnimatedComponent(ActivityIndicatorFullScreenView);
  const windowHeight = Dimensions.get('window').height;

  const animatedStyles = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 0.01],
          outputRange: [windowHeight, 0],
          extrapolate: 'clamp',
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
  }, [animation, isVisible]);

  return (
    <AnimatedActivityIndicatorView style={animatedStyles}>
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </AnimatedActivityIndicatorView>
  );
};
