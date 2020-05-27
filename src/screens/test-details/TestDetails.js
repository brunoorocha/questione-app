import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  BaseView,
  SafeAreaView,
  Heading2,
  Heading4,
  Paragraph,
  Chip,
  VerticalSpacer,
  SecondaryButton,
  NumberCard,
  Content,
  colors,
  HorizontalSpacer,
} from '../../components';
import { HeaderView, FooterView, ResultsView } from './styles';
import { routesNames } from '../../routes';

Icon.loadFont();

export default function TestDetails({ navigation }) {
  const onPressSeeAnswersButton = () => {
    navigation.push(routesNames.answers);
  };

  return (
    <BaseView title="Detalhes da Avaliação" navigation={navigation}>
      <SafeAreaView>
        <Content>
          <HeaderView>
            <Chip
              title="Finalizada"
              color={colors.green}
              titleColor={colors.white}
            />
            <VerticalSpacer />
            <Heading2>
              Avaliação Semestral BSI 1º Semestre 2019.2 Regular
            </Heading2>
          </HeaderView>

          <Heading4>Data de aplicação</Heading4>
          <Paragraph>01/12/2019</Paragraph>
          <VerticalSpacer />

          <Heading4>Resultado individual</Heading4>
          <ResultsView>
            <NumberCard number={7} label="Questões certas" />
            <HorizontalSpacer />
            <NumberCard number={3} label="Questões erradas" />
          </ResultsView>

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
