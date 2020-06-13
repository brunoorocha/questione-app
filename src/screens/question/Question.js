import React, { useState } from 'react';
import {
  Content,
  Paragraph,
  Heading4,
  BaseView,
  MoreButton,
  QuestionListButton,
  SecondaryButton,
  VerticalSpacer,
  RadioGroup,
  ForwardButton,
  BackwardButton,
  HorizontalSpacer,
  ActionSheet,
  ActionSheetItem,
  colors,
} from '../../components';
import { QuestionView, ButtonsView, View } from './styles';
import { routesNames } from '../../routes/routesNames';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HTML from 'react-native-render-html';
import { Dimensions, Image } from 'react-native';

Icon.loadFont();

export default function Question({ navigation, questions }) {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);

  const baseText =
    questions[0]?.evaluation_question_without_correct?.question_without_correct
      ?.base_text;

  const questionOptions = [
    'Teste de Aceitação e Teste de Unidade.',
    'Teste de Unidade e Teste de Aceitação.',
    'Teste de Usabilidade, Teste de Confiabilidade e Testes Unitários.',
  ];

  const onPressAboutQuestionButton = () => {
    navigation.push(routesNames.questionDetails);
  };

  const onPressQuestionListButton = () => {
    navigation.push(routesNames.questionList);
  };

  const onPressMoreButton = () => {
    setIsActionSheetOpen(true);
  };

  const onPressActionSheetCancelButton = () => {
    setIsActionSheetOpen(false);
  };

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

  return (
    <View>
      <BaseView
        title={
          <QuestionListButton
            title="Questão 1 de 10"
            onPress={onPressQuestionListButton}
          />
        }
        navigationShowBackButton={false}
        navigationRightItem={<MoreButton onPress={onPressMoreButton} />}>
        <Content>
          <VerticalSpacer />
          <SecondaryButton
            onPress={onPressAboutQuestionButton}
            icon={<Icon name="info" size={20} color={colors.textColor} />}>
            Sobre a questão
          </SecondaryButton>

          <QuestionView>
            <Heading4>Texto base</Heading4>
            <HTML html={baseText} {...htmlRenderProps} />

            <RadioGroup options={questionOptions} />
          </QuestionView>

          <ButtonsView>
            <BackwardButton>Anterior</BackwardButton>
            <HorizontalSpacer />
            <ForwardButton>Próxima</ForwardButton>
          </ButtonsView>
        </Content>
      </BaseView>

      <ActionSheet
        isOpen={isActionSheetOpen}
        onPressCancel={onPressActionSheetCancelButton}>
        <ActionSheetItem
          title="Sair da prova"
          type="destructive"
          onPress={() => {}}
          icon={<Icon name="exit-to-app" size={20} color={colors.red} />}
        />
        <ActionSheetItem
          title="Reportar erro"
          onPress={() => {}}
          icon={<Icon name="warning" size={20} color={colors.textColor} />}
        />
      </ActionSheet>
    </View>
  );
}
