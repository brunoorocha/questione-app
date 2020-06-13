import React from 'react';
import { Dimensions, Image } from 'react-native';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Content,
  Paragraph,
  Heading4,
  SecondaryButton,
  VerticalSpacer,
  RadioGroup,
  ForwardButton,
  BackwardButton,
  HorizontalSpacer,
  colors,
} from '../../components';
import { QuestionListItem, QuestionContentView, ButtonsView } from './styles';

const htmlRenderProps = {
  ignoredTags: [''],
  ignoredStyles: [
    'margin',
    'padding',
    'font-size',
    'font-family',
    'text-align',
    'display',
  ],
  renderers: {
    img: (htmlAttrs, children, cssStyles, passProps) => {
      const aspectRatio = htmlAttrs.height / htmlAttrs.width;
      const newWidth = Dimensions.get('window').width - 32;
      const newHeight = newWidth * aspectRatio;
      const imageStyle = { flex: 1, width: newWidth, height: newHeight };

      return (
        <Image
          key={passProps.key}
          source={{ uri: htmlAttrs.src }}
          style={imageStyle}
        />
      );
    },
    p: (htmlAttrs, children, cssStyles, passProps) => {
      return <Paragraph key={passProps.key}>{children}</Paragraph>;
    },
  },
};

export const QuestionView = ({ question, onPressAboutQuestionButton }) => {
  return (
    <QuestionListItem>
      <Content>
        <VerticalSpacer />
        <SecondaryButton
          onPress={onPressAboutQuestionButton}
          icon={<Icon name="info" size={20} color={colors.textColor} />}>
          Sobre a questão
        </SecondaryButton>

        <QuestionContentView>
          <Heading4>Texto base</Heading4>
          <HTML html={question.baseText} {...htmlRenderProps} />

          <RadioGroup options={[]} />
        </QuestionContentView>

        <ButtonsView>
          <BackwardButton>Anterior</BackwardButton>
          <HorizontalSpacer />
          <ForwardButton>Próxima</ForwardButton>
        </ButtonsView>
      </Content>
    </QuestionListItem>
  );
};
