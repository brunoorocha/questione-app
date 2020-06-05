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
import { useAuthContext } from '../../contexts/auth/auth';

Icon.loadFont();

export default function Home({ navigation }) {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  const { state, signOut } = useAuthContext();

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
    setIsActionSheetOpen(true);
  };

  const onPressActionSheetCancelButton = () => {
    setIsActionSheetOpen(false);
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
            {state.user.name ? formattedUserName(state.user.name) : ''}
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
        isOpen={isActionSheetOpen}
        onPressCancel={onPressActionSheetCancelButton}>
        <ActionSheetItem
          title="Sair da prova"
          type="destructive"
          onPress={onPressSignOutButton}
          icon={<Icon name="exit-to-app" size={20} color={colors.red} />}
        />
      </ActionSheet>
    </ContentView>
  );
}
