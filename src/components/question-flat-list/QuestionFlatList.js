import React from 'react';
import { FlatList } from 'react-native';
import { QuestionListItem } from './QuestionListItem';

export const QuestionFlatList = ({ questions, onSelect, isSelectable }) => {
  const _isSelectable = isSelectable === undefined ? true : false;

  const _onSelect = (question) => {
    if (onSelect) {
      onSelect(question);
    }
  };

  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => (
        <QuestionListItem
          title={item.title}
          state={item.state}
          isSelectable={_isSelectable}
          onPress={() => {
            _onSelect(item);
          }}
        />
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};
