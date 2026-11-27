import React from 'react';
import { Widget } from '@typeform/embed-react';

type Props = {
  /** Typeform form ID, e.g. the `kLPH8WrD` in https://seqera.typeform.com/to/kLPH8WrD */
  formId: string;
  title: string;
  className?: string;
  /** CSS height of the embed (default: 80vh, min 560px). */
  height?: string;
};

// Inline Typeform embed. `transitive-search-params` forwards UTM params from the
// page URL into the form's hidden fields (if the form defines them).
const TypeformEmbed: React.FC<Props> = ({ formId, title, className, height = '80vh' }) => (
  <Widget
    id={formId}
    className={className}
    style={{ width: '100%', height, minHeight: 560 }}
    opacity={100}
    inlineOnMobile
    medium="summit-website"
    transitiveSearchParams={['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']}
    iframeProps={{ title }}
  />
);

export default TypeformEmbed;
