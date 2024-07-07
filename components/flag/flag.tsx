import React from 'react';
import { Text, View } from 'react-native';

interface FlagProps {
    text :string;
    colors : {background: string, foreground: string};
    onPress: () => void
}

const Header: React.FC<FlagProps> = ({text, colors, onPress}) => {

    return (
        <Text className='px-[10px]  py-[5px] rounded-xs font-[Poppins500] text-[12px] text-center' style={[{backgroundColor: colors?.background, color: colors?.foreground}]} onPress={() => onPress}> {text}</Text>
    );
};

export default Header;
