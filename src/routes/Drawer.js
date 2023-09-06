import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import addRoom from "../screens/addRoom";
import Home from "../screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator()

export default props =>(

            <Drawer.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
                <Drawer.Screen name="addRoom" component={addRoom}> 
                </Drawer.Screen>
                <Drawer.Screen name="home" component={Home}>
                </Drawer.Screen>
            </Drawer.Navigator>
    
)