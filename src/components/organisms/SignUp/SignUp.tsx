import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Alert, Button, TextField } from '@mui/material';

import { signUp } from '@api/auth';
import errorMessage from '@utils/errorMessages';

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      submit: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .max(255)
        .required('Required'),
      confirmPassword: Yup.string().when('password', {
        is: (val: any) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Both password need to be the same',
        ),
      }),
    }),
    onSubmit: async (values, { setErrors, setStatus, setSubmitting }) => {
      try {
        await signUp(values.email, values.password);
        navigate('/auth/sign-in');
      } catch (error: unknown) {
        setStatus({ success: false });
        setErrors({ submit: errorMessage(error) });
        setSubmitting(false);
      }
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      {formik.errors.submit && (
        <Alert sx={{ mt: 2, mb: 3 }} severity="error">
          {formik.errors.submit}
        </Alert>
      )}
      <TextField
        type="email"
        name="email"
        label="Email address"
        value={formik.values.email}
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        sx={{ my: 1 }}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        error={Boolean(formik.touched.password && formik.errors.password)}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        sx={{ my: 1 }}
      />
      <TextField
        type="password"
        name="confirmPassword"
        label="Confirm password"
        value={formik.values.confirmPassword}
        error={Boolean(
          formik.touched.confirmPassword && formik.errors.confirmPassword,
        )}
        fullWidth
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        sx={{ my: 1 }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={formik.isSubmitting}
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignUp;
