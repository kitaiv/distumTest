import React from 'react'
import classnames from 'classnames'

import logo1 from '../../assets/images/png/logo1.png'
import logoBlue from '../../assets/images/png/logo-blue.png'
import search from '../../assets/images/png/search.png'
import enter from '../../assets/images/png/enter.png'

import './Main.css'
import './index.css'
import './fonts.css'
import './Header.css'


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          active: false,
          activeSearch: false
        }

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);

    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({
                activeSearch: false
            })
        }
    }
      

    updateBodyStyles() {
        if (this.state.active) {
            document.body.style.overflowY = "visible";
        } else {
            document.body.style.overflowY = "hidden";
        }
    }

    toggleMenu(){

        let init = (this.state.active === true) ? false : true
        let initV = (this.state.visibility === 'visible') ? 'hidden' : 'visible'
        this.setState({
            active: init,
            visibility: initV
        })

        this.updateBodyStyles()

    }

    toggleSearch(){
        let initS = (this.state.activeSearch === true) ? false : true

        this.setState({
            activeSearch: initS
        })

    }

    render(){ 
        
        let stylesMenu = {}

        if( this.state.active ){
            stylesMenu.visibility = this.state.visibility
        }

        return(
            <header className="header-blue">
                <div className="container">
                    <span className="addVectorHEAD"></span>
                    <div className="logo"><a href="/"><img src={logo1} alt="Лого" /></a></div>
                    <div className="logo-blue"><a href="/"><img src={logoBlue} alt="Лого" /></a></div>

                    <nav className="menu" style={stylesMenu}>
                        <ul className={classnames({"active": this.state.active})}>
                            <li className="menu__links"><a href="#">Учителям</a></li>
                            <li className="menu__links"><a href="#">Родителям</a></li>
                            <li className="menu__links"><a href="#">Ученикам</a></li>
                            <li className="menu__links"><a href="#">О проекте</a></li>
                            <li className="menu__links"><a href="#">Поддержка</a></li>
                        </ul>
                    </nav>

                    <form ref={this.wrapperRef} className={classnames("search-form", {"active": this.state.activeSearch})}>
                        <input type="search" className="search-form__input" placeholder="Что хотите найти?" />
                        <button className="search-form__button"><img src={search} alt="search" /></button>
                    </form>

                    <button className="btn-search-open" onClick={ this.toggleSearch}></button>

                    <a href="#" className="btn btn-user"><img src={enter} alt="enter" /> Войти</a>

                    <div className={classnames("toggle-menu", {"active": this.state.active})} onClick={ this.toggleMenu }>
                        <button className="btn-menu"></button>
                    </div>

                </div>
            </header>
        )
    }

}

export default Header;