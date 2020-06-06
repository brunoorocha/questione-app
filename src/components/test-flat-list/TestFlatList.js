import React from 'react';
import { FlatList } from 'react-native';
import { TestCard } from './TestCard';

export const TestFlatList = ({ tests, onSelect }) => {
  const _onSelect = (test) => {
    if (onSelect) {
      onSelect(test);
    }
  };

  const listStyle = {
    paddingLeft: 16,
    paddingRight: 16,
  };

  return (
    <FlatList
      data={tests}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <TestCard
          description={item.description}
          date={item.applicationDate}
          isFinished={item.isFinished}
          teacherName={item.teacherName}
          resultsAvailable={item.resultsAvailable}
          onPress={() => {
            _onSelect(item);
          }}
        />
      )}
      style={listStyle}
    />
  );
};
