import React from 'react';
import { Platform } from 'react-native';

import Signature from './src/pages/Signature';
import SignatureWeb from './src/pages/SignatureWeb';

const App: React.FC = () => {
  return (
    <>
      {Platform.OS === 'web' ?
        <SignatureWeb /> :
        <Signature onOK={() => { }} text="" />
      }
    </>
  );
};

export default App;
