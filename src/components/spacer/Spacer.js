import styled from 'styled-components/native';

export const VerticalSpacer = styled.View`
  height: ${(props) => (props.size ? `${props.size}px` : '16px')};
`;

export const HorizontalSpacer = styled.View`
  width: ${(props) => (props.size ? `${props.size}px` : '16px')};
`;
