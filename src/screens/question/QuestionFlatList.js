import React, { useState, createRef } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { QuestionView } from './QuestionView';
import { useEvaluationContext } from '../../contexts/evaluation';

export const QuestionFlatList = ({ questions }) => {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const maxScrollX = (questions.length - 1) * windowWidth;
  const { setCurrentQuestionIndex, state } = useEvaluationContext();
  const flatListRef = createRef();

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

  const onPressBackwardButton = () => {
    flatListRef?.current?.scrollToIndex({ index: currentScrollIndex - 1 });
  };

  const onPressForwardButton = () => {
    flatListRef?.current?.scrollToIndex({ index: currentScrollIndex + 1 });
  };

  const onPressFinishButton = () => {};

  return (
    <FlatList
      data={questions}
      ref={flatListRef}
      horizontal={true}
      pagingEnabled={true}
      onScroll={onScroll}
      scrollEventThrottle={160}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item, index }) => (
        <QuestionView
          question={item}
          questionIndex={index}
          numberOfQuestions={state.numberOfQuestions}
          onPressBackwardButton={onPressBackwardButton}
          onPressForwardButton={onPressForwardButton}
          onPressFinishButton={onPressFinishButton}
        />
      )}
    />
  );
};
