import React from 'react';
import { PortableText as SanityPortableText } from '@portabletext/react';
import components from './components';
import componentsBox from './components-box';

type Props = {
  value: any;
  variant?: 'default' | 'box';
};

const PortableText: React.FC<Props> = ({ value, variant = 'default' }) => {
  const selectedComponents = variant === 'box' ? componentsBox : components;
  
  return <SanityPortableText value={value} components={selectedComponents} />;
};

export default PortableText;