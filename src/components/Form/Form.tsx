import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useStyles } from './Form.styles';

import { IForm } from '@/types';

const Form: React.FC<IForm> = ({ onSubmit }) => {
  const classes = useStyles();

  const defaultValues = {
    name: '',
    surname: '',
    password: '',
  };

  const { handleSubmit, control } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  return (
    <div className={classes.form}>
      <div className={classes.formField}>
        <Controller
          render={({ field }) => (
            <input
              data-testid='name'
              type='text'
              placeholder='Name'
              {...field}
            />
          )}
          control={control}
          name='name'
        />
      </div>
      <div className={classes.formField}>
        <Controller
          render={({ field }) => (
            <input
              data-testid='surname'
              type='text'
              placeholder='Surname'
              {...field}
            />
          )}
          control={control}
          name='surname'
        />
      </div>
      <div className={classes.formField}>
        <Controller
          render={({ field }) => (
            <input
              data-testid='password'
              type='password'
              placeholder='Password'
              {...field}
            />
          )}
          control={control}
          name='password'
        />
      </div>
      <div className={classes.formField}>
        <button data-testid='submit' onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
