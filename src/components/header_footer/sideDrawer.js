import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
export default function SideDrawer(props) {
    return (
        <Drawer
            anchor = "right"
            open ={props.open}
            onClose = {() => props.onClose(false)}
        >
            <List
                component = "nav"
            >
                <ListItem button  onClick = {() =>console.log('featured')}>
                    home
                </ListItem>
                <ListItem button  onClick = {() =>console.log('about')}>
                    about
                </ListItem>
                <ListItem button  onClick = {() =>console.log('services')}>
                    services
                </ListItem>
                <ListItem button  onClick = {() =>console.log('services')}>
                    location
                </ListItem>




            </List>
        </Drawer>
    )
}
