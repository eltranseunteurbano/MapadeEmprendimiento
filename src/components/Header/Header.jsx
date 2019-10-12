import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../Logo/Logo';

import './Header.scss';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset,
            visible:true,
            responsive:false,
        }
    }

    onHandleScroll = () => {
        if(document.getElementById('Search__home')){
            const header = document.getElementById('Search__home').getBoundingClientRect().top;
            var visible = this.state.visible; 
    
            if(window.pageYOffset > 300){
                visible = true;
            }if(window.pageYOffset < 300){
                visible = false;
            }

            console.log(window.pageYOffset, visible)
    
            this.setState({
                visible
            });
        }
    }

    componentDidMount(){
       window.addEventListener("scroll", this.onHandleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.onHandleScroll);
    }

    menuResponsive = () => {
        this.setState({
            responsive: this.state.responsive,
        })
        console.log(this.state.responsive);
    }

    render(){
        return(
            <header className={!this.state.visible ? 'Header' : 'Header Header-vis'} id="main-header">
                <div className="Header__logo">
                    <Logo />
                </div>
                <nav className={this.state.responsive ? "Header__nav Header__nav-resp" : "Header__nav"}>
                    <Link to="/Emprendimientos" className="Header__nav__item"> <div>Emprendimientos </div> </Link>
                    <Link to="/Emprendimientos" className="Header__nav__item"> <div>Servicios </div></Link>
                    <Link to="/" className="Header__nav__item"> <div>Eventos </div></Link>
                    <Link to="/" className="Header__nav__item"> <div>Soy Emprendedor </div></Link>
                </nav>

                <div onClick={this.menuResponsive}  className="Header__burger">
                    <FontAwesomeIcon icon={faBars} />
                </div>
        </header>
        )
    }
}