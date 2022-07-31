import { Helmet } from 'react-helmet-async';
import SignUpComponent from '@components/organisms/SignUp';

const SignUp = () => (
  <>
    <Helmet title="Sign Up" />
    <SignUpComponent />
  </>
);

export default SignUp;
