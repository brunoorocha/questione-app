import React, { useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { QuestionView } from './QuestionView';
import { useEvaluationContext } from '../../contexts/evaluation';

export const QuestionFlatList = ({ questions }) => {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const maxScrollX = (questions.length - 1) * windowWidth;
  const { setCurrentQuestionIndex } = useEvaluationContext();

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    if (offsetX < 0 || offsetX > maxScrollX) {
      return;
    }

    const index = Math.floor(offsetX / windowWidth);
    if (index !== currentScrollIndex) {
      setCurrentScrollIndex(index);
      setCurrentQuestionIndex({ questionIndex: index });
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
