import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import Drawer from "./Drawer";
import Tab from "./Tab";

export default props => (
    <SafeAreaView style={{flex: 1}} >
        <NavigationContainer>
          <Tab/>
        </NavigationContainer>
    </SafeAreaView>
    
)

