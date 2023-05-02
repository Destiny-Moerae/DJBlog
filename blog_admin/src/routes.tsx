import React from 'react';
import {
  IconGift,
  IconStorage,
  IconTags,
  IconQuestionCircle,
  IconUser,
} from '@arco-design/web-react/icon';

export const defaultRoute = 'welcome';

export const routes = [
  {
    name: 'menu.welcome',
    key: 'welcome',
    icon: <IconGift />,
    componentPath: 'welcome',
  },
  /* {
    name: 'menu.list',
    key: 'list',
    icon: <IconList />,
    children: [
      {
        name: 'menu.list.searchTable',
        key: 'list/search-table',
        componentPath: 'search-table',
      },
    ],
  }, */
  {
    name: 'menu.categories',
    key: 'categories',
    icon: <IconStorage />,
    componentPath: 'categories',
  },
  {
    name: 'menu.tags',
    key: 'tags',
    icon: <IconTags />,
    componentPath: 'tags',
  },
  {
    name: 'menu.about',
    key: 'about',
    icon: <IconQuestionCircle />,
    componentPath: 'about',
  },
  {
    name: 'menu.user',
    key: 'user',
    icon: <IconUser />,
    componentPath: 'user',
  },
];
