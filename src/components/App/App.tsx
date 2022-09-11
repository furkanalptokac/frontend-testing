import React from 'react';
import { useStyles } from './App.styles';

import { Form } from '../Form';
import { defaultValuesType } from '@/types';

const App: React.FC = () => {
  const classes = useStyles();

  const onSubmit = (data: defaultValuesType) => {
    console.log('Form data: ', data);
  };

  return (
    <div className={classes.app}>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default App;
