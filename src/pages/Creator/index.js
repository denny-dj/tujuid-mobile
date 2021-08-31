import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CreatorCategory, Gap, HomeProfile, Rated } from '../../components'
import NewsItem from '../../components/molecules/NewsItem'
import { colors, fonts } from '../../utils'
import { JSONCategoryCreator } from '../../assets'

const Creator = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapperSection}>
                    <Gap height={30} />
                    <HomeProfile />
                    <Text style={styles.welcome}>Mau Konsultasi dengan siapa hari ini ?</Text>
                </View>
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={32} />
                            {
                                JSONCategoryCreator.data.map(item => {
                                    return (
                                    <CreatorCategory key={item.id} category={item.category} onPress={() =>navigation.navigate('ChooseCreator')} />
                                    );
                                })
                            }
                            <Gap width={22} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapperSection}>
                    <Text style={styles.sectionLabel}>Top Reted</Text>
                    <Rated />
                    <Rated />
                    <Rated />
                </View>
                <Text style={styles.sectionLabel}>Good News</Text>
                <NewsItem />
                <NewsItem />
                <NewsItem />
        <Gap height={30}/>
        </ScrollView>
            </View>
        </View>
    )
}

export default Creator

const styles = StyleSheet.create({
    page: {backgroundColor: colors.secondary, flex: 1},
    content: {backgroundColor: colors.white, flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
    wrapperSection: {paddingHorizontal: 16},
    welcome: {fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 30, marginBottom: 16, maxWidth: 209},
    category: {flexDirection: 'row'},
    wrapperScroll: {marginHorizontal: -16},
    sectionLabel : {fontSize: 16, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop: 30, marginBottom:16},
})
