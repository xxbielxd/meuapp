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
export default class Home extends Component {
    componentDidMount() {
        this.getNome();
    }
    state = {
        nome: 'Carregando...',
        codigoUsuario: 'Carregando',
    };
    getNome = async () => {
        const response = await api.get('?teste=teste');
        this.setState(response.data);
        console.log(response.data);
        console.log(this.state);
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                    Seja bem vindo a nossa Aplicação {this.state.nome}
                </Text>
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
    texto: {
        fontSize: 10,
        margin: 15,
        color: '#fff',
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
    }
});
