import React from 'react';
import styled from 'styled-components/native';
import { Heading4 } from '../typography/Typography';
import { colors } from '../colors/Colors';

export const HomeCardMenu = styled.View`
  padding: 0px 8px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: -32px;
`;

const HomeCardWrapper = styled.View`
  padding: 0 8px;
  width: 50%;
`;

const TouchableCard = styled.TouchableHighlight`
  border-radius: 8px;
`;

const Card = styled.View`
  border-radius: 8px;
  background-color: ${colors.white};
  height: 108px;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.08);
`;

const CardIconWrapper = styled.View`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  border-radius: 16px;
  background-color: ${(props) => props.color ?? colors.blue};
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.View`
  width: 80%;
`;

export const HomeCard = (props) => (
  <HomeCardWrapper>
    <TouchableCard onPress={props.onPress} underlayColor={colors.mediumGray}>
      <Card>
        <CardIconWrapper color={props.color}>{props.icon}</CardIconWrapper>
        <TitleWrapper>
          <Heading4>{props.title ?? ''}</Heading4>
        </TitleWrapper>
      </Card>
    </TouchableCard>
  </HomeCardWrapper>
);
