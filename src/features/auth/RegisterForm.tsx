import React from 'react';
import { Field } from '../../shared/components/Field';
import { Button } from '../../shared/components/Button';
import { useForm } from 'react-hook-form';
import { IRegistration } from './interfaces/registration.interface';
import { registration } from './auth.slice';
import { useAppDispatch } from '../../store';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<IRegistration>();

  const onSubmit = (data: IRegistration) => {
    dispatch(registration(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <Field label="Login" {...register('login', { required: 'Login is required' })} />
      <Field
        label="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
      />
      <Field
        label="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
      />
      <Button
        onClick={() => {
          console.log('sign up clicked');
        }}
      >
        Sign up
      </Button>
    </form>
  );
};
