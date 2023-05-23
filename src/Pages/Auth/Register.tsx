import useWindowTitle from '../../hooks/useWindowTitle';
import { companyName } from '../../ts/companyInfo';

const Register = () => {
  useWindowTitle(`Register | ${companyName}.com`);
  return (
    <div>Register</div>
  )
}

export default Register