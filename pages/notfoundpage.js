import React from 'react';
import Header from "./components/Header/header"

//Link es para hacer un redireccionamiento sin hacer refresh (de forma client-routing), navlink para links de header.
const notfound = () => (//Link es para hacer un redireccionamiento sin hacer refresh (de forma client-routing)
    <div>
        <Header/>
        Page not found
    </div>
)
export default notfound;