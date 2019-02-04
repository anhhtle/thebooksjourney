import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import FriendGoBackHeader from './FriendGoBackHeader';
import CurrentReadingSection from './currentReadingSection';
import FriendBooksSection from './friendBooksSection';
import WatchlistBooksSection from './watchlistBooksSection';
import AvatarsSection from './avatarsSection';

export default class FriendProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            destination: ''
        }
    }
    
    render () {
        return (
            <ScrollView style={styles.container}>

                <FriendGoBackHeader title={this.state.name} navigation={this.props.navigation} destination={this.state.destination}/>

                <CurrentReadingSection />
                <FriendBooksSection navigation={this.props.navigation} />
                <WatchlistBooksSection navigation={this.props.navigation} />
                <AvatarsSection navigation={this.props.navigation} />
            </ScrollView>
        )
    }
    componentDidMount() {
        let name = `${this.props.navigation.state.params.friend.first_name} ${this.props.navigation.state.params.friend.last_name}`

        this.setState({name, destination: this.props.navigation.state.params.destination})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
