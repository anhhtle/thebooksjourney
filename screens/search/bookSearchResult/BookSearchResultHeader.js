import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BookSearchResultHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: ''
        }
    };

    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backContainer} onPress={ () => goBack() }>
                    <Ionicons style={styles.backIcon} name={Platform.OS === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'} color="#000"/>
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <Ionicons style={styles.searchIcon} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} color="#000"/>
                    <TextInput style={styles.textInput} placeholder='Seach book' keyboardType='default' underlineColorAndroid='rgba(0,0,0,0)' 
                        onChangeText={(search_term) => this.setState({search_term})}
                    />
                </View>

            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 10,
        height: 80,
        backgroundColor: '#B1040E',
    },

    // left side
    backContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    backIcon: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: `700`
    },

    // right side
    searchContainer: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchIcon: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        paddingHorizontal: 5
    },
    textInput: {
        flex: 9,
        backgroundColor: '#fff',
        height: 30,
        paddingLeft: 15,
        paddingVertical: 0,
        fontSize: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#d6d7da',
    },

});