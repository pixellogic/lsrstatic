import React, { Component } from 'react'
import {Route, Switch,} from 'react-router-dom'
import Layout from './hoc/Layout'

export default class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                   
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" exact component = {PageAbout} />
                </Switch>
            </Layout>
        )
    }
}
