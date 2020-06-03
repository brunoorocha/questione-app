import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from '../content/Content';
import { NavigationBar } from '../navigation-bar/NavigationBar';
import { colors } from '../colors/Colors';

export const BaseView = ({
  title,
  children,
  navigation,
  navigationRightItem,
  navigationShowBackButton,
  navigationHideBorderBottom,
}) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <NavigationBar
        showBackButton={navigationShowBackButton}
        rightItem={navigationRightItem}
        title={title}
        navigation={navigation}
        hideBorderBottom={navigationHideBorderBottom}
      />
      {children}
    </SafeAreaView>
  );
};
