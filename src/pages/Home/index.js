import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DummyImg1, DummyImg2, DummyImg3 } from '../../assets';
import { ContentCard, Gap, HomeProfile, HomeTabSection } from '../../components';
import { colors } from '../../utils';

const Home = () => {

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <View style={styles.wrapperSection}>
                    <Gap height={30}  />
                    <HomeProfile />
                    <Gap height={20} />
                </View>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.contentCardContainer}>
                            <Gap width={24} />
                            <ContentCard image={DummyImg1} />
                            <ContentCard image={DummyImg2} />
                            <ContentCard image={DummyImg3} />
                        </View>
                    </ScrollView>
                </View>
                  <View style={styles.tabContainer}>
                      <HomeTabSection />
                    </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {backgroundColor: colors.secondary, flex: 1 },
    content: {backgroundColor: colors.white, flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
    wrapperSection: {paddingHorizontal: 16},
    contentCardContainer: {flexDirection: 'row', marginVertical: 12},
    tabContainer: {flex: 1},
})
