// HIGHER Order Component
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const widthAdminWarning = (WrappedComponent) => {
    return (props)=>(
        <div>
            {props.isAdmin && <p>Admin Warning prvate info please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuntheticantion = (WrappedComponent) => {
    return (props)=>(
        <div>
            {props.isAuth ? (
            <WrappedComponent {...props}/>
            ):(
                <p>please log in</p>
            )}
        </div>
    );
};

//requireAuthentication

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuntheticantion(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="details"/>, document.getElementById('app'));