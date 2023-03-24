import { Route, BrowserRouter, Routes as Switch } from "react-router-dom"
import {Aplicacao } from "../pages"

export const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/pagina-inicial" Component={Aplicacao} />

                <Route path="*" element={<Aplicacao />} />
                
            </Switch>
        </BrowserRouter>
    )

}

