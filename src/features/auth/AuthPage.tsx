import React from 'react';
import { useAppDispatch } from '../../store';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/components/Button';
import { IRegistration } from './interfaces/registration.interface';
import { Field } from '../../shared/components/Field';

export const AuthPage = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<IRegistration>();

  const onSubmit = (data: IRegistration) => {
    console.log(data);
    // dispatch(registerThunk(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[400px]">
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
    </div>
  );
};
