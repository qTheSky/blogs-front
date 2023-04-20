import React from 'react';
import { Field } from '../../../shared/components/Field';
import { Button } from '../../../shared/components/Button';
import { useAppDispatch } from '../../../store';
import { useForm } from 'react-hook-form';
import { ILogin } from '../interfaces/login.interface';
import { login } from '../auth.slice';
import { RedirectLink } from '../../../shared/components/Link';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<ILogin>();

  const onSubmit = (data: ILogin) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <Field
        label="Email or Username"
        {...register('loginOrEmail', { required: 'Login is required' })}
      />
      <Field
        label="Password"
        {...register('password', { required: 'Login is required' })}
      />
      <Button
        onClick={() => {
          console.log('sign up clicked');
        }}
      >
        Sign In
      </Button>
      <h2>Don&apos;t have an account?</h2>
      <RedirectLink to="/auth/register">
        <span>Sign Up</span>
      </RedirectLink>
    </form>
  );
};
