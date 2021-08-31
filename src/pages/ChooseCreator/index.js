import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyCreator11 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseCreator = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Designer" onPress={() => navigation.goBack()}/>
            <List type="next" profile={DummyCreator11} name="Alexander" desc="Design Grafis" onPress={() => navigation.navigate('Chatting')} />
            <List type="next" profile={DummyCreator11} name="Alexander" desc="Design Grafis" />
            <List type="next" profile={DummyCreator11} name="Alexander" desc="Design Grafis" />
            <List type="next" profile={DummyCreator11} name="Alexander" desc="Design Grafis" />
            <List type="next" profile={DummyCreator11} name="Alexander" desc="Design Grafis" />
        </View>
    )
}

export default ChooseCreator

const styles = StyleSheet.create({
    page : {backgroundColor: colors.white, flex: 1},
})
