import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export class BaseScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: this.props.options.topContainer.height,
                    backgroundColor: this.props.options.topContainer.backgroundColor,
                }} >
                    <Image style={{ width: "100%", height: "100%" }} source={
                        this.props.options.topContainer.imageSource
                    } />
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: this.props.options.bottomContainer.backgroundColor,
                }} >
                    <Text style={{
                        alignSelf: "center",
                        marginTop: 24,
                        width: 300,
                        color: "white",
                        fontSize: 17
                    }}>{this.props.options.bottomContainer.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
