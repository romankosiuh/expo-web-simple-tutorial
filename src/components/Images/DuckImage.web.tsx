import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

const DuckImage: React.FC = (props) => <Image style={styles.image} {...props} source={require('../../../assets/duck.svg')} />;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginVertical: 50,
    },
});

export default DuckImage;