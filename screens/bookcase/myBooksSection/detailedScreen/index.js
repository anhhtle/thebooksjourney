import React from 'React';
import { ScrollView } from 'react-native';

import { connect } from 'react-redux';

import GoBackHeader from 'book/screens/utility/GoBackHeader';
import BookCard from './BookCard';
import BookDetailModal from '../BookDetailModal'; 


class MyBooksDetailedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    render () {
        return (
            <ScrollView>
                <GoBackHeader title={'My Books'} navigation={this.props.navigation} />

                {this.renderBookCards()}

                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    saveChanges={() => this.handleSaveChanges(this.props.variants[this.state.indexSelected].book._id)}
                    />

            </ScrollView>
        )
    }

    renderBookCards() {
        let arr = [];
        this.props.variants.variants.forEach((variant, index) => {
            if (variant.status !== 'Recommended') {
                arr.push(<BookCard variant={variant} key={variant._id} showModal={() => this.handleShowModal(index)} />)
            }
        });

        return arr;
    }
    handleShowModal(index) {
        this.setState({isModalVisible: true, indexSelected: index})
    }
    handleSaveChanges() {
        this.setState({isModalVisible: false})
    }

}

const mapStateToProps = (state) => {
    const { variants } = state
    return { variants }
};
  
export default connect(mapStateToProps)(MyBooksDetailedScreen);