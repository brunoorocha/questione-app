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
  isLoadingEvaluations,
}) {
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

        <TestFlatList
          tests={evaluations}
          onSelect={onSelectTest}
          isLoading={isLoadingEvaluations}
        />
      </SafeAreaView>
    </BaseView>
  );
}
