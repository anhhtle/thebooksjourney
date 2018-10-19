import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, Dimensions, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class BasicInfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.test}</Text>

                <View style={styles.header}>
                    <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>
                    <Text style={styles.headerTitle}>Basic Info</Text>
                </View>
                <View style={styles.body}>

                    {/* name */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.firstName + ' ' + this.props.lastName}</Text>
                            <Text style={styles.label}>Name</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.props.showModal}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* email */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.email}</Text>
                            <Text style={styles.label}>Email</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.props.showModal}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* alias */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.alias}</Text>
                            <Text style={styles.label}>Favorite fictional character</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.props.showModal}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>

                    {/* alias */}
                    <View style={styles.fieldContainer}>
                        <View>
                            <Text style={styles.value}>{this.props.job}</Text>
                            <Text style={styles.label}>Character's job</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={this.props.showModal}>
                            <Ionicons style={styles.icon} name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} color={'grey'}/>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }

    handleShowModal() {
        this.props.showModal;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        fontSize: 20,
        marginRight: 10
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    // field
    fieldContainer: {
        width: Dimensions.get('window').width,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: 'grey'
    },
    button: {
        width: 50,
        alignItems: 'center'
    }
});