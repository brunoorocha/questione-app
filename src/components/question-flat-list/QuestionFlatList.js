import React from 'react';
import { FlatList } from 'react-native';
import { QuestionListItem } from './QuestionListItem';

export const QuestionFlatList = ({ questions }) => {
  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => (
        <QuestionListItem title={item.title} state={item.state} />
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};
