import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '../colors/Colors';

export const ActivityIndicatorFullScreenView = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background-color: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicatorView = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding: 40px 0px;
  justify-content: ${(props) => (props.alignCenter ? 'center' : 'flex-start')};
  align-items: center;
`;

export const RowSkelectonView = styled.View`
  width: 100%;
  height: 16px;
  margin-bottom: 4px;
`;

export const NumberSkelectonView = styled.View`
  width: 40px
  height: 32px;
`;
