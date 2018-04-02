import React from 'react';
import { View, Text, Image } from 'react-native';

import { BaseScreen } from './baseScreen';
import * as images from '../images';

export class DistributeScreen extends React.Component {
    render() {
        return (
            <BaseScreen options={
                {
                    title: "Distribute",
                    topContainer: {
                        height: 200,
                        backgroundColor: "#38A495",
                        imageSource: images.distribute
                    },
                    bottomContainer: {
                        backgroundColor: "#44B8A8",
                        description: "Users can install the app via email distribution lists for testing, much as they\'d download an app from the app store.\n\nBacked by HockeyApp."
                    }
                }
            }>
            </BaseScreen>
        );
    }
}