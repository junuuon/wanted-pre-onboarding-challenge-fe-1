import { Helmet } from 'react-helmet-async';
import SignInComponent from '@components/organisms/SignIn';

const SignIn = () => (
  <>
    <Helmet title="Sign In" />
    <SignInComponent />
  </>
);

export default SignIn;
