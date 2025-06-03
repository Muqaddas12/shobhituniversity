import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

const MapWebView = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Shobhit University Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          #map {
            height: 100%;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <iframe
          id="map"
          frameborder="0"
          src="https://maps.google.com/maps?q=Shobhit%20University%20Gangoh&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowfullscreen
        ></iframe>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 16,
    elevation: 3,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});

export default MapWebView;
