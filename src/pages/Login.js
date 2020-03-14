import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import api from '../services/api';
export default class Main extends Component {
    static navigationOptions = {
        title: 'Meu App',
    };
    acessar = () => {
        Alert.alert('Meu teste', 'Efetuando login!');
        this.props.navigation.navigate('Home');
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textoBemvindo}>Seja bem vindo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => this.acessar()}>
                    <Text style={styles.botaoText}> Acessar </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input:{
        backgroundColor: '#fff',
        width: 300,
        marginTop: 10,
        fontSize: 16,
        padding: 10,
        borderRadius: 3,
        fontWeight: 'bold',
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    textoBemvindo: {
        top: 40,
        fontSize: 24,
        color: '#fff',
        marginBottom: 80,
        position: 'absolute',
    },
    apresentacao: {
        marginBottom: 2,
    }
});
