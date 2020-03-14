import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { StatusBar, Dimensions, AppRegistry, StyleSheet, Text, View, Image } from 'react-native';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenwidth = Math.round(Dimensions.get('window').width);
export default class Main extends Component {
    disciplina = require('../sources/img/disciplina.jpg');
    disciplina2 = require('../sources/img/gestao-financeira.jpg');
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={false} showsButtons={false}>
                <View style={styles.slide1}>
                    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}  />
                    <Image source={this.disciplina} style={styles.image} resizeMode="stretch"/>
                    <Text style={styles.text}>Finance APP aplitivo para controle financeiro</Text>
                </View>
                <View style={styles.slide2}>
                    <Image source={this.disciplina2} style={styles.image} resizeMode="cover"/>
                    <Text style={styles.text}>Controle Seus Gasto Sem Dificuldades</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>Vamos começar?</Text>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    image: {
        zIndex: 1,
        position: 'absolute',
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        zIndex: 9,
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    }
})