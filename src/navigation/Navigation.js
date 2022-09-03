import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Account from './screens/Account';
import Favorites from './screens/Favorites';
import Pokedex from './screens/Pokedex';

const Tab = createBottomTabNavigator(); 

const Navigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        	name='Account'
			component={Account}
			options={{
				tabBarLabel: "Cuenta",
				tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />
        	}} 
		/> 
        <Tab.Screen 
			name='Pokedex' 
			component={Pokedex}
			options={{
				tabBarLabel: "",
				tabBarIcon: () => renderPokeball()
        	}}
		/>
        <Tab.Screen 
			name='Favorites' 
			component={Favorites}
			options={{
				tabBarLabel: "Favoritos",
				tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />
        	}} 
			/>
    </Tab.Navigator>
  )
}

function renderPokeball () {
	return (
		<Image 
			source={require('../assets/pokeball.webp')} 
			style={{ width: 60, height: 60 }}
		
		/>
	)

}

export default Navigation