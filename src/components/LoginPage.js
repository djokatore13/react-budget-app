import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authAction';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Budget App</h1>
      <p className="box-layout__text">Control your expenses more easily than ever!</p>
      <button className="button" onClick={startLogin}>Login with Google!</button>
    </div>
  </div>
);


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()) 
});

export default connect(undefined, mapDispatchToProps)(LoginPage);