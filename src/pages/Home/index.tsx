import { Button } from '@alifd/next';
import { useHistory } from 'ice';
import * as React from 'react';

export const Home = () => {
  const history = useHistory();

  return (
    <Button onClick={() => history.push('/1/lazy')}>jump</Button>
  );
};
