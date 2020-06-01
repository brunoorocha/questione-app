import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ActivityIndicatorView = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background-color: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
`;
