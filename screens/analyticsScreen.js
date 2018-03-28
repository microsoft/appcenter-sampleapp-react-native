import React from 'react';
import { View, Text, Image } from 'react-native';

import { BaseScreen } from './baseScreen';
import * as images from '../images';

export class AnalyticsScreen extends React.Component {
    render() {
        return (
            <BaseScreen options={
                {
                    topContainer: {
                        height: 200,
                        backgroundColor: "#FDAD00",
                        imageSource: images.analytics
                    },
                    bottomContainer: {
                        backgroundColor: "#FFC326",
                        description: "Get information about the number of daily, weekly, and monthly users, session duration, the top devices and more. Use events to collect rich behavioral analytics data."
                    }
                }
            }>
            </BaseScreen>
        );
    }
}