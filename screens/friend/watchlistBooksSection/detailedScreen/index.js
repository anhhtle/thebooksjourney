import React from 'React';
import { ScrollView } from 'react-native';

// redux
import { connect } from 'react-redux';

import FriendGoBackHeader from '../../FriendGoBackHeader';
import BookCard from './BookCard';
import WatchlistBookModal from '../WatchlistBookModal'; 


class FriendWatchlistBooksDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needModal: false,
            isModalVisible: false,
            indexSelected: null
        }

        this.handleShowModal = this.handleShowModal.bind(this);
    }

    render () {
        return (
            <ScrollView>
                <FriendGoBackHeader title={'Watchlist'} navigation={this.props.navigation} />

                {this.renderBookCards()}

                {this.renderModal()}

            </ScrollView>
        )
    }
    componentDidMount() {
        this.setModalIndex();
    }
    componentWillReceiveProps() {
        this.setModalIndex();
    }
    setModalIndex() {
        let indexSelected = null;
        this.props.variantsFriend.variantsFriend.map((item, index) => {
            if (item.status === 'Watchlist') {
                indexSelected = index;
            }
        });
        if (indexSelected !== null) {
            this.setState({indexSelected, needModal: true})
        } else {
            this.setState({needModal: false})
        }
    }
    renderBookCards() {
        let arr = [];
        this.props.variantsFriend.variantsFriend.forEach((variant, index) => {
            if (variant.status === 'Watchlist') {
                arr.push(<BookCard variant={variant} key={variant._id} showModal={() => this.handleShowModal(index)} />)
            }
        });

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <WatchlistBookModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variantsFriend.variantsFriend[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                />
            )
        } else {
            return null;
        }
    }
    handleShowModal(index) {
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
    }
}

const mapStateToProps = (state) => {
    const { variantsFriend } = state;
    return { variantsFriend }
}
  
export default connect(mapStateToProps)(FriendWatchlistBooksDetailedScreen);