import React from 'react';
import { View, Text, Image } from 'react-native';

import { BaseScreen } from './baseScreen';
import * as images from '../images';

export class CrashesScreen extends React.Component {
    render() {
        return (
            <BaseScreen options={
                {
                    topContainer: {
                        height: 200,
                        backgroundColor: "#6FA22E",
                        imageSource: images.crashes
                    },
                    bottomContainer: {
                        backgroundColor: "#91CA47",
                        description: "Collect crashes from all devices, prioritize them based on the number of users seeing the crash, and get the full stack traces to help you fix them.\n\nBacked by HockeyApp.",
                        bottomButton: {
                            text: "Send crash report",
                            onPress: () => {
                                console.log('pressed');
                            }
                        }
                    }
                }
            }>
            </BaseScreen>
        );
    }
}