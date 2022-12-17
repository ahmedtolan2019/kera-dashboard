export interface MainSidebarNavItemType {
  startIcon: React.ReactElement;
  badgeElement?: React.ReactElement | null;
  title: string;
  to: string;
  end?: boolean;
}
