import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
    return (
        <Suspense fallback={ <h1>Loading...</h1> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="logo" />  
                        <ul>
                            {
                                routes.map( route => (
                                        <li key={ route.to }>
                                            <NavLink 
                                                to={ route.to } 
                                                className={ ({isActive}) => 
                                                    isActive ? 'nav-active' : '' }>
                                                        { route.name }
                                            </NavLink>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            // Forma desestructurando las propiedades de el objeto route
                            routes.map( ({to, path, Component}) => {
                                return (
                                    <Route 
                                        key={ to } 
                                        path={ path } 
                                        element={ <Component /> }
                                    />
                                )
                            })
                        }
                        
                        <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}