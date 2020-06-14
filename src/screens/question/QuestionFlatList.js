import React, { useState } from 'react';
import { FlatList, ScrollView, Dimensions } from 'react-native';
import { QuestionView } from './QuestionView';

export const QuestionFlatList = ({ questions, onChangeCurrentQuestion }) => {
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const maxScrollX = questions.length * windowWidth;

  const onScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    if (offsetX < 0 || offsetX > maxScrollX) {
      return;
    }

    const index = Math.floor(offsetX / windowWidth);
    setCurrentScrollIndex(index);
  };

  const ScrollViewComponent = (props) => (
    <ScrollView
      {...props}
      onScroll={onScroll}
      scrollEventThrottle={160}
      showsHorizontalScrollIndicator={false}
    />
  );

  return (
    <FlatList
      data={questions}
      horizontal={true}
      pagingEnabled={true}
      keyExtractor={(item) => `${item.id}`}
      renderScrollComponent={ScrollViewComponent}
      renderItem={({ item }) => <QuestionView question={item} />}
    />
  );
};
