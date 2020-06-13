import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const QuestionContentView = styled.View`
  padding: 40px 0px;
`;

export const ButtonsView = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
`;

export const View = styled.View`
  flex: 1;
`;

export const QuestionListItem = styled.View`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
`;
