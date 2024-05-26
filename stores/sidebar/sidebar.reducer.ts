import { Reducer } from 'redux';
import { SidebarActionTypes } from '@stores/sidebar/sidebar.enum.ts'; 

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
    isOpen: false,
};

const sidebarReducer: Reducer<SidebarState> = (state = initialState, action) => {
  switch (action.type) {
    case SidebarActionTypes.FULL:
      return {
        isOpen: true,
      };
    case SidebarActionTypes.MINI:
      return {
        isOpen: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;