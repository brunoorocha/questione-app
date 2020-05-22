import React from 'react';
import { View, StatusBar } from 'react-native';
import {
  Heading1,
  Heading3,
  HomeCardMenu,
  HomeCard,
  colors,
} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderView } from './styles';

Icon.loadFont();

export default function Home() {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <HeaderView>
        <Heading3 color={colors.white}>Olá,</Heading3>
        <Heading1 color={colors.white}>Bruno Rocha</Heading1>
      </HeaderView>
      <HomeCardMenu>
        <HomeCard
          title="AVALIAÇÕES RESPONDIDAS"
          icon={<Icon name="assessment" color={colors.white} size={20} />}
          color={colors.green}
        />
        <HomeCard
          title="REALIZAR AVALIAÇÃO"
          icon={<Icon name="input" color={colors.white} size={20} />}
          color={colors.blue}
        />
      </HomeCardMenu>
    </View>
  );
}
