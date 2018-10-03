import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendCard from './FriendCards';

export default class FriendsListScreen extends React.Component {

    render () {
        return (
            <ScrollView style={styles.container}>
                <ContactsHeader />
                <ContactsSubheader navigation={this.props.navigation} />

                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})