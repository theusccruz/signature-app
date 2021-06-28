import React, { useRef } from 'react'
import { StyleSheet } from 'react-native'
import Signaturepad from 'react-signature-canvas'


const SignatureWeb: React.FC = () => {

  const sigCanvas = useRef<Signaturepad>(null)
  const clear = () => {
    sigCanvas.current?.clear()
  }

  const save = () =>
    console.log(sigCanvas.current?.getTrimmedCanvas().toDataURL("image/png", 1));

  return (
    <div>
      <h1>Signature example</h1>
      <Signaturepad
        ref={sigCanvas}
        canvasProps={styles.container}

      />
      <button onClick={clear}>CLEAR</button>
      <button onClick={save}>SAVE</button>

    </div>
  )

}

export default SignatureWeb


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
  }
})