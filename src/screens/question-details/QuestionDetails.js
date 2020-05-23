import React from 'react';
import {
  Content,
  Paragraph,
  Heading2,
  Heading4,
  SafeAreaView,
  NavigationBar,
  CloseButton,
  VerticalSpacer,
  Uppercased,
} from '../../components';
import { QuestionDetailsView } from './styles';

export default function QuestionDetails({ navigation }) {
  const onPressCloseButton = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <NavigationBar
        showBackButton={false}
        rightItem={<CloseButton onPress={onPressCloseButton} />}
        title={<Uppercased>Sobre a Questão</Uppercased>}
      />
      <Content>
        <QuestionDetailsView>
          <Heading2>Questão - 000722</Heading2>

          <Heading4>Área de origem:</Heading4>
          <Paragraph>Bacharelado em Sistemas de Informação</Paragraph>
          <VerticalSpacer size={16} />

          <Heading4>Competência:</Heading4>
          <Paragraph>
            Avaliar a qualidade de processos e produtos de software para
            Sistemas de Informação.
          </Paragraph>
          <VerticalSpacer size={16} />
        </QuestionDetailsView>
      </Content>
    </SafeAreaView>
  );
}
