/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 5}}>
            Pressable Component
          </Text>
          <Pressable
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            style={({pressed}) => {
              return {
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                backgroundColor: pressed ? 'red' : 'pink',
              };
            }}>
            {({pressed}) => (
              <Text style={styles.text}>
                {pressed ? 'Pressed!' : 'Press Me'}
              </Text>
            )}
          </Pressable>
        </View>

        <View style={{margin: 20}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 5}}>
            LogBox
          </Text>
          <Pressable
            onPress={() => {
              throw new Error('Check logbox');
            }}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}
            onLongPress={() => console.log('onLongPress')}
            style={({pressed}) => {
              return {
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                backgroundColor: pressed ? 'red' : 'pink',
              };
            }}>
            <Text style={styles.text}>Check LogBox error</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
