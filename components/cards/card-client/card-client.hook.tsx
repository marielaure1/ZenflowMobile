// import React, {useContext} from 'react';
import StatusEnum from '@enums/status.enum';
import { useNavigation } from '@react-navigation/native';

export default function useCardClient() {
    // const { setIsAuthenticated } = useContext(AuthContext);

    const navigation = useNavigation();

    const statusList = [
        {
          status: StatusEnum.ACTIVE,
          text: 'Actif',
          foreground: '#35BFFF',
          background: '#E5F7FF'
        },
        {
          status: StatusEnum.INACTIVE,
          text: 'Inactif',
          foreground: '#FF6666',
          background: '#FFE5E5'
        },
        {
          status: StatusEnum.PENDING,
          text: 'En attente',
          foreground: '#FFC045',
          background: '#FFF0D5'
        },
        {
          status: StatusEnum.SUSPENDED,
          text: 'Suspendu',
          foreground: '#545454',
          background: '#DEDEDE'
        },
        {
          status: StatusEnum.LOST,
          text: 'Perdu',
          foreground: '#FF6666',
          background: '#FFE5E5'
        },
        {
          status: StatusEnum.CALL_AGAIN,
          text: 'A recontacter',
          foreground: '#FFC045',
          background: '#FFF0D5'
        }
    ];
    
    return {navigation, statusList}
};