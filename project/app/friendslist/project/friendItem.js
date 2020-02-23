import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function FriendItem({item}) {

	return (
            <View style={styles.friendContainer}>
                <View style={styles.friendList}>
                  <Entypo name='user' size={50} color='black' />
                  <Text>{item}</Text>
                </View>
                <View style={styles.friendList}>
                  <Button title='Friends' />
                  <Button title='Challenge' />
                </View>
              </View>
	)
}

const styles = StyleSheet.create({
    friendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        padding: 10,
        backgroundColor: 'pink',
        fontSize: 20,
      },
      friendList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})