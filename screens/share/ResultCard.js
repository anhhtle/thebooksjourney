import React from 'React';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { renderRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {

        return (
            <View style={styles.container}>
                { this.renderImage() }

                <View style={styles.cardDetail}>
                    <Text style={styles.title}>{this.props.item.book.title}</Text>
                    <Text style={styles.author}>{this.props.item.book.authors ? this.props.item.book.authors[0] : ''}</Text>

                    {/* ratings */}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        { renderRatingStars(this.props.item.book.ratings) }
                    </View>

                    <Text style={{fontWeight: 'bold'}}>{this.props.item.book_condition.toUpperCase()}</Text>

                    {/* action button */}
                    <TouchableOpacity style={styles.actionIconContainer} onPress={this.props.showModal}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} style={styles.actionIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderImage() {
        if (this.props.item.book.image) {
            return <Image source={{ uri: this.props.item.book.image }} style={styles.cardImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.cardImage} />
    }
}

const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        maxHeight: 140,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 5
    },
    cardImage: {
        flex: 1,
        width: 100,
        resizeMode: 'contain',
        marginRight: 15
    },
    cardDetail: {
        flex: 4,
        paddingVertical: 7,
        justifyContent: 'space-between'
    },
    title: {
        marginBottom: 5
    },
    author: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    actionIconContainer: {
        width: 35,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    actionIcon: {
        fontSize: 30,
        color: '#8c1515'
    }
})