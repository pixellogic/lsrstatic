import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/core/Menu'
import Iconbuttton from '@material-ui/core/IconButton'
import logo from '../../photos/logo_small.jpg'
export default class Header extends Component {
    render() {
        return (
         <AppBar
            position = "fixed"
            style={{
                backgroundColor:'#2f2f2f',
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
            </Toolbar>
         </AppBar>
        )
    }
}
