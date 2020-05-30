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

Icon.loadFont();

export default function Question({ navigation }) {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);

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
            <Paragraph>
              O planejamento dos testes deve ocorrer em diferentes níveis e em
              paralelo com o desenvolvimento do software. Com relação a esse
              assunto, analise a imagem (a seguir) que mostra um modelo V
              descrevendo o paralelismo entre as atividades de desenvolvimento e
              teste de software.
            </Paragraph>

            <VerticalSpacer size={16} />

            <Heading4>Enunciado</Heading4>
            <Paragraph>
              As lacunas I e II são preenchidas, correta e respectivamente, por:
            </Paragraph>

            <VerticalSpacer size={16} />

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
