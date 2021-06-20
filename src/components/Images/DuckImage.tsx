import React from 'react';
import { StyleSheet } from 'react-native';
import Duck from '../../../assets/duck.svg';

const DuckImage: React.FC = (props) => <Duck style={styles.image} {...props}/>;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginVertical: 50,
    },
});

export default DuckImage;