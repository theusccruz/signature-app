import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas';
import { View } from 'react-native';

// import { Container } from './styles';

interface Props {
  text: string;
  onOK: (signature: any) => void;
  onEnding: () => void;
}

interface SignRef {
  readSignature: () => void;
  clearSignature: () => void;
}

const SignScreen: React.ForwardRefRenderFunction<SignRef, Props> = (
  { text, onOK, onEnding },
  ref
) => {
  const signScreenRef = useRef<any>(null);

  useImperativeHandle(
    ref,
    () => ({
      readSignature() {
        signScreenRef.current.readSignature();
      },
      clearSignature() {
        signScreenRef.current.clearSignature();
      },
    })
  );

  const handleSignature = (signature: any) => {
    console.log(signature);
    onOK(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  }

  const handleClear = () => {
    console.log('clear success!');
  }

  // const handleEnd = () => {
  //   signScreenRef.current?.readSignature();
  // }


  return (
    <SignatureScreen
      ref={signScreenRef}
      onEnd={onEnding}
      onOK={handleSignature}
      onEmpty={handleEmpty}
      onClear={handleClear}
      descriptionText={text}
    />
  );
}

export default forwardRef(SignScreen);