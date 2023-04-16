import { MenuItem } from '../models/menu.model';

export class FrontMenu {
  public static pages: MenuItem[] = [
    {
      group: 'Home',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '',
          children: [{ label: 'Who are we?', route: '/who' }, { label: 'FAQ', route: '/faq' }],
        },
      ],
    },
    {
      group: 'Spaces',
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
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
        
      ],
    },
  ];
}
