import React, { useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { QuestionView } from './QuestionView';

export const QuestionFlatList = ({ questions, onChangeCurrentQuestion }) => {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const maxScrollX = (questions.length - 1) * windowWidth;

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    if (offsetX < 0 || offsetX > maxScrollX) {
      return;
    }

    const index = Math.floor(offsetX / windowWidth);
    if (index !== currentScrollIndex) {
      setCurrentScrollIndex(index);
      onChangeCurrentQuestion(index);
    }
  };

  return (
    <FlatList
      data={questions}
      horizontal={true}
      pagingEnabled={true}
      onScroll={onScroll}
      scrollEventThrottle={160}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => <QuestionView question={item} />}
    />
  );
};
