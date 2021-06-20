import React from 'react';
import { Layout } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const ScreenWrapper: React.FC = ({children}) => (
    <Layout style={styles.wrapper}>
        {children}
    </Layout>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default ScreenWrapper;