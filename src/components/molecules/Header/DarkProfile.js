import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyCreator2 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = () => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" />
            <View style={styles.content}>
                <Text style={styles.name}>Fadli Bang Fafad</Text>
                <Text style={styles.desc}>Videographer</Text>
            </View>
            <Image style={styles.avatar} source={DummyCreator2} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {backgroundColor: colors.secondary, paddingVertical: 30, paddingLeft: 20, paddingRight: 16, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, flexDirection: 'row', alignItems: 'center'},
    content: {flex: 1},
    avatar: {width: 46, height: 46, borderRadius: 46 / 2},
    name : {fontSize: 20, fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center'},
    desc : {fontSize: 14, fontFamily: fonts.primary[400], marginTop: 6, color: colors.text.subtitle, textAlign: 'center'},
})
