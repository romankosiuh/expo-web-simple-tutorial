import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import ScreenWrapper from '../components/ScreenWrapper';
import { StyleSheet } from 'react-native';

const InfoScreen = () => (
    <ScreenWrapper>
        <Text category='h1'>Rubber Duck Debugging</Text>
        <Layout style={styles.textWrapper}>
            <Text category="p1">
                Explain to the duck what your code is supposed to do,
                and then go into detail and explain your code line by line.
                At some point you will tell the duck what you are doing next and
                then realise that that is not in fact what you are actually doing.
                The duck will sit there serenely, happy in the knowledge that it has helped
                you on your way.
            </Text>
        </Layout>
    </ScreenWrapper>
);

const styles = StyleSheet.create({
    textWrapper: {
        maxWidth: 500,
    },
});

export default InfoScreen;