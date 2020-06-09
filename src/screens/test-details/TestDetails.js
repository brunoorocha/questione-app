import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  BaseView,
  SafeAreaView,
  Heading2,
  Heading4,
  Paragraph,
  IsFinishedChips,
  VerticalSpacer,
  SecondaryButton,
  NumberCard,
  Content,
  colors,
  HorizontalSpacer,
} from '../../components';
import { HeaderView, FooterView, ResultsView } from './styles';
import { routesNames } from '../../routes/routesNames';

Icon.loadFont();

export default function TestDetails({
  navigation,
  evaluation,
  isLoadingEvaluationResult,
}) {
  const onPressSeeAnswersButton = () => {
    navigation.push(routesNames.answers);
  };

  return (
    <BaseView title="Detalhes da Avaliação" navigation={navigation}>
      <SafeAreaView>
        <Content>
          <HeaderView>
            <IsFinishedChips isFinished={evaluation.isFinished} />
            <VerticalSpacer />

            <Heading2>{evaluation?.description}</Heading2>
          </HeaderView>

          <Heading4>Descrição da aplicação</Heading4>
          <Paragraph>{evaluation?.applicationDescription}</Paragraph>
          <VerticalSpacer />

          <Heading4>Aplicada por</Heading4>
          <Paragraph>{evaluation?.teacherName}</Paragraph>
          <VerticalSpacer />

          <Heading4>Data de aplicação</Heading4>
          <Paragraph>{evaluation?.applicationDate}</Paragraph>
          <VerticalSpacer />

          <Heading4>Resultado individual</Heading4>
          {evaluation.resultsAvailable ? (
            <ResultsView>
              <NumberCard
                number={evaluation.result?.correctAnswers ?? 0}
                label="Questões certas"
                isLoading={isLoadingEvaluationResult}
              />
              <HorizontalSpacer />
              <NumberCard
                number={evaluation.result?.wrongAnswers ?? 0}
                label="Questões erradas"
                isLoading={isLoadingEvaluationResult}
              />
            </ResultsView>
          ) : (
            <Paragraph>Os resultados ainda não foram liberados</Paragraph>
          )}

          {evaluation.resultsAvailable && (
            <FooterView>
              <SecondaryButton
                onPress={onPressSeeAnswersButton}
                icon={
                  <Icon
                    name="format-list-bulleted"
                    size={20}
                    color={colors.textColor}
                  />
                }>
                Visualizar respostas
              </SecondaryButton>
            </FooterView>
          )}
        </Content>
      </SafeAreaView>
    </BaseView>
  );
}
