import React from 'react';
import { Button, Card, SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from './UI';
import { CheckCircle2 } from 'lucide-react';

export const PricingRecap: React.FC<{
  title: string;
  priceItems: { name: string; price: string }[];
  totalText: string;
}> = ({ title, priceItems, totalText }) => {
  return (
    <SectionWrapper id="value_stack" background="#7f8b79" className="text-white overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl text-center mb-12 text-white whitespace-pre-line">{title}</h2>
        </FadeIn>
        <StaggerContainer className="bg-white/10 rounded-card border border-white/20 overflow-hidden mb-8">
          {priceItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className={`flex justify-between items-center p-4 md:p-6 ${i !== priceItems.length - 1 ? 'border-b border-white/10' : ''} transition-colors duration-300 hover:bg-white/5`}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 w-5 h-5" />
                  <span className="text-lg">{item.name}</span>
                </div>
                <span className="font-bold text-white line-through opacity-60">{item.price}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.4}>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-bold text-white mb-4 whitespace-pre-line">{totalText}</p>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export const OfferSplit: React.FC<{
  leftImage: string;
  installmentsText: string;
  priceMain: string;
  priceCash: string;
  supportingLines: string[];
  buttonLabel: string;
  buttonUrl: string;
  urgency: string;
}> = ({ leftImage, installmentsText, priceMain, priceCash, supportingLines, buttonLabel, buttonUrl, urgency }) => {
  return (
    <SectionWrapper id="offer_cta" className="py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <div className="flex justify-center">
            <img 
              src={leftImage} 
              alt="Mockup" 
              className="w-full max-w-md h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
        <FadeIn direction="left">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-red-section text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 animate-pulse">
              {urgency}
            </div>
            <h2 className="text-2xl md:text-3xl mb-4 text-gray-600 font-medium">Por apenas</h2>
            <div className="flex flex-col items-center lg:items-start mb-6">
              <span className="text-olive font-bold text-2xl uppercase tracking-widest mb-1">{installmentsText}</span>
              <span className="text-6xl md:text-8xl font-black text-black leading-none">{priceMain}</span>
              <span className="text-xl md:text-2xl text-gray-500 mt-2">{priceCash}</span>
            </div>
            
            <StaggerContainer className="space-y-3 mb-10">
              {supportingLines.map((line, i) => (
                <StaggerItem key={i} className="flex items-center justify-center lg:justify-start gap-2 text-olive font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{line}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <Button href={buttonUrl} size="xl" className="w-full">
              {buttonLabel}
            </Button>
            
            <div className="mt-6 flex justify-center lg:justify-start items-center gap-4 opacity-60">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" referrerPolicy="no-referrer" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
              <img src="https://img.icons8.com/color/48/000000/pix.png" alt="Pix" className="h-6" referrerPolicy="no-referrer" />
              <img src="https://img.icons8.com/color/48/000000/security-checked.png" alt="Secure" className="h-6" referrerPolicy="no-referrer" />
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export const ThreeCards: React.FC<{
  title: string;
  cards: { title: string; text: string; image: string }[];
}> = ({ title, cards }) => {
  return (
    <SectionWrapper background="#7f8b79" className="text-white overflow-hidden">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl text-center mb-16 text-white">{title}</h2>
      </FadeIn>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <StaggerItem key={i}>
            <div className="bg-white/10 p-8 rounded-card border border-white/20 text-center flex flex-col items-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl transition-transform duration-300 hover:rotate-12">
                <img src={card.image} alt={card.title} className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold-soft">{card.title}</h3>
              <p className="text-white/80 leading-relaxed">{card.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
};
