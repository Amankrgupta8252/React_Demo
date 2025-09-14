import React, { Component, Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));

export default class LazyLoading extends Component {
  render() {
    return (
      <div>
        <h2>Aman Gupta</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </div>
    );
  }
}
