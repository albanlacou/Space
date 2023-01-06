import React, {useEffect, useState} from 'react';
import {SafeAreaView, Image, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {AntDesign} from '@expo/vector-icons';
import uuid from 'react-native-uuid';

export default function PhotoJour() {
    const [activeLove, setActiveLove] = useState(true);
    const [activeLike, setActiveLike] = useState(true);
    const [activeDislike, setActiveDislike] = useState(true);
    const [isStored, setIsStored] = useState(true);
    const [data, setPhotoData] = useState([]);
    const [jourLike, setJourLike] = useState([]);
    const [jourLove, setJourLove] = useState([]);
    const [jourDislike, setJourDislike] = useState([]);

    const My_Key = "FRpj4DxGHzZGpe1mA5KJQj9u5HUuzWknGJTnoGqU";
    useEffect(() => {
        fetchPhotoDay();
        async function fetchPhotoDay() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${My_Key}&date=2021-02-22`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    const handleClickLove = () => {

        const jour = {
            image: data.hdurl,
            date: data.date,
        };

        setActiveLove(!activeLove);

        if (activeLike == false) {
            setActiveLike(!activeLike);

            const updateJourLike = (jourLike.filter(j => j.image !== jour.image));
            setJourLike(updateJourLike);
            console.log('Jour like supprimer + add Love')
        }
        if (activeDislike == false) {
            setActiveDislike(!activeDislike)

            const updateJourDislike = (jourDislike.filter(j => j.image !== jour.image));
            setJourDislike(updateJourDislike);
            console.log('Jour dislike supprimer + add Love')
        }

        const updateJourLove = (jourLove.filter(j => j.image !== jour.image));

        if (updateJourLove.length === jourLove.length){
            //jourLove pas dans le tab on ajoute
            setJourLove([...jourLove, jour]);
            console.log('JourLove add')
        }
        else {
            //jourLove dans le tab on le supprime
            setJourLove(updateJourLove);
            console.log('JourLove supp')
        }

        AsyncStorage.setItem('jourLike', JSON.stringify(jour))
            .then(() => console.log('jourLike stored successfully'))
            .catch(error => console.error('Error storing jourLike: ', error));

    };
    const handleClickLike = () => {

        const jour = {
            image: data.hdurl,
            date: data.date,
        };

        setActiveLike(!activeLike);

        if (activeLove == false) {
            setActiveLove(!activeLove);

            const updateJourLove = (jourLove.filter(j => j.image !== jour.image));
            setJourLove(updateJourLove);
            console.log('Jour love supprimer + add Like')
        }
        if (activeDislike == false) {
            setActiveDislike(!activeDislike)

            const updateJourDislike = (jourDislike.filter(j => j.image !== jour.image));
            setJourDislike(updateJourDislike);
            console.log('Jour dislike supprimer + add Like')
        }

        const updateJourLike = (jourLike.filter(j => j.image !== jour.image));

        if (updateJourLike.length === jourLike.length){
            //jourlike pas dans le tab on ajoute
            setJourLike([...jourLike, jour]);
        }
        else {
            //jourlike dans le tab on le supprime
            setJourLike(updateJourLike);
            console.log('JourLike supp')
        }
        console.log(jourLike)
         AsyncStorage.setItem('jourLike', JSON.stringify(jourLike))
            .then(() => console.log('jourLike stored successfully'))
            .catch(error => console.error('Error storing jourLike: ', error));
    };
    const handleClickDislike = () => {

        const jour = {
            image: data.hdurl,
            date: data.date,
        };

        setActiveDislike(!activeDislike);

        if (activeLove == false) {
            setActiveLove(!activeLove);

            const updateJourLove = (jourLove.filter(j => j.image !== jour.image));
            setJourLove(updateJourLove);
            console.log('Jour love supprimer + add Dislike')
        }
        if (activeLike == false) {
            setActiveLike(!activeLike)

            const updateJourLike = (jourLike.filter(j => j.image !== jour.image));
            setJourLike(updateJourLike);
            console.log('Jour like supprimer + add Dislike')
        }

        const updateJourDislike = (jourDislike.filter(j => j.image !== jour.image));

        if (updateJourDislike.length === jourDislike.length){
            //jourDislike pas dans le tab on ajoute
            setJourDislike([...jourDislike, jour]);
            console.log('JourDislike add')
        }
        else {
            //jourDislike dans le tab on le supprime
            setJourDislike(updateJourDislike);
            console.log('JourDislike supp')
        }

        AsyncStorage.setItem('jourDislike', JSON.stringify(jour))
            .then(() => console.log('jourDislike stored successfully'))
            .catch(error => console.error('Error storing jourDislike: ', error));
    };

    return (
        <View style={{flex: 1, color: '#fff', margin: 24}}>
            <View style={{flex: 1, padding: 12}}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                    fontSize: 18
                }}>{data.title}
                </Text>
            </View>
            <View style={{flex: 8}}>
                <Image source={{uri: data.hdurl}} style={{flex: 5, borderRadius: 30}}/>
                <View style={{position: 'absolute', right: 10, top: 10}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 15,
                            width: 30,
                            height: 30}}
                        onPress={() => Alert.alert(data.title, data.explanation)}>
                        <Text style={{fontSize: 20, fontWeight: 'blod', textAlign: 'center', color: 'white'}}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    left: 10,
                    top: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 20,
                    padding: 5}}>
                    <Text style={{color: 'white'}}>© - {data.copyright}</Text>
                </View>
            </View>
            <View style={{
                flex: 1, flexDirection: 'row', justifyContent: 'space-evenly',
                alignItems: 'center', paddingTop: 10
            }}>
                <TouchableOpacity
                    style={{
                        borderColor: activeLove ? 'salmon' : 'white',
                        backgroundColor: activeLove ? 'white' : 'salmon',
                        borderRadius: 20,
                        borderWidth: 1,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center'}}
                    onPress={handleClickLove}>
                    <Image source={require('./assets/Images/heart.png')} resizeMode='contain'
                           style={{width: 20, height: 20}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderColor: activeLike ? 'limegreen' : 'white',
                        backgroundColor: activeLike ? 'white' : 'limegreen',
                        borderRadius: 20,
                        borderWidth: 1,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center'}}
                    onPress={handleClickLike}>
                    <Image source={require('./assets/Images/like.png')} resizeMode='contain'
                           style={{width: 25, height: 25}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        borderColor: activeDislike ? 'royalblue' : 'white',
                        backgroundColor: activeDislike ? 'white' : 'royalblue',
                        borderRadius: 20,
                        borderWidth: 1,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center'}}
                    onPress={handleClickDislike}>
                    <Image source={require('./assets/Images/dislike.png')} resizeMode='contain'
                           style={{width: 25, height: 25}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}