import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { fonts } from '../../utils'
import { colors } from '../../utils/colors'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
            <ILLogo />
            <Text style={styles.title}>CREATIVE CARE FOR ALL YOU NEED</Text>
            </View>
            <View>
            <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
            <Gap height={16} />
            <Button type="secondary" title="Sign In" onPress={() => navigation.navigate('Login')} />
        </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page:{padding: 40, justifyContent: 'space-between', backgroundColor: colors.white, flex: 1},
    title:{fontSize: 20, color: colors.white, marginTop: 91, fontFamily: fonts.primary[600]}
})
