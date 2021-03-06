import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import logo from '../../photos/logo_small.jpg'
import SideDrawer from './sideDrawer'
export default class Header extends Component {
    state = {
        drawerOpen: false
    }
    toggleDrawer = (value) =>{
        this.setState({
            drawerOpen: value,
            headerShow: false
        })
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () =>{
       if(window.scrollY > 0){
           this.setState({
               headerShow:true
           })
       }else{
           this.setState({
               headerShow:false
           })
       }
    }
    render() {
        return (
         <AppBar
            position = "fixed"
            style={{
                backgroundColor: this.state.headerShow? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0px'
            }}
         >
            <Toolbar>
                <div className = "header_logo">
                    <img src = {logo} className = "header_logo-img"/>
                    <div>
                        <div className = "header_logo_venue">Little Star Records</div>
                        <div className = "header_logo_title">Advancing the art of sound</div>
                    </div>
                </div>
                <IconButton
                    aria-label = "Menu"
                    color = "inherit"
                    onClick = {() =>this.toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer
                    open = {this.state.drawerOpen}
                    onClose = {(value) =>this.toggleDrawer(value)}
                />
            </Toolbar>
         </AppBar>
        )
    }
}
