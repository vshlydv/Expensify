// Higher Order Componenet (HOC) - 

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is info: {props.info}</p>
    </div>
)

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAmin && <p>This is private info. Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login first!</p>}
        </div>
    )
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAmin = {false} info = "These are info details." />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info = "These are info details." />, document.getElementById("app"));