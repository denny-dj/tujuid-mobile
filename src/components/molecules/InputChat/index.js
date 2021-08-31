import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Fadli" />
            <Button type="btn-icon" title="send" />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container : {padding: 16},
    input: {backgroundColor: colors.disable, padding: 14, borderRadius: 10}
})
