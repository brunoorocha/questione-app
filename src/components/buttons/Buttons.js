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

const PrimaryButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.primaryColor};
  height: 48px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.color ?? colors.textColor};
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  font-size: 16px;
  flex: 1;
  text-align: center;
  margin-left: ${(props) =>
    props.marginLeft ? `${props.marginLeft}px` : '0px'};
  margin-right: ${(props) =>
    props.marginRight ? `${props.marginRight}px` : '0px'};
`;

const SecondaryButtonWrapper = styled.TouchableOpacity`
  background-color: transparent;
  height: 48px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
`;

const SecondaryButtonText = styled.Text`
  color: ${colors.textColor};
  font-family: 'Roboto-Bold';
  text-transform: uppercase;
  font-size: 12px;
`;

const ForwardButtonIcon = styled.View`
  margin-right: 16px;
`;

const BackwardButtonIcon = styled.View`
  margin-left: 16px;
`;

const IconWrapper = styled.View`
  margin-right: 16px;
`;

export const LinkButton = (props) => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
    <Link textAlign={props.textAlign}>{props.children}</Link>
  </TouchableOpacity>
);

export const PrimaryButton = (props) => (
  <PrimaryButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
    <ButtonText color={colors.white}>{props.children}</ButtonText>
  </PrimaryButtonWrapper>
);

export const SecondaryButton = (props) => (
  <SecondaryButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
    {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
    <SecondaryButtonText>{props.children}</SecondaryButtonText>
  </SecondaryButtonWrapper>
);

export const ForwardButton = (props) => (
  <PrimaryButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
    <ButtonText color={colors.white} marginLeft={16}>
      {props.children}
    </ButtonText>

    <ForwardButtonIcon>
      <Icon name="arrow-forward" color={colors.white} size={20} />
    </ForwardButtonIcon>
  </PrimaryButtonWrapper>
);

export const BackwardButton = (props) => (
  <SecondaryButtonWrapper onPress={props.onPress} activeOpacity={0.7}>
    <BackwardButtonIcon>
      <Icon name="arrow-back" color={colors.textColor} size={20} />
    </BackwardButtonIcon>

    <ButtonText marginRight={16}>{props.children}</ButtonText>
  </SecondaryButtonWrapper>
);
