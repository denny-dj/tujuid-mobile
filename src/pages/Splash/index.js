import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors } from '../../utils/colors';

export default function splash ({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000);
    }, [navigation]);
    return (
        <View style={styles.page}>
        <ILLogo />
        {/* <Text style={styles.title}>#disiniaja</Text> */}
      </View>
    )
}

const styles = StyleSheet.create({
    page: {backgroundColor: colors.white , flex: 1, alignItems: 'center', justifyContent: 'center'}
    // title : {fontSize: 20, fontWeight: '600', color: '#112349'}
})
