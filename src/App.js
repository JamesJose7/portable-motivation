import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';

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
  const [quotesQueue, setQuotesQueue] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    if (quotesQueue.length < 5) fillQuoteQueue();
    console.log(quotesQueue);
  }, [quotesQueue]);

  const handleNextQuote = () => {
    const quotesCopy = [...quotesQueue];
    quotesCopy.shift();
    setQuotesQueue(quotesCopy);
  };

  const fillQuoteQueue = () => {
    getMotivationQuote().then((result) => {
      const { affirmation } = result.data;
      setQuotesQueue((prevState) => {
        const tempSet = new Set(prevState);
        tempSet.add(affirmation);
        return Array.from(tempSet);
        // [...prevState, affirmation];
      });
    });
  };

  return (
    <Box className={classes.root} onClick={handleNextQuote}>
      <Container className={classes.contentContainer}>
        <Typography>{quotesQueue[0]}</Typography>
      </Container>
    </Box>
  );
};

export default App;
