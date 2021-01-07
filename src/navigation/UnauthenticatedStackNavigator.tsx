import { Icon } from 'components';
import { i18n } from 'locale';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ResetPasswordScreen, SignInScreen, SignUpScreen } from 'screens';
import { headerStyle, palette } from 'styles';

import { Route } from './routes';

export const UnauthenticatedStackNavigator = createStackNavigator(
  {
    [Route.SignIn]: {
      screen: SignInScreen,
      navigationOptions: {
        title: i18n.t('signIn:signIn'),
      },
    },
    [Route.SignUp]: {
      screen: SignUpScreen,
      navigationOptions: {
        title: i18n.t('signUp:signUp'),
      },
    },
    [Route.ResetPassword]: {
      screen: ResetPasswordScreen,
      navigationOptions: {
        title: i18n.t('resetPassword:resetPassword'),
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: palette.primary,
      headerTitleStyle: headerStyle.headerText,
      headerStyle: headerStyle.header,
      headerBackImage: <Icon name="arrow-left" color={palette.textWhite} />,
    },
  },
);
