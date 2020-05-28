import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import {
  Heading1,
  Heading3,
  HomeCardMenu,
  HomeCard,
  SecondaryButton,
  colors,
} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderView, ContentView, FooterView } from './styles';
import { routesNames } from '../../routes/routes-names';
import AuthContext from '../../contexts/auth';

Icon.loadFont();

export default function Home({ navigation }) {
  const { user, signOut } = useContext(AuthContext);

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
        <Heading3 color={colors.white}>Olá,</Heading3>
        <Heading1 color={colors.white}>
          {user.name ? formattedUserName(user.name) : ''}
        </Heading1>
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

      <FooterView>
        <SecondaryButton onPress={onPressSignOutButton}>
          Sair da aplicação
        </SecondaryButton>
      </FooterView>
    </ContentView>
  );
}
