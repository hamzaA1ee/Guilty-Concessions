'use client';

// React Imports
import { FC, Fragment } from 'react';

// React Query Imports
import { UserLoginMutationHook } from '@/services/react-query-client/auth/user-login';

interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  const { mutateAsync } = UserLoginMutationHook();

  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */

  return <Fragment></Fragment>;
};

export default SignInView;
