import { SidebarActionTypes } from '@stores/sidebar/sidebar.enum';

export type SidebarAction = {
    type: SidebarActionTypes;
};

export const full = (): SidebarAction => ({
    type: SidebarActionTypes.FULL,
});

export const mini = (): SidebarAction => ({
    type: SidebarActionTypes.MINI,
});