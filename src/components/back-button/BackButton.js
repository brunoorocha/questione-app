import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../colors/Colors';

Icon.loadFont();

const BackButtonView = styled.View`
  margin-left: ${Platform.OS === 'ios' ? '12px' : '0px'};
`;

export const BackButton = (props) => {
  return (
    <BackButtonView>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <Icon name="arrow-back" color={colors.primaryColor} size={24} />
      </TouchableOpacity>
    </BackButtonView>
  );
};
