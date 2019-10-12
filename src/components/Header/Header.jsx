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
        const header = document.getElementById('Search__home').getBoundingClientRect().top;
        var windowY = window.pageYOffset;
        var visible = this.state.visible; 

        if(header > 300){
            visible = true;
        }if(header < 300){
            visible = false;
        }

        this.setState({
            visible
        });

        console.log(windowY, header, visible);
    }

    componentDidMount(){
       window.addEventListener("scroll", this.onHandleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.onHandleScroll);
    }

    menuResponsive = () => {
        this.setState({
            responsive: !this.state.responsive,
        })
        console.log(this.state.responsive);
    }

    render(){
        return(
            <header className={this.state.visible ? 'Header' : 'Header Header-vis'} id="main-header">
                <div className="Header__logo">
                    <Logo />
                </div>
                <nav onClick={ () => this.menuResponsive() } className={!this.state.responsive ? "Header__nav Header__nav-resp" : "Header__nav"}>
                    <Link to="/" className="Header__nav__item"> <div>Emprendimientos </div> </Link>
                    <Link to="/" className="Header__nav__item"> <div>Servicios </div></Link>
                    <Link to="/" className="Header__nav__item"> <div>Eventos </div></Link>
                    <Link to="/" className="Header__nav__item"> <div>Soy Emprendedor </div></Link>
                </nav>

                <div className="Header__burger">
                    <FontAwesomeIcon icon={faBars} />
                </div>
        </header>
        )
    }
}