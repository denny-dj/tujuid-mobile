import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyImg1, DummyImg2, DummyImg3, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ContentCard = ({image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>Wedding Organaizer</Text>
                <View style={styles.rateContainer}>
                    <View style={styles.starContainer}>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                    </View>
                    <Text>4.5</Text>
                </View>
            </View>
        </View>
    )
}

export default ContentCard

const styles = StyleSheet.create({
    container: { width: 200, height: 220, backgroundColor: colors.white, borderRadius: 8, shadowColor: 'black', shadowOffset: {width: 0, height: 7}, shadowOpacity: 0.5, shadowRadius: 10, elevation: 4, borderRadius:8, overflow: 'hidden', marginRight: 24},
    image: {width: 200, height:140, resizeMode: 'cover'},
    content: {padding: 12},
    title : { fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary},
    rateContainer: {flexDirection: 'row'},
    starContainer: {flexDirection: 'row'},
    
})
