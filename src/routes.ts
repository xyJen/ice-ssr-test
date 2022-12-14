import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import { Home } from '@/pages/Home';
import { LazyContainer } from './pages/LazyContainer';
import Dashboard from '@/pages/Dashboard';

// const Dashboard = lazy(() => import('@/pages/Dashboard'), true);
console.log('Dashboard: ', Dashboard);
const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/:id',
        component: LazyContainer,
        children: [
          {
            path: '/lazy',
            component: Dashboard,
          },
        ],
      },
    ],
  },
];
export default routerConfig;
