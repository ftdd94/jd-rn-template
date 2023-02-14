import React from 'react';
import {useColorScheme} from 'react-native';
import {JDProvider, JDHttpClient} from '@jiudao/react-native-common';
import {QueryClient} from 'react-query';
import {EapContainer} from '@jiudao/react-native-eap';

import {AppDefaultTheme} from './src/AppDefaultTheme';
import {AppDarkTheme} from './src/AppDarkTheme';
import {AppDefaultPreference} from './src/AppDefaultPreference';
import {AppScreens} from './src/AppScreens';

const queryClient = new QueryClient();
const jdHttpClient = new JDHttpClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? AppDarkTheme : AppDefaultTheme;

  return (
    <JDProvider
      value={{
        queryClient: queryClient,
        theme: theme,
        httpClient: jdHttpClient,
      }}>
      <EapContainer
        navScreens={AppScreens}
        navGlobalScreenOptions={{headerBackTitleVisible: false}}
        defaultPreferences={AppDefaultPreference}
      />
    </JDProvider>
  );
};

export default App;
