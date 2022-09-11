//Layout
import LayoutBasic from '../layouts/LayoutBasic.js'

// Pages
import Home from '../pages/Home';


const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
        exact: true,
    }

]

export default routes;