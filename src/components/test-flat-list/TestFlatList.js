import React from 'react';
import { FlatList } from 'react-native';
import { TestCard } from './TestCard';
import { ActivityIndicator } from '../activity-indicator/ActivityIndicator';

export const TestFlatList = ({ tests, onSelect, isLoading }) => {
  const isEmpty = tests?.lenght === 0;

  const _onSelect = (test) => {
    if (onSelect) {
      onSelect(test);
    }
  };

  const listStyle = {
    paddingLeft: 16,
    paddingRight: 16,
  };

  return isLoading ? (
    <ActivityIndicator isVisible={isLoading} />
  ) : (
    <FlatList
      data={tests}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <TestCard
          description={item.description}
          date={item.applicationDate}
          isFinished={item.isFinished}
          onPress={() => {
            _onSelect(item);
          }}
        />
      )}
      style={listStyle}
    />
  );
};
