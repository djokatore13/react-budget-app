import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component(HOC) - component that render another component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info!Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (<WrappedComponent {...props}/>) : (<p>Please login to view info!</p>)}    
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the infos!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="This are the infos!" />, document.getElementById('app'));


