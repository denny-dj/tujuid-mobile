import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyCreator10, DummyCreator3, DummyCreator4 } from '../../assets'
import { List } from '../../components'
import { colors, fonts } from '../../utils'

const Message = () => {
    const [creators] = useState ([
        {
            id: 1,
            profile : DummyCreator3,
            name : 'Denny Djaman',
            desc : 'Terima kasih atas waktunya kak.. ' 
        },
        {
            id: 2,
            profile : DummyCreator4,
            name : 'Rieky Julfan',
            desc : 'Terima kasih atas waktunya kak.. ' 
        },
        {
            id: 3,
            profile : DummyCreator10,
            name : 'Wawan Hendrawan',
            desc : 'Terima kasih atas waktunya kak.. ' 
        }
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {creators.map(creator=>{
                return (
                    <List
                    key={creator.id}
                    profile={creator.profile}
                    name={creator.name}
                    desc={creator.desc}
                    />
                )   
                }
                )}
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    page: { backgroundColor: colors.secondary, flex: 1},
    content: { backgroundColor: colors.white, flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
    title: {fontSize: 20, fontFamily: fonts.primary[600], color: colors.text.primary, marginTop:30, marginLeft: 16 },
})
