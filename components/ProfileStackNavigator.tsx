import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Profile from './Profile'

const ProfileStackNavigator = createStackNavigator({
    Profile:{
        screen : Profile,
        navigationOptions:{
            title : "Profile"
        }
    }
})

export default ProfileStackNavigator