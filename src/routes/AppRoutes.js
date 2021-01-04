import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home.js';
import Portfolio from '../components/Portfolio.js';
import PortfolioItem from '../components/PortfolioItem.js';
import Contact from '../components/Contact.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Header from '../components/Header.js';


const AppRoutes = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItem}/>
        <Route path="/contact" component={Contact}/>
        
        <Route component={NotFoundPage} />
    </Switch>
    </div>
</BrowserRouter>
    
)
export default AppRoutes;