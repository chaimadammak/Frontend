import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Statistics',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '',
          children: [{ label: 'Stats', route: '/dashboard/stats' }],
        },
      ],
    },
    {
      group: 'Admin Actions',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Users',
          route: '/users',
        },
        {
          icon: 'assets/icons/outline/forum.svg',
          label: 'Forum',
          route: '/forum',
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
