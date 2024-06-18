// import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function useCardProspect() {
    // const { setIsAuthenticated } = useContext(AuthContext);

    const navigation = useNavigation();

    
    return {navigation}
};

