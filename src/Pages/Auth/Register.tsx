import React from 'react'
import useWindowTitle from '../../hooks/useWindowTitle';
import { companyName } from '../../ts/companyInfo';

type Props = {}

const Register = (props: Props) => {
  useWindowTitle(`Welcome to ${companyName}.com where we have unbeatable house plans`);
  return (
    <div>Register</div>
  )
}

export default Register