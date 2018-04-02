import React from 'react';
import { View, Text, Image } from 'react-native';

import { BaseScreen } from './baseScreen';
import * as images from '../images';

export class BuildScreen extends React.Component {
    render() {
        return (
            <BaseScreen options={
                {
                    title: "Build",
                    topContainer: {
                        height: 200,
                        backgroundColor: "#0064C3",
                        imageSource: images.build
                    },
                    bottomContainer: {
                        backgroundColor: "#0078D7",
                        description: "Create an installable app package automatically with every push to your repository. Supports GitHub, or Git repos on Bitbucket and Visual Studio Team Services (VSTS).\n\nNo additional build hardware required."
                    }
                }
            }>
            </BaseScreen>
        );
    }
}