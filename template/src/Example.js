import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {JDToast, useJDHttpClient} from '@jiudao/react-native-common';
import {
  useLogoutMutation,
  useSession,
  useIsOffline,
  usePreferences,
} from '@jiudao/react-native-eap';
import {useQuery} from 'react-query';

const Example = () => {
  const {mutate: logoutMutate} = useLogoutMutation();
  const session = useSession();
  const {preferences} = usePreferences();
  const jdHttpClient = useJDHttpClient();
  const isOffline = useIsOffline();

  useEffect(() => {
    console.log('session', session);
    console.log('isOffline', isOffline);
    console.log('preference', preferences);
  }, [isOffline, preferences, session]);

  useQuery(['message'], async () => {
    return jdHttpClient.execQuery('/eap/messages/messages');
  });

  const _onPressLogout = () => {
    logoutMutate(null, {
      onError: err => {
        JDToast.showError({title: '登出失败', message: err.message});
      },
    });
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <Button mode="contained" onPress={_onPressLogout}>
        登出
      </Button>
    </View>
  );
};

export default Example;
