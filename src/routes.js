import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './pages/Main';
import Home from './pages/Home';
export default createStackNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                header: null,
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: 'Home',
            },
        }
    },
    {
        headerLayoutPreset: 'center',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0040FF',
            },
            headerTintColor: '#FFF',
        },
    },
);
