import React from 'react';
import {StyleSheet,View,Text} from 'react-native'
import {Header} from 'react-native-elements'

export default class Instagram extends React.Component{
    render(){
        return(
        <View>
            <Header
            backgroundColor="pink"
            centerComponent={{text:'Instagram Page'}}/>
            <Text style={design.wordDesign}>
                This is the Instagram page
            </Text>
        </View>
        );
    }
}
const design =StyleSheet.create({
    wordDesign:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:300
    }
})