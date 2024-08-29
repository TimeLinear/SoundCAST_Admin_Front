export interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
    selectedMenu: string;
    onMenuSelect: (menu: string) => void;
}