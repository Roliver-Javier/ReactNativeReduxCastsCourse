import React, { Component } from 'react';
import { Text, View, LayoutAnimation, 
         UIManager, Platform,
         TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component{
    
    componentWillUpdate(){
        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental && 
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        LayoutAnimation.spring();
    }

    renderDescription(){
        const { library, expanded } = this.props;

        if(expanded){
            return (
                <Text style={{flex: 1, padding:20}}>{library.description}</Text>   
            );
        }
    }

    render(){
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        
        return(
            <TouchableWithoutFeedback
              onPress={ ()=> this.props.selectLibrary(id) }
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateTopProps = (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded : expanded };
};

export default connect(mapStateTopProps, actions)(ListItem);