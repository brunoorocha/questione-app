import React from 'react';
import { FlatList } from 'react-native';
import { QuestionListItem } from './QuestionListItem';

export const QuestionFlatList = ({
  questions,
  isSelectable = true,
  onSelect = () => {},
}) => {
  return (
    <FlatList
      data={questions}
      renderItem={({ item, index }) => (
        <QuestionListItem
          title={item.title}
          state={item.state}
          isSelectable={isSelectable}
          onPress={() => {
            onSelect(index);
          }}
        />
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};
