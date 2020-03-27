import React from 'react'; 
import {  BrowserRouter, Route, Switch } from 'react-router-dom';
import ProviderList from './Pages/ProviderList';
import SearchResult from './Components/SearchResult';
import Search from './Components/Search';
import Profile from './Components/Profile';
import SearchOnMap from './Pages/SearchOnMap';
import Login from './Components/Login'
import Signup from './Components/Signup'
import AddProviderListing from './Components/AddProviderListing'
import About from './Pages/About' 
import Contact from './Pages/ContactUs' 


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = { Search } />
                <Route exact path = "/profile" component = { Profile } />
                <Route path = "/search" component = { Search } />
                <Route path = "/search_result" component = { SearchResult } />
                <Route path = "/search_on_map" component = { SearchOnMap } />
                <Route path = "/login" component = { Login } />
                <Route path = "/signup" component = { Signup } />
                <Route path = "/add_provider_listing" component = { AddProviderListing } />
                <Route path = "/About" component = { About } />
                <Route path = "/Contact" component = { Contact } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;