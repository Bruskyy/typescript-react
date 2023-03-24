import { Route, BrowserRouter, Routes as Switch } from "react-router-dom"
import { Dashboard } from "../pages"

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/pagina-inicial" Component={Dashboard} />

                <Route path="*" element={<Dashboard />} />
                
            </Switch>
        </BrowserRouter>
    )
}