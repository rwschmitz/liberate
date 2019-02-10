import React from 'react';
import { Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={ { alignItems: 'center', backgroundColor: '#ccc', flex: 1, justifyContent: 'center' } }>
        <Text>Liberate</Text>
      </View>
    );
  }
}

export default App;
