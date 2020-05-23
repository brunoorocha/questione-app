import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../';

Icon.loadFont();

const BackButtonView = styled.TouchableWithoutFeedback`
  margin-left: ${Platform.OS === 'ios' ? '16px' : '0px'};
`;

export const BackButton = (props) => {
  return (
    <BackButtonView onPress={props.onPress}>
      <Icon name="arrow-back" color={colors.primaryColor} size={24} />
    </BackButtonView>
  );
};
