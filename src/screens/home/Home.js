import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Heading1,
  Heading3,
  HomeCardMenu,
  HomeCard,
  MoreButton,
  ActionSheet,
  ActionSheetItem,
  colors,
} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderView,
  ContentView,
  MoreButtonView,
  GreetingView,
} from './styles';
import { routesNames } from '../../routes/routesNames';
import { useAuthContext } from '../../contexts/auth';

Icon.loadFont();

export default function Home({ navigation }) {
  const [isShowingActionSheet, setIsShowingActionSheet] = useState(false);
  const { user, signOut } = useAuthContext();

  const formattedUserName = (name) => {
    const [firstName, secondName] = name.split(' ');
    return `${firstName} ${secondName}`;
  };

  const onPressDoTest = () => {
    navigation.push(routesNames.evaluation);
  };

  const onPressAnsweredTests = () => {
    navigation.push(routesNames.answeredTests);
  };

  const onPressMoreButton = () => {
    setIsShowingActionSheet(true);
  };

  const onPressActionSheetCancellButton = () => {
    setIsShowingActionSheet(false);
  };

  const onPressSignOutButton = () => {
    signOut();
  };

  return (
    <ContentView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColor}
      />
      <HeaderView>
        <MoreButtonView>
          <MoreButton onPress={onPressMoreButton} color={colors.white} />
        </MoreButtonView>

        <GreetingView>
          <Heading3 color={colors.white}>Olá,</Heading3>
          <Heading1 color={colors.white}>
            {user.name ? formattedUserName(user.name) : ''}
          </Heading1>
        </GreetingView>
      </HeaderView>
      <HomeCardMenu>
        <HomeCard
          title="AVALIAÇÕES RESPONDIDAS"
          icon={<Icon name="assessment" color={colors.white} size={20} />}
          color={colors.green}
          onPress={onPressAnsweredTests}
        />
        <HomeCard
          title="REALIZAR AVALIAÇÃO"
          icon={<Icon name="input" color={colors.white} size={20} />}
          color={colors.blue}
          onPress={onPressDoTest}
        />
      </HomeCardMenu>

      <ActionSheet
        isOpen={isShowingActionSheet}
        onPressCancel={onPressActionSheetCancellButton}>
        <ActionSheetItem
          title="Fazer logout"
          type="destructive"
          onPress={onPressSignOutButton}
          icon={<Icon name="exit-to-app" size={20} color={colors.red} />}
        />
      </ActionSheet>
    </ContentView>
  );
}
