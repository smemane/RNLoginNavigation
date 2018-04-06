import React from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, TextInput} from 'react-native';

class Transaction extends React.Component {
    static navigationOptions = {
        title: 'account page',
      };
    render() {
        return(
            <View style={styles.accountContainer}>
                <Text>On Account Page</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    accountContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfe6e9',
        padding:20
    }
});

export default Transaction;