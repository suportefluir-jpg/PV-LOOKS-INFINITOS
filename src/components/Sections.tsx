import React from 'react';
import { motion } from 'motion/react';
import { Badge, Button, SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from './UI';

export const Hero: React.FC<{
  logo?: string;
  headline: string;
  badges: string[];
  gallery: string[];
  ctaLabel?: string;
  ctaUrl?: string;
}> = ({ logo, headline, badges, gallery, ctaLabel, ctaUrl }) => {
  return (
    <SectionWrapper id="hero" className="pt-4 pb-8 md:pt-6 md:pb-12">
      <div className="flex flex-col items-center text-center mb-6">
        {logo && (
          <FadeIn direction="down">
            <div className="mb-6">
              <img src={logo} alt="Logo" className="h-16 md:h-24 object-contain" referrerPolicy="no-referrer" />
            </div>
          </FadeIn>
        )}
        
        <FadeIn delay={0.2}>
          <h1 className="text-xl md:text-2xl lg:text-3xl leading-tight mb-4 max-w-4xl mx-auto">
            {headline}
          </h1>
        </FadeIn>

        <StaggerContainer className="flex flex-wrap justify-center gap-2 mb-6">
          {badges.map((badge, i) => (
            <StaggerItem key={i}>
              <Badge>{badge}</Badge>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="w-full max-w-5xl mb-8">
          <div className={`${gallery.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'flex justify-center'}`}>
            {gallery.length > 1 ? (
              <>
                <div className="relative overflow-hidden rounded-card">
                  <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">Antes</div>
                  <img 
                    src={gallery[0]} 
                    alt="Antes" 
                    className="w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative overflow-hidden rounded-card">
                  <div className="absolute top-4 left-4 z-10 bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase rounded">Depois</div>
                  <img 
                    src={gallery[1]} 
                    alt="Depois" 
                    className="w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </>
            ) : (
              <div className="relative max-w-2xl overflow-hidden rounded-card shadow-2xl">
                <img 
                  src={gallery[0]} 
                  alt="Hero" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </FadeIn>

        {ctaLabel && ctaUrl && (
          <FadeIn delay={0.6}>
            <Button href={ctaUrl} size="xl" className="max-w-2xl">
              {ctaLabel}
            </Button>
          </FadeIn>
        )}
      </div>
    </SectionWrapper>
  );
};

export const BenefitsWithSideImage: React.FC<{
  title: string;
  bullets: string[];
  footerText: string;
  sideImage: string;
}> = ({ title, bullets, footerText, sideImage }) => {
  return (
    <SectionWrapper id="for_who" background="#ffffff">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <FadeIn direction="right">
          <div>
            <h2 className="text-2xl md:text-4xl mb-8 whitespace-pre-line">
              {title}
            </h2>
            <StaggerContainer className="space-y-4">
              {bullets.map((bullet, i) => (
                <StaggerItem key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-olive flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700">{bullet}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
        <FadeIn direction="left">
          <div className="relative">
            <img 
              src={sideImage} 
              alt="Visual" 
              className="w-full h-auto rounded-card shadow-xl transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full -z-10 animate-pulse"></div>
          </div>
        </FadeIn>
      </div>
      
      <FadeIn>
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-extrabold text-olive whitespace-pre-line leading-tight">
            {footerText}
          </h3>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export const QuoteBlocks: React.FC<{
  intro: string;
  subintro: string;
  quotes: string[];
  centerVisual: string;
}> = ({ intro, subintro, quotes, centerVisual }) => {
  return (
    <SectionWrapper id="pain_beliefs">
      <FadeIn>
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 whitespace-pre-line leading-tight">{intro}</p>
          <h2 className="text-xl md:text-2xl font-normal text-gray-600 tracking-tight">{subintro}</h2>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <StaggerContainer className="space-y-6">
          {quotes.slice(0, 2).map((quote, i) => (
            <StaggerItem key={i}>
              <div className="bg-white p-6 rounded-card shadow-soft border-l-4 border-gold italic text-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                {quote}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn>
          <div className="flex justify-center">
            <img 
              src={centerVisual} 
              alt="Visual" 
              className="w-full max-w-[300px] h-auto rounded-full border-8 border-white shadow-2xl transition-transform duration-500 hover:rotate-3"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
        
        <StaggerContainer className="space-y-6">
          {quotes.slice(2).map((quote, i) => (
            <StaggerItem key={i}>
              <div className="bg-white p-6 rounded-card shadow-soft border-l-4 border-gold italic text-gray-700 transition-all duration-300 hover:shadow-md hover:translate-x-1">
                {quote}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
};

export const TextBoxEmphasis: React.FC<{
  paragraphs: string[];
  highlightCtaText: string;
  ctaUrl?: string;
}> = ({ paragraphs, highlightCtaText, ctaUrl }) => {
  return (
    <SectionWrapper id="agitation_transition">
      <div className="max-w-5xl mx-auto space-y-12">
        <FadeIn direction="right">
          <div className="bg-olive p-8 md:p-12 rounded-[40px] text-white text-center shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {paragraphs[0]}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              {paragraphs[1]}
            </p>
            <p className="text-lg md:text-xl italic">
              {paragraphs[2]}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div className="bg-gold p-8 md:p-12 rounded-[40px] text-white text-center shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <div className="max-w-3xl mx-auto space-y-6 mb-8">
              <p className="text-lg md:text-xl leading-relaxed">
                {paragraphs[3]}
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                {paragraphs[4]}
              </p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold max-w-2xl mx-auto">
              {highlightCtaText}
            </h3>
            {ctaUrl && (
              <div className="pt-8">
                <Button href={ctaUrl} variant="secondary" size="xl">
                  QUERO O PROTOCOLO AGORA
                </Button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};

export const Guarantee: React.FC<{
  title: string;
  text: string;
  image: string;
}> = ({ title, text, image }) => {
  return (
    <SectionWrapper id="guarantee" background="#ffffff">
      <FadeIn>
        <div className="max-w-4xl mx-auto bg-soft-gray rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 hover:shadow-xl">
          <div className="flex-shrink-0 w-48 h-48">
            <img src={image} alt="Garantia" className="w-full h-full object-contain animate-float" referrerPolicy="no-referrer" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-olive">{title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};
