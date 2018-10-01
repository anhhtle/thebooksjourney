import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_term: ''
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Ionicons style={styles.searchIcon} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} color="#000"/>
                    <TextInput style={styles.textInput} placeholder='Seach book' keyboardType='default' underlineColorAndroid='rgba(0,0,0,0)' 
                        onChangeText={(search_term) => this.setState({search_term})}
                        onSubmitEditing={this.onSearchSubmit}
                    />
                </View>

                <TouchableOpacity style={styles.settingsContainer} onPress={this.onSearchSubmit}>
                    <Ionicons style={styles.settingsIcon} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} color="#000"/>
                </TouchableOpacity>
            </View>
        )
    }

    onSearchSubmit = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search_term}`)
            .then(res => res.json())
            .then(resJson => {
                this.props.navigation.navigate('BookSearchResult', { data: resJson });
            }).catch(err => {
                console.error(err);
            });

        // this.props.navigation.navigate('BookSearchResult');
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
        fontSize: 16,
        borderLeftWidth: 1,
        borderLeftColor: '#d6d7da',
    },

    // right side
    settingsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    settingsIcon: {
        color: '#FFF',
        fontSize: 20,
    }
});