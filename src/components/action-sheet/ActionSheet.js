import React, { useEffect, useState } from 'react';
import { Animated, Easing, Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../colors/Colors';

const ActionSheetOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const ActionSheetList = styled.View`
  background-color: ${colors.white};
  padding: 16px 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const ActionSheetItemWrapper = styled.TouchableHighlight`
  padding: 16px;
`;

const ActionSheetItemTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto-Bold';
  color: ${(props) => props.color ?? colors.textColor};
  text-transform: uppercase;
`;

export const ActionSheetItem = ({ title, onPress, type }) => {
  const _type = type ?? 'default';
  const _actionTypes = {
    default: {
      color: colors.textColor,
    },
    destructive: {
      color: colors.red,
    },
  };

  return (
    <ActionSheetItemWrapper onPress={onPress} underlayColor={colors.lightGray}>
      <ActionSheetItemTitle color={_actionTypes[_type].color}>
        {title}
      </ActionSheetItemTitle>
    </ActionSheetItemWrapper>
  );
};

export const ActionSheet = ({ children, isOpen, onPressCancel }) => {
  const [animation] = useState(new Animated.Value(0));
  // eslint-disable-next-line prettier/prettier
  const AnimatedActionSheetOverlay = Animated.createAnimatedComponent(ActionSheetOverlay);
  // eslint-disable-next-line prettier/prettier
  const AnimatedActionSheetList = Animated.createAnimatedComponent(ActionSheetList);
  const windowHeight = Dimensions.get('window').height;

  const animatedStyles = {
    overlay: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [windowHeight, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: animation,
    },
    list: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [300, 0],
          }),
        },
      ],
    },
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, [isOpen, animation]);

  return (
    <AnimatedActionSheetOverlay style={[animatedStyles.overlay]}>
      <AnimatedActionSheetList style={[animatedStyles.list]}>
        <SafeAreaView style={{ backgroundColor: colors.white }}>
          {children}
          <ActionSheetItem title="Cancelar" onPress={onPressCancel} />
        </SafeAreaView>
      </AnimatedActionSheetList>
    </AnimatedActionSheetOverlay>
  );
};
