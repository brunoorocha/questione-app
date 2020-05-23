import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const Link = styled.Text`
  font-family: 'Roboto-Bold';
  color: ${colors.primaryColor};
  font-size: 16px;
  padding: 8px 0px;
  text-align: ${(props) => props.textAlign ?? 'left'};
`;

const PrimaryButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  font-size: 16px;
`;

const SecondaryButtonContainer = styled.TouchableOpacity`
  background-color: transparent;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
`;

const SecondaryButtonText = styled.Text`
  color: ${colors.textColor};
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  font-size: 16px;
`;

const ForwardButtonIcon = styled.View`
  position: absolute;
  right: 16px;
`;

export const LinkButton = (props) => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
    <Link textAlign={props.textAlign}>{props.children}</Link>
  </TouchableOpacity>
);

export const PrimaryButton = (props) => (
  <PrimaryButtonContainer onPress={props.onPress} activeOpacity={0.7}>
    <ButtonText>{props.children}</ButtonText>
  </PrimaryButtonContainer>
);

export const SecondaryButton = (props) => (
  <SecondaryButtonContainer activeOpacity={0.7}>
    <SecondaryButtonText>{props.children}</SecondaryButtonText>
  </SecondaryButtonContainer>
);

export const ForwardButton = (props) => (
  <PrimaryButtonContainer onPress={props.onPress} activeOpacity={0.7}>
    <ButtonText>{props.children}</ButtonText>
    <ForwardButtonIcon>
      <Icon name="arrow-forward" color={colors.white} size={24} />
    </ForwardButtonIcon>
  </PrimaryButtonContainer>
);
