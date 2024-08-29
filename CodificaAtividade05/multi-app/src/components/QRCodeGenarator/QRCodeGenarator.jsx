import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Container from './Container';
import Title from './Title';
import Input from './Input';
import QRCodeContainer from './QRCodeContainer';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Title>QR Code Generator</Title>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encode"
      />
      {text && (
        <QRCodeContainer>
          <QRCode value={text} size={256} />
        </QRCodeContainer>
      )}
    </Container>
  );
};

export default QRCodeGenerator;
