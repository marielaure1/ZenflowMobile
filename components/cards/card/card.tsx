import React from 'react';
import { View } from 'react-native';
import useStyles from '@components/cards/card/card.styles';

const Card = ({ children, style = [] }) => {
    const styles = useStyles();
    return (
        <View style={[styles.container, styles.marginBottom, ...style]}>
            {children}
        </View>
    );
};

export default Card;
