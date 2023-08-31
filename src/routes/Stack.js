import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PassoStack from "../components/PassoStack"
import RegisterPage from "../screens/RegisterPage"
import LoginPage from "../screens/loginPage"
import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="loginPage" screenOptions={{headerShown: false}}>
        <Stack.Screen 
            name="loginPage" 
            options={{title:"tela login"}}
        >
            {
                props => (
                    
                    <PassoStack {...props} avancar="home">
                        <LoginPage {...props}/>
                    </PassoStack>
                )
            }
        </Stack.Screen>
        
        <Stack.Screen name="home">
            {
                props => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <RegisterPage/>
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="Home">
            {
                props => (
                    <PassoStack {...props} voltar >
                        <Home/>
                    </PassoStack>
                )
            }
        </Stack.Screen>
    </Stack.Navigator>
)