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
  padding: 16px 0px;
  justify-content: ${(props) => (props.alignCenter ? 'center' : 'flex-start')};
  align-items: center;
`;
