import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { colors } from '../colors/Colors';
import { RowSkelectonView, NumberSkelectonView } from './styles';

export const SkelectonActitityIndicator = ({ type = 'row' }) => {
  const skelectonTypes = {
    row: RowSkelectonView,
    number: NumberSkelectonView,
  };
  const skelectonType = skelectonTypes[type];

  const [animationValue] = useState(new Animated.Value(0));
  const AnimatedSkelectonView = Animated.createAnimatedComponent(skelectonType);

  const animatedStyle = {
    backgroundColor: animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.lightGray, colors.mediumGray],
    }),
  };

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }),
      ]),
    );
    animation.start();

    return () => {
      animation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnimatedSkelectonView style={[animatedStyle]} />;
};
