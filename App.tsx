import Authentication from "@pages/authentication/authentication";
import Login from "@pages/login/login";
import Register from "@pages/register/register";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Tabs from "@/src/components/layout/tabs/tabs";
import React, { useState, useContext, createContext, useEffect } from "react";

export const AuthContext = createContext(null);

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
	const [isAuthenticated, setIsAuthenticated] = useState(true);

	useEffect(() => {
	  console.log(isAuthenticated);
	  
	}, [isAuthenticated])
	
	return (
		<>
		<AuthContext.Provider value={{ 
			isAuthenticated :Boolean, 
			setIsAuthenticated, 
			titre: "ShortsTitle", 
			AlertTest: () => { Alert.alert("test fonction", "ceci est une fonction envoyé par context")}
		}}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShow: false}}>
					{!isAuthenticated && (
						<>
							<Stack.Screen name="Authentication" component={Authentication} options={{ headerShown: false }}/>
							<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
							<Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
						</>
					)}

					{isAuthenticated && <Stack.Screen name="bottomTab" component={Tabs} options={{ headerShown: false }}/> }
					
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
		</>
	);
}