import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/Sign In";
import Dashboard from "../Screens/Dashboard";
import AboutUs from "../Screens/AboutUs";
import Work from "../Screens/Work";
import Contact from "../Screens/Contact";
import MeasureShirt from "../Screens/MeasureShirt";
import TailoredDress from "../Screens/TailoredDress";

const AppDrawerNavigator = createDrawerNavigator({
    SignUp:{
        screen: SignUp,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    SignIn:{
        screen: SignIn,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Dashboard:{
        screen: Dashboard,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Shirt:{
        screen: MeasureShirt,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Suit:{
        screen: TailoredDress,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    About:{
        screen: AboutUs,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Work:{
        screen: Work,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Contact:{
        screen: Contact,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator }

});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
