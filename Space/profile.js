import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, StyleSheet, AsyncStorage, TouchableOpacity, Image} from 'react-native';
import MyLikes from './likePost'

const UsersListScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    borderColor:'salmon',
                    borderRadius: 40,
                    borderWidth: 1,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center'}}
                >
                <Image source={require('./assets/Images/heart.png')} resizeMode='contain'
                       style={{width: 40, height: 40}}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    borderColor: 'limegreen',
                    borderRadius: 40,
                    borderWidth: 1,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center'}}
                >
                <Image source={require('./assets/Images/like.png')} resizeMode='contain'
                       style={{width: 50, height: 50}}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    borderColor: 'royalblue' ,
                    borderRadius: 40,
                    borderWidth: 1,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center'}}
                >
                <Image source={require('./assets/Images/dislike.png')} resizeMode='contain'
                       style={{width: 50, height: 50}}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        lex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 10
    },
});

export default UsersListScreen;