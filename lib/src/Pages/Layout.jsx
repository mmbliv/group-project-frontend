import React from 'react';
import './Layout.css'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return ( 
        <div className="layout--container">
            <p>Layout Test</p>
            <div className="layout--content">
                <Outlet />
            </div>
        </div>
     );
}
