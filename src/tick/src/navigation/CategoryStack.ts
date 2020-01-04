import { createStackNavigator } from 'react-navigation-stack';
import {
  CategoryScreen,
  NewCategoryScreen,
  TaskByCategoryScreen,
  EditCategoryScreen,
  ProfileScreen
} from 'src/screens';

const CategoryNavigator = createStackNavigator(
  {
    Category: {
      screen: CategoryScreen,
      navigationOptions: {
        header: null
      }
    },
    NewCategory: {
      screen: NewCategoryScreen,
      navigationOptions: {
        header: null
      }
    },
    EditCategory: {
      screen: EditCategoryScreen,
      navigationOptions: {
        header: null
      }
    },
    TaskByCategory: {
      screen: TaskByCategoryScreen,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Category'
  }
);

export default CategoryNavigator;
