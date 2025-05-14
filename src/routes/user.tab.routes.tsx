import React, {useEffect, useState} from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';
import {Home} from '../screens/Home';
import {Orders} from '../screens/Orders';

const Tab = createBottomTabNavigator();

export function UserTabRoutes() {
  const [notifications, setNotifications] = useState('0');

  useEffect(() => {
    const subscribe = firestore()
      .collection('orders')
      .where('status', '==', 'Pronto')
      .onSnapshot(querySnapshot => {
        setNotifications(String(querySnapshot.docs.length));
      });
    return () => subscribe();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.iconWrapper}>
              <Text style={[styles.tabText, {color}]}>Cardápio</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="orders"
        component={Orders}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.iconWrapper}>
              <Text style={[styles.tabText, {color}]}>Pedidos</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notifications}</Text>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
  },
  tabItem: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  badge: {
    marginLeft: 10,
    backgroundColor: '#04D361',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
