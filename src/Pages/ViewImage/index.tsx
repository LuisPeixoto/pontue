import React from 'react';

import {Dimensions, StyleSheet} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ViewImage: React.FunctionComponent = ({route}) => {
  const {url} = route.params;
  return (
    <ImageViewer
      style={styles.image}
      backgroundColor="#ccc"
      imageUrls={[{url}]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ViewImage;
