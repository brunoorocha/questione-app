import React from 'react';
import { FlatList } from 'react-native';
import { QuestionView } from './QuestionView';

export const QuestionFlatList = ({ questions }) => {
  return (
    <FlatList
      horizontal={true}
      pagingEnabled={true}
      data={questions}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <QuestionView question={item} />}
    />
  );
};
