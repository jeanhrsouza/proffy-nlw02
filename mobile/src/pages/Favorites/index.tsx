import React from 'react';
import { View } from 'react-native';


import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favories() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />
        </View>
    );
}

export default Favories;