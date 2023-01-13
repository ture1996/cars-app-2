import React from "react"
import { Route, Redirect } from "react-router-dom"

export const GuardedRoute = ({ component: Component, ...rest }) => {
    const isAuth = !!window.localStorage.getItem("loginToken")
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )
}