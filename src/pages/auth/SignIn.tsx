import { Helmet } from 'react-helmet-async';
import SignInComponent from '@components/organisms/SignIn/SignIn';

function SignIn() {
  return (
    <>
      <Helmet title="Sign In" />
      <SignInComponent />
    </>
  );
}

export default SignIn;
