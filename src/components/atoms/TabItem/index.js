import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconCreator, IconCreatorActive, IconHome, IconHomeActive, IconMessage, IconMessageActive, IconProfile, IconProfileActive } from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Home') {
            return active ? <IconHomeActive/> : <IconHome />
        }
        if(title === 'Creator') {
            return active ? <IconCreatorActive/> : <IconCreator />
        }
        if(title === 'Message') {
            return active ? <IconMessageActive /> : <IconMessage />
        }
        if(title === 'Profile') { 
            return active ? <IconProfileActive /> : <IconProfile />
        }
        return <IconHome />
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {alignItems: 'center'},
    text: (active) => (
        {
        fontSize: 10, 
        color: active ? colors.text.menuActive : colors.text.menuInactive, 
        fontFamily: fonts.primary[600], 
        marginTop: 4
    }
    ),
});
