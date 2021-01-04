import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//Link es para hacer un redireccionamiento sin hacer refresh (de forma client-routing), navlink para links de header.
//Switch para hacer un seguimiento de las rutas en cola y si no se pueden cumplir, se pasa a la ruta default (esto se usa para paginas no encontradas 404)
import BudgetDashboardPage from '../components/BudgetDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import HelpBudgetPage from '../components/HelpBudgetPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route path="/" component={BudgetDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpBudgetPage}/>
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
