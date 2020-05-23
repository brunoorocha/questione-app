import React from 'react';
import styled from 'styled-components/native';
import { Heading4, colors } from '../';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const CustomNavigationBar = styled.View`
  flex-direction: row;
  background-color: ${colors.white};
  height: 48px;
  border: 1px solid transparent;
  border-bottom-color: ${colors.lightGray};
`;

const CenterItem = styled.View`
  flex: 1;
  height: 48px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonItem = styled.View`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const QuestionNavigationBar = (props) => {
  return (
    <CustomNavigationBar>
      <ButtonItem />

      <CenterItem>
        <Heading4>{props.title}</Heading4>
        <Icon name="keyboard-arrow-down" size={16} color={colors.textColor} />
      </CenterItem>

      <ButtonItem>
        <Icon name="more-vert" size={20} color={colors.textColor} />
      </ButtonItem>
    </CustomNavigationBar>
  );
};
