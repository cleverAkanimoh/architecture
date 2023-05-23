import React from 'react'
import useWindowTitle from '../../hooks/useWindowTitle';
import { companyName } from '../../ts/companyInfo';

type Props = {}

const Login = (props: Props) => {
  useWindowTitle(`Welcome to ${companyName}.com where we have unbeatable house plans`);
  return (
    <div>Login</div>
  )
}

export default Login