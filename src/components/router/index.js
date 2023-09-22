import ListTender from '../views/ListTender'
import DashboardReport from '../views/DashboardReport';

const routes = [
    {
        path: '/',
        component: DashboardReport
    },
    {
        path: '/list-tender',
        component: ListTender
    },
]

export default routes