import { registerRootComponent } from 'expo';

import routes from './src/routes';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(routes);
//registerRootComponent(home);
