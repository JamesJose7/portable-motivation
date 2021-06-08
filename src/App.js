import React, { useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';

import { getMotivationQuote } from './api/motivationService';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#8fab43',
    height: '100vh',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    getMotivationQuote().then((result) => {
      const { affirmation } = result.data;
      console.log(affirmation);
    });
  }, []);

  return (
    <Box className={classes.root}>
      <Container className={classes.contentContainer}>
        <div>test</div>
      </Container>
    </Box>
  );
};

export default App;
