import React from 'react';
import { Image, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
      };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="position">
                <StatusBar backgroundColor="blue" barStyle="dark-content"></StatusBar>
                <View style={styles.logoContainer}>
                    <Image source={require('../Images/sampleLogo.png')}/>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.welcomeText}>Welcome! Sign in with your email Address.</Text>
                    <TextInput style={styles.addressInput}
                        returnKeyType="go"
                        placeholder='Type in your email Address ... ' placeholderTextColor='grey'/>
                    <TouchableOpacity style={styles.submitButton}
                        onPress={() => navigate('Transaction')}>
                        <Text style={styles.submitButtonText}>Sign In </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfe6e9',
        padding:20
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    formContainer: {
        flex: 4,
        justifyContent: 'space-between',
        margin:20,
        padding:20,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
        //remove this
        marginTop:-80,
        marginBottom:100
    },
    welcomeText: {
        padding:15
    },
    addressInput: {
        backgroundColor: 'white',
        padding:15
    },
    submitButton: {
        padding:15,
        backgroundColor: '#1e3799'
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    }
    
});
export default Login;
