import DashboardLayout from '@/pages/Layout/DashboardLayout';
import AuthLayout from '@/pages/Pages/AuthLayout';
// GeneralViews
import NotFound from '@/pages/GeneralViews/NotFoundPage';

// Calendar
const Calendar = () =>
  import(/* webpackChunkName: "extra" */ '@/pages/Calendar/CalendarRoute');
// Charts
const Charts = () =>
  import(/* webpackChunkName: "dashboard" */ '@/pages/Charts');

// Components pages
const Buttons = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/Buttons');
const GridSystem = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/GridSystem');
const Panels = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/Panels');
const SweetAlert = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/SweetAlert');
const Notifications = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/Notifications');
const Icons = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/Icons');
const Typography = () =>
  import(/* webpackChunkName: "components" */ '@/pages/Components/Typography');

// Dashboard pages
const Dashboard = () =>
  import(/* webpackChunkName: "dashboard" */ '@/pages/Dashboard/Dashboard');
import Widgets from '@/pages/Widgets';

// Forms pages
const RegularForms = () => import('@/pages/Forms/RegularForms');
const ExtendedForms = () => import('@/pages/Forms/ExtendedForms');
const ValidationForms = () => import('@/pages/Forms/ValidationForms');
const Wizard = () => import('@/pages/Forms/Wizard');

// Maps pages
const GoogleMaps = () =>
  import(/* webpackChunkName: "extra" */ '@/pages/Maps/GoogleMaps');
const FullScreenMap = () =>
  import(/* webpackChunkName: "extra" */ '@/pages/Maps/FullScreenMap');
const VectorMaps = () =>
  import(/* webpackChunkName: "extra" */ '@/pages/Maps/VectorMaps');

// Pages
const User = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/UserProfile');
const Pricing = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/Pricing');
const TimeLine = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/TimeLinePage');
const Login = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/Login');
const Register = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/Register');
const RTL = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/RTLPage');
const Lock = () =>
  import(/* webpackChunkName: "pages" */ '@/pages/Pages/Lock');

// TableList pages
const RegularTables = () =>
  import(/* webpackChunkName: "tables" */ '@/pages/Tables/RegularTables');
const ExtendedTables = () =>
  import(/* webpackChunkName: "tables" */ '@/pages/Tables/ExtendedTables');
const PaginatedTables = () =>
  import(/* webpackChunkName: "tables" */ '@/pages/Tables/PaginatedTables');
let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  name: 'Components',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      components: { default: Buttons }
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      components: { default: GridSystem }
    },
    {
      path: 'panels',
      name: 'Panels',
      components: { default: Panels }
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      components: { default: SweetAlert }
    },
    {
      path: 'notifications',
      name: 'Notifications',
      components: { default: Notifications }
    },
    {
      path: 'icons',
      name: 'Icons',
      components: { default: Icons }
    },
    {
      path: 'typography',
      name: 'Typography',
      components: { default: Typography }
    }
  ]
};
let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  name: 'Forms',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      components: { default: RegularForms }
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      components: { default: ExtendedForms }
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      components: { default: ValidationForms }
    },
    {
      path: 'wizard',
      name: 'Wizard',
      components: { default: Wizard }
    }
  ]
};

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  name: 'Tables',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      components: { default: RegularTables }
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      components: { default: ExtendedTables }
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      components: { default: PaginatedTables }
    }
  ]
};

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  name: 'Maps',
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      components: { default: GoogleMaps }
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      meta: {
        hideContent: true,
        hideFooter: true
      },
      components: { default: FullScreenMap }
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      components: { default: VectorMaps }
    }
  ]
};

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  name: 'Pages',
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      components: { default: User }
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      components: { default: TimeLine }
    },
    {
      path: 'rtl',
      name: 'RTL Page',
      components: { default: RTL }
    }
  ]
};

let authPages = {
  path: '/',
  component: AuthLayout,
  name: 'Authentication',
  children: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/lock',
      name: 'Lock',
      component: Lock
    }
  ]
};

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home'
  },
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages,
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard layout',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        components: { default: Dashboard }
      },
      {
        path: 'calendar',
        name: 'Calendar',
        components: { default: Calendar }
      },
      {
        path: 'charts',
        name: 'Charts',
        components: { default: Charts }
      },
      {
        path: 'widgets',
        name: 'Widgets',
        components: { default: Widgets }
      }
    ]
  },
  { path: '*', component: NotFound }
];

export default routes;
