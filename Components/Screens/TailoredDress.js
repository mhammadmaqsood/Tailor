import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class TailoredDress extends Component {
    render() {
        return <WebView source={{ uri: 'https://abbigliamentosumisura.mastertailorstudio.com/design/suit/' }} />;
    }
}
