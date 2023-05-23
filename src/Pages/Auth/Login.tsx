import React from 'react'
import useWindowTitle from '../../hooks/useWindowTitle';
import { companyName } from '../../ts/companyInfo';

const Login = () => {
  useWindowTitle(`Register | ${companyName}.com`);
  return (
    <div>Login</div>
  )
}

export default Login