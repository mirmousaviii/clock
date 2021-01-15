import React from 'react';
import SimpleClock from '../components/SimpleClock';
import DefaultLayout from '../layouts/default-layout';

function Home() {

  return (
      <DefaultLayout>
        <SimpleClock/>
      </DefaultLayout>
  );
}

export default Home;