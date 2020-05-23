import React from 'react';
import {
  Content,
  Paragraph,
  Heading4,
  SafeAreaView,
  NavigationBar,
  MoreButton,
  QuestionListButton,
  SecondaryButton,
  VerticalSpacer,
} from '../../components';
import { QuestionView } from './styles';
import { routesNames } from '../../routes';

export default function Question({ navigation }) {
  const onPressAboutQuestionButton = () => {
    navigation.push(routesNames.questionDetails);
  };

  const onPressQuestionListButton = () => {
    navigation.push(routesNames.questionList);
  };

  return (
    <SafeAreaView>
      <NavigationBar
        showBackButton={false}
        rightItem={<MoreButton />}
        title={
          <QuestionListButton
            title="Questão 1 de 10"
            onPress={onPressQuestionListButton}
          />
        }
      />
      <Content>
        <VerticalSpacer />
        <SecondaryButton onPress={onPressAboutQuestionButton}>
          Sobre a questão
        </SecondaryButton>

        <QuestionView>
          <Heading4>Texto base</Heading4>
          <VerticalSpacer size={8} />
          <Paragraph>
            O planejamento dos testes deve ocorrer em diferentes níveis e em
            paralelo com o desenvolvimento do software. Com relação a esse
            assunto, analise a imagem (a seguir) que mostra um modelo V
            descrevendo o paralelismo entre as atividades de desenvolvimento e
            teste de software.
          </Paragraph>
        </QuestionView>
      </Content>
    </SafeAreaView>
  );
}
