import React, { useRef } from 'react';
import SignatureScreen, {
  SignatureViewRef,
} from 'react-native-signature-canvas';
import { View, ViewRow } from './styles';
import ButtonNative from '../../components/ButtonNative';

interface Props {
  text: string;
  onOK: (signature: any) => void;
}

const Signature: React.FC<Props> = ({ onOK, text }) => {
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = (signature: any) => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = () => {
    ref.current?.clearSignature();
  };

  const handleConfirm = () => {
    console.log('end');
    ref.current?.readSignature();
  };

  return (
    <View>
      <SignatureScreen ref={ref} onOK={handleSignature} />
      <ViewRow>
        <ButtonNative onPress={() => handleClear()}>Limpar</ButtonNative>
        <ButtonNative onPress={() => handleConfirm()}>Confirmar</ButtonNative>
      </ViewRow>
    </View>
  );
};

export default Signature;
