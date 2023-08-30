import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PassoStack from "../components/PassoStack"
import RegisterPage from "../screens/RegisterPage"
import LoginPage from "../screens/loginPage"
import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: false}}>
        <Stack.Screen 
            name="login" 
            options={{title:"tela login"}}
        >
            {
                props => (
                    <PassoStack {...props} avancar="register">
                        <LoginPage/>
                    </PassoStack>
                )
            }
        </Stack.Screen>
        
        <Stack.Screen name="RegisterPage">
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