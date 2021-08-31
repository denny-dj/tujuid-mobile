import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    return (
        <View style={styles.page}>
            <Header type="dark-profile" title="Denny Djaman" />
            <Text style={styles.chatDate}>Kamis, 15 April 2021</Text>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page : {backgroundColor: colors.white, flex: 1} ,
    chatDate: { fontSize: 11, fontFamily: fonts.primary.normal, color: colors.text.secondary, marginVertical: 20, textAlign: 'center'}
})
