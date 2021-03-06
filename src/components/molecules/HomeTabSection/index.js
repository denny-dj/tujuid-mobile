import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { fonts } from '../../../utils';


const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#020202', height: 3, width: '15%', marginLeft: '3%' }}
      style={{ backgroundColor: 'white' }}
      tabStyle={{width: 'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{fontFamily: fonts.primary[400], color : focused ? '#020202' : '#8d92a3'}}>
          {route.title}
        </Text>
      )}
    />
  );

const FirstRoute = () => (
    <View style={{ backgroundColor: '#ff4081', flex: 1 }} />
  );
   
  const SecondRoute = () => (
    <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
  );
  const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Design' },
        { key: '2', title: 'Photography' },
        { key: '3', title: 'Event Planner' },
    ]);

    const renderScene = SceneMap({
        1: FirstRoute,
        2: SecondRoute,
        3: FirstRoute,
      });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout} />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({})
