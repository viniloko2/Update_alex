import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import EventPage from "../screens/EventPage"
import addRoom from "../screens/addRoom"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Stack from "./Stack"


const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {fontSize: 50},
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        headerShown: false,
        tabBarShowLabel: false

        
    }}>
        <Tab.Screen 
            name="Evento" 
            component={EventPage}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) =>(
                    <FontAwesome name="home" color={color} size={size} />
                )
            }}
        />
        <Tab.Screen 
            name="Salas" 
            component={addRoom} 
            options={{
                tabBarLabel: 'User',
                tabBarIcon: ({color, size})=>(
                    <FontAwesome name="user-md" color={color} size={size} />
                )
            }}      
        />
    </Tab.Navigator>
)