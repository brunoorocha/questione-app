import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../colors/Colors';

const Link = styled.Text`
  font-family: 'Roboto-Bold';
  color: ${colors.primaryColor};
  font-size: 16px;
  padding: 8px 0px;
  text-align: ${(props) => props.textAlign ?? 'left'};
`;

export const LinkButton = (props) => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
    <Link textAlign={props.textAlign}>{props.children}</Link>
  </TouchableOpacity>
);

const PrimaryButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  height: 48px;
  display: flex;
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

export const PrimaryButton = (props) => (
  <PrimaryButtonContainer onPress={props.onPress} activeOpacity={0.7}>
    <ButtonText>{props.children}</ButtonText>
  </PrimaryButtonContainer>
);

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

export const SecondaryButton = (props) => (
  <SecondaryButtonContainer activeOpacity={0.7}>
    <SecondaryButtonText>{props.children}</SecondaryButtonText>
  </SecondaryButtonContainer>
);
