import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface IProps {
    onPress: () => void;
}

export default function (props: IProps) {
    const {onPress} = props;
    return (<TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Ionicons name="chevron-back" size='30' color="#1c1b1f" />
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10,
    }
})