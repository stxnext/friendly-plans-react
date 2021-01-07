import { createSwitchNavigator } from 'react-navigation';
import { WelcomeScreen } from 'screens';

import { MainDrawerNavigator } from './MainDrawerNavigator';
import { UnauthenticatedStackNavigator } from './UnauthenticatedStackNavigator';
import { Route } from './routes';

export const AuthSwitchNavigator = createSwitchNavigator({
  [Route.Welcome]: WelcomeScreen,
  [Route.Unauthenticated]: UnauthenticatedStackNavigator,
  [Route.Authenticated]: MainDrawerNavigator,
});
