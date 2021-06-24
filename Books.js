import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';


export default function Books({title, des}) {
    return (
        <View style={styles.book}>            
            <Text >
                <Feather name="book" size={24} color="teal" />
                {title} 
            </Text>
            <Text>{des}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    book:{
        margin: 15,
    },
    title: {
        marginLeft: 10,
    }    
})