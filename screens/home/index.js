import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from 'thebooksjourney/redux/actions/user';
import { getAvatars } from 'thebooksjourney/redux/actions/avatar';
import { getNewsfeeds } from 'thebooksjourney/redux/actions/newsfeed';
import { getBookRequests } from 'thebooksjourney/redux//actions/request';
import { getFriendRequests } from 'thebooksjourney/redux/actions/friend';
import { getVariantsShare } from 'thebooksjourney/redux/actions/variantShare';
import { getNotifications } from 'thebooksjourney/redux/actions/notification';
import { getVariants } from 'thebooksjourney/redux/actions/variant';

// component
import MainHeader from '../MainHeader';
import BooksAvailableSection from './booksAvailable';
import NotificationsSection from './notifications';
import NewsfeedSection from './newsfeed';
import BookmarksTracker from 'thebooksjourney/screens/utility/BookmarksTracker';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.load = this.load.bind(this);
    }

    render() {
        const props = this.props;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} >
                    <MainHeader navigation={props.navigation} />
        
                    <BooksAvailableSection navigation={props.navigation}/>
                    <NotificationsSection navigation={props.navigation} requests={this.props.requests} user_id={this.props.user._id} />
                    <NewsfeedSection navigation={props.navigation} />
                </ScrollView>

                <BookmarksTracker navigation={props.navigation} silver={props.user.bookmarks.silver} gold={props.user.bookmarks.gold} destination={'Dashboard'}/>
            </View>
        );
    }

    componentDidMount() {
        this.load()
        this.props.navigation.addListener('willFocus', this.load);

        if (this.props.appState.env === 'dev') {
            this.props.getCurrentUser(this.props.user.token);
        }
        this.props.getAvatars(this.props.user.token);
        this.props.getVariants(this.props.user.token);
    }
    load() {
        this.props.getVariantsShare(this.props.user.token, {page: 1});
        this.props.getNewsfeeds(this.props.user.token);
        this.props.getFriendRequests(this.props.user.token);
        this.props.getBookRequests(this.props.user.token);
        this.props.getNotifications(this.props.user.token);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    const { appState, user, requests } = state;
    return { appState, user, requests }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser, getVariants,
        getAvatars, getNewsfeeds, getBookRequests, getVariantsShare,
        getFriendRequests, getNotifications
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)