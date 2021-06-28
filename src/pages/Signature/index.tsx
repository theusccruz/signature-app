import React, { useRef, forwardRef } from 'react';
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas';
import { View } from 'react-native';

import SignScreen from '../../components/SignScreen';

const Signature: React.FC = () => {
  const signRef = useRef<SignatureViewRef>(null);

  return (
    <SignScreen
      ref={signRef}
      onOK={() => { }}
      text=""
      onEnding={() => signRef.current?.readSignature()}
    />
  );
}

export default Signature;