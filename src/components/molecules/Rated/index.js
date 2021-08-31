import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyCreator1, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const Rated = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyCreator1} style={styles.avatar} />
            <View style={styles.profile}>
                <Text style={styles.name}>Alexa Rechel</Text>
                <Text style={styles.category}>Bussiness Development</Text>
            </View>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </View>
    )
}

export default Rated

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between'},
    profile: {flex : 1},
    avatar: {width: 50, height: 50, borderRadius: 50/2, marginRight: 12, marginBottom: 15},
    rate: { flexDirection: 'row'},
    name:{fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary },
    category: {fontSize: 12, fontFamily: fonts.primary[400], color: colors.text.secondary, marginTop: 2 } ,
})
