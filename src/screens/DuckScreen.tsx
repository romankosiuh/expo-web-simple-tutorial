import React from 'react'
import { Text } from '@ui-kitten/components';
import DuckImage from '../components/Images/DuckImage';
import ScreenWrapper from '../components/ScreenWrapper';

const DuckScreen = () => (
    <ScreenWrapper>
        <Text category="h1">Talk to me</Text>
        <DuckImage/>
    </ScreenWrapper>
);

export default DuckScreen;