import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formField: {
    marginBottom: '8px',
  },
});
