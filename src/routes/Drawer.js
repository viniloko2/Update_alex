import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import addRoom from "../screens/addRoom";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator()

export default props =>(
    <NavigationContainer>
        <Drawer>
            <Drawer.Screen name="addRoom" component={addRoom}> 

            </Drawer.Screen>
            <Drawer.Screen name="home" component={Home}>
            </Drawer.Screen>
        </Drawer>
    </NavigationContainer>
)