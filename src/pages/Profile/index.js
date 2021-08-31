import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ComProfile, Header, List } from '../../components'
import { colors } from '../../utils'


const Profile = () => {
    return (
        <View style={styles.page}>
             <View style={styles.content}>
                 <Header title="Profile" />
                 <ComProfile />
                <Text>Page Profile</Text>
                <List name="edit data" />
                <List name="edit data" />
                <List name="edit data" />
                <List name="edit data" /> 
             </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {backgroundColor: colors.secondary, flex: 1 },
    content: {backgroundColor: colors.white, flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
})
