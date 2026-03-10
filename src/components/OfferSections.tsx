import React from 'react';
import { Card, SectionWrapper } from './UI';

export const StepsCards: React.FC<{
  title: string;
  steps: { title: string; text: string; image: string }[];
}> = ({ title, steps }) => {
  return (
    <SectionWrapper id="three_steps">
      <h2 className="text-3xl md:text-4xl text-center mb-16 max-w-4xl mx-auto">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <Card key={i} className="flex flex-col h-full group">
            <div className="h-64 overflow-hidden">
              <img 
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="bg-gold text-white w-fit px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
                {step.title}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {step.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export const TwoColumnChecklist: React.FC<{
  title: string;
  itemsLeft: string[];
  itemsRight: string[];
}> = ({ title, itemsLeft, itemsRight }) => {
  return (
    <SectionWrapper id="benefits_grid" background="#7f8b79" className="text-white">
      <h2 className="text-3xl md:text-4xl text-center mb-16 text-white whitespace-pre-line">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="space-y-6">
          {itemsLeft.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
                ✓
              </div>
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          {itemsRight.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
                ✓
              </div>
              <p className="text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export const StackedOfferCards: React.FC<{
  title: string;
  items: { title: string; text: string; image: string }[];
}> = ({ title, items }) => {
  return (
    <SectionWrapper id="deliverables">
      <h2 className="text-3xl md:text-4xl text-center mb-16 whitespace-pre-line">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <Card key={i} className="flex flex-col h-full">
            <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-olive">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
