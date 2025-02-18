import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//import awsExports from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <h1>Hello</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
