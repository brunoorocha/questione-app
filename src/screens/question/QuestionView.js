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
import {
  QuestionListItem,
  QuestionContentView,
  QuestionImageContainer,
  ButtonsView,
} from './styles';

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
  baseFontStyle: {
    fontSize: 16,
  },
  renderers: {
    img: (htmlAttrs, children, cssStyles, passProps) => {
      const aspectRatio = htmlAttrs.height / htmlAttrs.width;
      const newWidth = Dimensions.get('window').width - 32;
      const newHeight = newWidth * aspectRatio;
      const imageStyle = { width: newWidth, height: newHeight };
      const imageSourceUri =
        htmlAttrs.src.slice(0, 8) === '/uploads'
          ? `https://questione.ifce.edu.br${htmlAttrs.src}`
          : htmlAttrs.src;

      return (
        <QuestionImageContainer>
          <Image
            key={passProps.key}
            source={{ uri: imageSourceUri }}
            style={imageStyle}
          />
        </QuestionImageContainer>
      );
    },
    p: (htmlAttrs, children, cssStyles, passProps) => {
      // eslint-disable-next-line prettier/prettier
      const shouldAlignTextOnRight = htmlAttrs.style?.includes('text-align: right');

      const paragraphStyle = shouldAlignTextOnRight
        ? {
            textAlign: 'right',
            fontSize: 12,
          }
        : undefined;

      return (
        <Paragraph style={paragraphStyle} key={passProps.key}>
          {children}
        </Paragraph>
      );
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
          <VerticalSpacer />

          <Heading4>Enunciado</Heading4>
          <HTML html={question.stem} {...htmlRenderProps} />

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
