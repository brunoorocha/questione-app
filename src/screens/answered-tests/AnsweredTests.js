import React, { useEffect } from 'react';
import {
  BaseView,
  SafeAreaView,
  TestFlatList,
  SearchField,
} from '../../components';
import { SearchView } from './styles';
import { routesNames } from '../../routes/routesNames';

export default function AnsweredTests({
  navigation,
  evaluations = [],
  getEvaluations = () => {},
}) {
  // const answeredTests = [
  //   {
  //     id: 1,
  //     description:
  //       'Avaliação N1 (Modelos de Processo) Engenharia de Software 2019.2 Convencional',
  //     date: '20/02/2020',
  //     isFinished: false,
  //   },
  //   {
  //     id: 2,
  //     description: 'Avaliação Semestral BSI 1º Semestre 2019.2 Regular',
  //     date: '01/12/2019',
  //     isFinished: true,
  //   },
  // ];

  useEffect(() => {
    getEvaluations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectTest = (test) => {
    navigation.push(routesNames.testDetails);
  };

  return (
    <BaseView title="Avaliações respondidas" navigation={navigation}>
      <SafeAreaView>
        <SearchView>
          <SearchField placeholder="Pesquisar avaliação" />
        </SearchView>

        <TestFlatList tests={evaluations} onSelect={onSelectTest} />
      </SafeAreaView>
    </BaseView>
  );
}
