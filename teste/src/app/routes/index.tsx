import { Route, BrowserRouter, Routes as Switch } from "react-router-dom"
import { Dashboard, Login } from "../pages"

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/pagina-inicial" Component={Dashboard} />
                <Route path="/entrar" Component={Login} />


                <Route path="*" element={<Dashboard />} />
                
            </Switch>
        </BrowserRouter>
    )
}