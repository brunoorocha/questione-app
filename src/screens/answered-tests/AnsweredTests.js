import React from 'react';
import { BaseView, SafeAreaView, TestFlatList } from '../../components';

export default function AnsweredTests({ navigation }) {
  const answeredTests = [
    {
      id: 1,
      description:
        'Avaliação N1 (Modelos de Processo) Engenharia de Software 2019.2 Convencional',
      date: '20/02/2020',
      isFinished: false,
    },
    {
      id: 2,
      description: 'Avaliação Semestral BSI 1º Semestre 2019.2 Regular',
      date: '01/12/2019',
      isFinished: true,
    },
  ];

  return (
    <BaseView title="Avaliações respondidas" navigation={navigation}>
      <SafeAreaView>
        <TestFlatList tests={answeredTests} />
      </SafeAreaView>
    </BaseView>
  );
}
