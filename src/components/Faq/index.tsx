import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './faq.module.css';
import PortableText from '@components/PortableText';
import { SquarePixel } from '@components/SquarePixel';

type FaqItemProps = {
  question: string;
  answer: any;
  isOpen: boolean;
  onClick: () => void;
};

const DropDownItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div className={`border-white border-b first:border-t py-6 md:py-8`}>
      <button
        className={`flex flex-row justify-between items-start w-full hover:text-nextflow transition-all duration-500 ease-in-out ${isOpen ? 'active text-nextflow' : ''}`}
        onClick={onClick}
      >
        <h5 className="h6 text-left pr-8">{question}</h5>

        <div
          className={`h6 leading-none transition-transform duration-600 ease-in-out ${isOpen ? 'h2 active origin-center rotate-45' : 'origin-center'}`}
        >
          +
        </div>
      </button>

      <div
        ref={contentHeight}
        className={`transition-all duration-500 transition-delay-800 ease-in-out opacity-0`}
        style={
          isOpen
            ? {
                height: contentHeight?.current?.scrollHeight,
                marginTop: '2rem',
                marginBottom: '2rem',
                opacity: 1,
              }
            : { height: '0px', overflow: 'hidden', opacity: 0 }
        }
      >
        <div
          className={clsx(styles.faqAnswer, `bodycopy text-nextflow`)}
        >
          {answer && Array.isArray(answer) && answer.length > 0 ? (
            <PortableText value={answer} />
          ) : typeof answer === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

type FaqProps = {
  className?: string;
  data: Array<{
    question: string;
    answer: any;
  }>;
  title?: string;
  noSticky?: boolean;
  noPixels?: boolean;
};

const Faq: React.FC<FaqProps> = ({ className, data, title = 'FAQ', noSticky, noPixels }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className={`${className} relative bg-black py-20`}>
      <div className={`hidden ${noPixels ? 'hidden': 'md:block'} absolute top-40 left-0 z-10`}>
          <SquarePixel className="absolute top-0 left-0" initialColor="#31C9AC" />
          <SquarePixel className="absolute top-[18px] left-[18px]" />
          <SquarePixel className="absolute top-[36px] left-[36px]"  initialColor="#B6ECE2"/>
          <SquarePixel className="absolute top-[54px] left-[18px]" initialColor="#31C9AC" />
          <SquarePixel className="absolute top-[72px] left-0" initialColor="#31C9AC"/>
      </div>
      
      <div className={`${noPixels ? 'hidden': 'md:block'}`}>
      <SquarePixel className="absolute top-6 right-0" />
      <SquarePixel
        initialColor="#B6ECE2"
        className="absolute bottom-0 right-0"
      />
      <SquarePixel
        initialColor="#fff"
        className="absolute bottom-[18px] right-[18px]"
      />
      <SquarePixel
        initialColor="#56D3BA"
        className="absolute bottom-[0px] left-[18px]"
      />
      <SquarePixel
        initialColor="#fff"
        className="absolute bottom-[18px] left-[36px]"
      />
      </div>
      <div className="container-xl relative w-full flex flex-col sm:flex-row">
        <div className={`w-full mb-6 sm:mb-0 ${noSticky ? '' : 'sm:sticky'} sm:top-40 self-start`}>
          <h2 className="h4 relative z-20">{title}</h2>
        </div>
        <div className="w-full">
          {data.map((faq, index) => (
            <DropDownItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
