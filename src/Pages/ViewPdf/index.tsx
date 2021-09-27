import React from 'react';

import {WebView} from 'react-native-webview';
import Pdf from 'react-native-pdf';
import {Dimensions, StyleSheet} from 'react-native';

const ViewPdf: React.FunctionComponent = ({route}) => {
  const {url} = route.params;
  const source = {
    uri: url,
    cache: true,
  };
  return <Pdf source={source} style={styles.pdf} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ViewPdf;
