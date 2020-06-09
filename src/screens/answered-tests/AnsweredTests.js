import React, { useEffect } from 'react';
import {
  BaseView,
  SafeAreaView,
  TestFlatList,
  ActivityIndicator,
  Paragraph,
  SearchField,
} from '../../components';
import { SearchView, EmptyListView } from './styles';
import { routesNames } from '../../routes/routesNames';

export default function AnsweredTests({
  navigation,
  evaluations = [],
  getEvaluations = () => {},
  setSelectedEvaluation = () => {},
  isLoadingEvaluations,
}) {
  const isEmpty = evaluations.length === 0;

  useEffect(() => {
    getEvaluations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectTest = (test) => {
    setSelectedEvaluation({ evaluation: { ...test } });
    navigation.push(routesNames.testDetails);
  };

  return (
    <BaseView title="Avaliações respondidas" navigation={navigation}>
      {isLoadingEvaluations ? (
        <ActivityIndicator alignCenter isVisible={isLoadingEvaluations} />
      ) : isEmpty ? (
        <EmptyListView>
          <Paragraph>Não há nenhuma avaliação.</Paragraph>
        </EmptyListView>
      ) : (
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
      )}
    </BaseView>
  );
}
