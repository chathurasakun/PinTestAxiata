import React, { PureComponent } from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import EnterResetPin from './app/screens/EnterPinScreen';
import ResetPin from './app/screens/ResetPin';

class App extends PureComponent {
  render = () => {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#7573E1' }}>
        <Scene key='root' hideNavBar>
          <Scene key='enterPin' component={EnterResetPin} type='replace' initial />
          <Scene key='resetPin' component={ResetPin} type='replace' />
        </Scene>
      </Router>
    )
  }

}

export default App;