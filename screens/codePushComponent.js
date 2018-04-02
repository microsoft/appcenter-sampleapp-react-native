import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import CodePush from 'react-native-code-push';

export class CodePushComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    codePushStatusDidChange(syncStatus) {
        switch (syncStatus) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                this.setState({ syncMessage: "Checking for update." });
                break;
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                this.setState({ syncMessage: "Downloading package." });
                break;
            case CodePush.SyncStatus.AWAITING_USER_ACTION:
                this.setState({ syncMessage: "Awaiting user action." });
                break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
                this.setState({ syncMessage: "Installing update." });
                break;
            case CodePush.SyncStatus.UP_TO_DATE:
                this.setState({ syncMessage: "App up to date.", progress: false });
                break;
            case CodePush.SyncStatus.UPDATE_IGNORED:
                this.setState({ syncMessage: "Update cancelled by user.", progress: false });
                break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
                this.setState({ syncMessage: "Update installed and will be applied on restart.", progress: false });
                break;
            case CodePush.SyncStatus.UNKNOWN_ERROR:
                this.setState({ syncMessage: "An unknown error occurred.", progress: false });
                break;
        }
    }

    sync = () => {
        CodePush.sync(
            { updateDialog: true },
            this.codePushStatusDidChange.bind(this),
            this.codePushDownloadDidProgress.bind(this)
        );
    }

    codePushDownloadDidProgress(progress) {
        this.setState({ progress });
    }

    render() {

        let progressView;
        if (this.state.progress) {
            progressView = (
                <Text style={styles.status}>{this.state.progress.receivedBytes} of {this.state.progress.totalBytes} bytes received</Text>
            );
        }

        return (
            <View style={styles.infoView}>
                <View style={{ flex: 1 }} />
                <Text style={styles.message}>{this.state.syncMessage || ""}</Text>
                {progressView}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    infoView: {
        height: 60,
        alignSelf: "center"
    },
    message: {
        color: "white",
        fontSize: 17,
    },
    status: {
        color: "white",
        fontSize: 14,
    }
});