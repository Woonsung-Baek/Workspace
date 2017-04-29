import React, {Component} from 'react';

import {
  AppRegistry,
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

class HomePage extends Component {
  static navigationOptions = {
    title : 'Woonsung\'s Blog',
  };
  render () {
    const { navigate } = this.props.navigation;
    return ( 
      <View>
        <Button onPress={ () => navigate('Profile')} title="View my profile"/>
        <Button onPress={ () => navigate('Contact')} title="Contact"/>
      </View>
    )
  }
}

class ProfilePage extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    return (
      <View>
          <Text style={styles.title}>Profile</Text>
              <Text>- 부산과학고등학교 졸업 (2014.3~2016.2)</Text>
              <Text>- 연세대학교 글로벌융합공학부 재학 중 (2016.3~2019.2)</Text>
              <Text>- 연세대학교 MCML Group 인턴 (2016 Summer)-DCGAN in torch</Text>
              <Text>- 연세대학교 Wireless Communication Lab 인턴 (2016 Winter)-MIMO and its application</Text>
          <Text style={styles.title}>Proficiency</Text>
              <Text>- Korean(Native), EngTextsh(Fluent)</Text>
              <Text>- C, C++, Java, Javascript(learning)</Text>
              <Text>- Math, Physics, Chemistry</Text>
              <Text>- Ableton</Text>
      </View>
    );
  }
}

class ContactPage extends Component {
  static navigationOptions = {
    title: 'Contact',
  };
  render() {
    return (
      <View>
          <Text style={styles.title}>Contact</Text>
              <Text>E-mail: mark091647@naver.com</Text>
              <Text>Phone: 010-5297-0297</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  content: {
    color: 'black',
  },
});

const SimpleApp = StackNavigator({
  Home: { screen: HomePage },
  Profile: { screen: ProfilePage },
  Contact: { screen: ContactPage },
});

AppRegistry.registerComponent('SandwichApp', () => SimpleApp)