import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
    },
  },
  app: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#061d26',
  },
});
