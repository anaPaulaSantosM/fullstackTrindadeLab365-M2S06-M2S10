import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <div className="header container">
               
               <Link to={'/'}> 
                <img className="logo " src="/images/Logook.png" alt="DrPapel-logo"/>
                </Link> 
                

            <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
    
    
            <div className="navbar row " id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-center" >
                            <li className="nav-item col-2">
                                <Link to={'/produtos'} className="nav-link" >Produtos</Link>
                            </li>
                            <li className="nav-item col-2">
                                <Link to={'/contato'} className="nav-link">Contato</Link>
                            </li>

                            <li className="nav-item col-2">
                                <Link to={'/FAQ'} className="nav-link">FAQ</Link>
                            </li>
                           
                        </ul>
    
                    </div>
        
            </nav>
    
        </div>
        )
    }





        
export default Header;