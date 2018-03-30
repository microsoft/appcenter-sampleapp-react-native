import React from 'react';
import { View, Text, Image, Alert, NativeModules } from 'react-native';

import { BaseScreen } from './baseScreen';
import * as images from '../images';

export class CodePushScreen extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        let self = this;
        return (
            <View style={{ flex: 1 }}>
                <BaseScreen options={
                    {
                        topContainer: {
                            height: 200,
                            backgroundColor: "#00695c",
                            imageSource: images.codepush
                        },
                        bottomContainer: {
                            backgroundColor: "#009688",
                            description: "Deploy mobile app updates directly to their users' devices.",
                            bottomButton: {
                                text: "Sync",
                                onPress: () => {
                                    self.basescreen.codepush.sync();
                                }
                            }
                        },
                        codepush: true
                    }
                } ref={basescreen => { this.basescreen = basescreen }}>
                </BaseScreen>
            </View>
        );
    }
}

const styles = {

}