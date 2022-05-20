import useRoutes from "../routes/MainRoutes"
import { BrowserRouter as Router } from "react-router-dom"

export const App = () => {

    const routes = useRoutes()
   
    return (
        <Router>
            {routes}
        </Router>
    )
}