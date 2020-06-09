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

export default function TestDetails({ navigation, evaluation }) {
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

          <Heading4>Aplicada por</Heading4>
          <Paragraph>{evaluation?.teacherName}</Paragraph>
          <VerticalSpacer />

          <Heading4>Descrição da aplicação</Heading4>
          <Paragraph>{evaluation?.applicationDescription}</Paragraph>
          <VerticalSpacer />

          <Heading4>Data de aplicação</Heading4>
          <Paragraph>{evaluation?.applicationDate}</Paragraph>
          <VerticalSpacer />

          <Heading4>Resultado individual</Heading4>
          {evaluation.resultsAvailable ? (
            <ResultsView>
              <NumberCard number={7} label="Questões certas" />
              <HorizontalSpacer />
              <NumberCard number={3} label="Questões erradas" />
            </ResultsView>
          ) : (
            <Paragraph>Os resultados ainda não foram liberados</Paragraph>
          )}

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
              Visualizar gabarito
            </SecondaryButton>
          </FooterView>
        </Content>
      </SafeAreaView>
    </BaseView>
  );
}
