import React, { useState } from 'react';
import { SectionWrapper, FadeIn, StaggerContainer, StaggerItem } from './UI';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const ComparisonChoice: React.FC<{
  title: string;
  option1: { title: string; text: string };
  option2: { title: string; text: string };
  closingText: string;
}> = ({ title, option1, option2, closingText }) => {
  return (
    <SectionWrapper id="choice_section" className="overflow-hidden">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl text-center mb-16">{title}</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
        <FadeIn direction="right">
          <div className="bg-white p-8 md:p-12 rounded-card shadow-soft border-t-8 border-gray-300 h-full transition-all duration-300 hover:shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-400">{option1.title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{option1.text}</p>
          </div>
        </FadeIn>
        <FadeIn direction="left">
          <div className="bg-white p-8 md:p-12 rounded-card shadow-xl border-t-8 border-olive transform md:scale-105 h-full transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-olive">{option2.title}</h3>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">{option2.text}</p>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.4}>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold italic text-olive">
            "{closingText}"
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
};

export const FAQ: React.FC<{
  title: string;
  items: { question: string; answer: string }[];
}> = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl text-center mb-16">{title}</h2>
      </FadeIn>
      <StaggerContainer className="max-w-3xl mx-auto space-y-4">
        {items.map((item, i) => (
          <StaggerItem key={i}>
            <div className="bg-white rounded-xl shadow-soft overflow-hidden border border-black/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">{item.question}</span>
                {openIndex === i ? <ChevronUp className="text-olive" /> : <ChevronDown className="text-olive" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 tracking-widest uppercase">Protocolo Looks Infinitos</h2>
        <p className="text-gray-500 text-sm mb-8">
          © {new Date().getFullYear()} Protocolo Looks Infinitos. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-8 text-xs text-gray-600 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
        </div>
        <p className="mt-12 text-[10px] text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};
