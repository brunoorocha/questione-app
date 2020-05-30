import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../colors/Colors';

Icon.loadFont();

const ActionSheetOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const ActionSheetList = styled.View`
  background-color: ${colors.white};
  padding: 8px 0px;
`;

const ActionSheetItemWrapper = styled.View`
  flex-direction: row;
  padding: 16px;
`;

const ActionSheetItemTitle = styled.Text`
  text-align: left;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: ${(props) => props.color ?? colors.textColor};
`;

const ActionSheetItemIconView = styled.View`
  margin-right: 16px;
`;

export const ActionSheetItem = ({ title, onPress, type, icon }) => {
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
    <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
      <ActionSheetItemWrapper>
        {icon && <ActionSheetItemIconView>{icon}</ActionSheetItemIconView>}
        <ActionSheetItemTitle color={_actionTypes[_type].color}>
          {title}
        </ActionSheetItemTitle>
      </ActionSheetItemWrapper>
    </TouchableHighlight>
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
    <TouchableWithoutFeedback onPress={onPressCancel}>
      <AnimatedActionSheetOverlay style={[animatedStyles.overlay]}>
        <AnimatedActionSheetList style={[animatedStyles.list]}>
          <SafeAreaView>
            {children}
            <ActionSheetItem
              title="Cancelar"
              onPress={onPressCancel}
              icon={<Icon name="close" size={20} color={colors.textColor} />}
            />
          </SafeAreaView>
        </AnimatedActionSheetList>
      </AnimatedActionSheetOverlay>
    </TouchableWithoutFeedback>
  );
};
