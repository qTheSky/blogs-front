import React from 'react';
import { useAppDispatch } from '../../store';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/components/Button';
import { Field } from '../../shared/components/Field';
import { login } from './auth.slice';
import { ILogin } from './interfaces/login.interface';

export const AuthPage = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<ILogin>();

  const onSubmit = (data: ILogin) => {
    dispatch(login(data));
  };

  return (
    <div>
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
      </form>
    </div>
  );
};
