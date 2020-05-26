import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { Paragraph } from '../typography/Typography';
import { colors } from '../colors/Colors';

const RadioButtonTouchableWrapper = styled.TouchableHighlight.attrs({
  underlayColor: colors.lightGray,
})`
  padding: 8px 8px 8px 0px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const RadioButtonWrapper = styled.View`
  flex-direction: row;
`;

const Radio = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => (props.isChecked ? colors.primaryColor : colors.darkGray)};
  border-radius: 12px;
  margin-right: 16px;
`;

const RadioBullet = styled.View`
  width: 12px;
  height: 12px;
  background-color: ${colors.primaryColor};
  border-radius: 6px;
`;

export const RadioButton = ({ onPress, label, isSelected }) => {
  const [bulletAnimation] = useState(new Animated.Value(0));
  const AnimatedRadioBullet = Animated.createAnimatedComponent(RadioBullet);
  const animatedRadioBulletStyle = {
    transform: [
      {
        scale: bulletAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1.0],
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(bulletAnimation, {
      toValue: isSelected ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [isSelected, bulletAnimation]);

  return (
    <RadioButtonTouchableWrapper onPress={onPress}>
      <RadioButtonWrapper>
        <Radio isChecked={isSelected}>
          {isSelected && (
            <AnimatedRadioBullet style={[animatedRadioBulletStyle]} />
          )}
        </Radio>
        <Paragraph>{label}</Paragraph>
      </RadioButtonWrapper>
    </RadioButtonTouchableWrapper>
  );
};
