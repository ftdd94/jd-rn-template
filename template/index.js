/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {JDPushHeadlessJsTask} from '@jiudao/react-native-push-client';

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask(
  'JDPushHeadlessJsTask',
  () => JDPushHeadlessJsTask,
);
