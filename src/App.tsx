import React from 'react';
import { Hero, BenefitsWithSideImage, QuoteBlocks, TextBoxEmphasis, Guarantee } from './components/Sections';
import { StepsCards, TwoColumnChecklist, StackedOfferCards } from './components/OfferSections';
import { PricingRecap, OfferSplit, ThreeCards } from './components/PricingSections';
import { ComparisonChoice, FAQ, Footer } from './components/FooterFAQ';

export default function App() {
  const ctaUrl = "https://payfast.greenn.com.br/pzdzz45";
  const ctaLabel = "SIM, QUERO O PROTOCOLO LOOKS INFINITOS";

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <Hero 
        logo="https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/LOGO.png"
        headline={
          <>
            Descubra como combinar <span className="text-olive">+100 looks diferentes</span><br />
            usando <span className="text-olive">peças que já tem</span><br />
            sem precisar <span className="text-olive">gastar</span> dinheiro
          </>
        }
        badges={[
          "✅ Para todas as ocasiões",
          "✅ Economizando dinheiro",
          "✅ Mesmo que você não entenda nada de moda"
        ]}
        gallery={[
          "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/GUIA%20ACHADINHOS%20(3).png?raw=true"
        ]}
      />

      {/* 2. For Who */}
      <BenefitsWithSideImage 
        title={"O Protocolo Looks Infinitos é \n para você, mulher, que..."}
        bullets={[
          "Tá com o armário cheio de roupas, mas \"sem nada pra vestir\"",
          "Vive gastando dinheiro em \"brusinhas\"",
          "Se sente \"fantasiada\" quando tenta sair do básico",
          "Perde um tempão (e a paciência) se trocando",
          "Quer parar de gastar e começar a saber usar o que compra",
          "Sonha em ficar pronta em 5 minutos para qualquer ocasião"
        ]}
        footerText={"Se você se identifica com ao menos 2 itens acima, \n o Protocolo Looks Infinitos é para você!"}
        sideImage="https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260313_0107_Image%20Generation_remix_01kkjp0pdve4d9927rj0x238f3.png?raw=true"
      />

      {/* 3. Pain Beliefs */}
      <QuoteBlocks 
        intro={"Eu sei... você gasta muito, mas continua \n sentindo que não tem nenhuma roupa:"}
        subintro="Por isso, toda vez você pensa:"
        quotes={[
          "“Comprei um vestido maravilhoso, mas ele não fica bom com nada que eu tenho.”",
          "“Parcelei em 300x uma bota linda e no espelho, pareço fantasiada.”",
          "“Meu armário está cheio, mas na hora de sair, parece que não tenho nada.”",
          "“Tento combinar e fica um desastre, parece que sempre falta roupa.”",
          "“Sempre caio no papo da vendedora, compro e nunca uso.”"
        ]}
        centerVisual="https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260313_0110_Image%20Generation_remix_01kkjp4fknefsvvz4h8t75xkqb.png?raw=true"
      />

      {/* 4. Agitation Transition */}
      <TextBoxEmphasis 
        background="#7f8b79"
        paragraphs={[
          "Você sabe do que eu estou falando, não é mesmo?",
          "Você não aguenta mais gastar com roupas que ficam paradas no armário. Você termina o dia exausta, frustrada e com a sensação de estar sempre mal vestida, mesmo tendo um guarda-roupa cheio.",
          "Agora eu te pergunto...",
          "Se você pudesse aprender a criar combinações elegantes e perfeitas para qualquer ocasião, usando apenas as peças que você já tem...",
          "Isso mudaria a sua confiança e o seu bolso?"
        ]}
        highlightCtaText="Se a sua resposta for “SIM”, o Protocolo Looks Infinitos é para você."
      />

      {/* 5. Three Steps */}
      <StepsCards 
        title="Seguindo esses 3 passos, você vai aprender a estar elegante e bonita para qualquer ocasião"
        steps={[
          {
            title: "Passo 01",
            text: "Limpe seu armário do que te faz parecer desleixada. Chega de guardar roupa que você comprou no impulso e nunca usou. É hora de fazer o que você já tem trabalhar a seu favor.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/20260310_0017_Image%20Generation_simple_compose_01kkavzewpepqr4paxrqwh0vav.png"
          },
          {
            title: "Passo 02",
            text: "Escolha a intenção do seu look antes de sair de casa, estando bem vestido para seu compromisso. O segredo não é saber de moda ou seu estilo ou perfil corporal.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/20260310_0017_Image%20Generation_simple_compose_01kkavyr97e7msmvhes2skskc3.png"
          },
          {
            title: "Passo 03",
            text: "Aplique o protocolo para se arrumar em 5 minutos que te garante sair de casa pronta, impecável e com a segurança de que o seu look está falando exatamente o que você quer passar.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/20260310_0019_Elega%CC%82ncia%20Confiante_simple_compose_01kkaw2997etxrzvbgyey0pvz6.png"
          }
        ]}
      />

      {/* 6. Benefits Grid */}
      <TwoColumnChecklist 
        title={"Com esses 3 passos do Protocolo \n Looks Infinitos, você vai..."}
        itemsLeft={[
          "Nunca mais ter a sensação de que está “mal vestida”.",
          "Montar looks de rica com peças que você já tem.",
          "Parar de gastar dinheiro com roupas que não combinam."
        ]}
        itemsRight={[
          "Se sentir elegante e segura em menos de 5 minutos.",
          "Destravar combinações que você nem imaginava que existiam.",
          "Resgatar sua autoestima e o prazer de se olhar no espelho.",
          "Facilitando muito a vida na hora de se vestir"
        ]}
      />

      {/* 7. Deliverables */}
      <StackedOfferCards 
        title={"Veja tudo o que você vai receber para ter \n looks infinitos e elegantes:"}
        items={[
          {
            title: "Checklist Anti-Erro Antes de Sair",
            text: "O check de 30 segundos que evita que você saia de casa insegura. Se o seu look passar por esse checklist, você pode ter certeza: você está impecável.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Checklist%20de%20Seguranc%CC%A7a%20Antes%20de%20Sair.png"
          },
          {
            title: "Radar das Peças que Criam Mais Looks",
            text: "O guia prático para identificar quais peças no seu armário são verdadeiras “multiplicadoras de looks” e quais estão apenas ocupando espaço.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/O%20Radar%20de%20Pec%CC%A7as%20Estrate%CC%81gicas.png"
          },
          {
            title: "Looks Infinitos para Trabalhar",
            text: "Aprenda a montar combinações que transmitem profissionalismo e competência, sem perder a sua essência e o conforto necessário.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Looks Infinitos para Jantar ou Encontro",
            text: "Looks estratégicos para momentos especiais, onde você quer se sentir bonita, confiante e adequada ao ambiente.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Looks Infinitos para o Dia a Dia",
            text: "Praticidade é a palavra de ordem. Tenha looks prontos para as tarefas rotineiras, mantendo sempre o estilo e a elegância.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Looks Infinitos para Eventos",
            text: "Seja um casamento, batizado ou festa, saiba exatamente como se vestir para brilhar em qualquer evento social.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "O Mapa do Armário Inteligente",
            text: "Aprenda a organizar e visualizar seu guarda-roupa de forma que todas as peças se conversem entre si, facilitando a sua vida.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/PROTOCOLO%20LOOKS.png"
          },
          {
            title: "Guia de Acessórios Magnéticos",
            text: "Descubra como o acessório certo transforma um look básico em uma produção digna de capa de revista.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Guia%20de%20Acesso%CC%81rios%20Magne%CC%81ticos.png"
          },
          {
            title: "Combinações que passam Autoridade",
            text: "Looks focados em transmitir liderança, seriedade e respeito, ideais para reuniões e momentos decisivos.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Combinações que passam Elegância",
            text: "O segredo da sofisticação sem esforço. Aprenda a usar cores e cortes que elevam instantaneamente a sua imagem.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Combinações que passam Sensualidade",
            text: "Aprenda a dosar a sensualidade de forma elegante e estratégica, valorizando seus pontos fortes com sutileza.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Combinações que passam Criatividade",
            text: "Para quem gosta de ousar. Aprenda a misturar texturas, cores e estampas de forma harmônica e autêntica.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          },
          {
            title: "Combinações que passam Praticidade",
            text: "Foco total em agilidade. Looks funcionais para quem tem a vida corrida mas não abre mão de estar bem vestida.",
            image: "https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/Cata%CC%81logo%20com%20100%20Looks%20Prontos.png"
          }
        ]}
      />

      {/* 8. Value Stack */}
      <PricingRecap 
        title="Recapitulando tudo que você vai receber no Protocolo Looks Infinitos:"
        priceItems={[
          { name: "Checklist Anti-Erro Antes de Sair", price: "R$ 97" },
          { name: "Radar das Peças que Criam Mais Looks", price: "R$ 67" },
          { name: "Looks Infinitos para Trabalhar", price: "R$ 97" },
          { name: "Looks Infinitos para Jantar ou Encontro", price: "R$ 97" },
          { name: "Looks Infinitos para o Dia a Dia", price: "R$ 97" },
          { name: "Looks Infinitos para Eventos", price: "R$ 97" },
          { name: "O Mapa do Armário Inteligente", price: "R$ 77" },
          { name: "Guia de Acessórios Magnéticos", price: "R$ 97" },
          { name: "Combinações que passam Autoridade", price: "R$ 47" },
          { name: "Combinações que passam Elegância", price: "R$ 47" },
          { name: "Combinações que passam Sensualidade", price: "R$ 47" },
          { name: "Combinações que passam Criatividade", price: "R$ 47" },
          { name: "Combinações que passam Praticidade", price: "R$ 47" }
        ]}
        totalText={"Tudo isso deveria custar R$957. Mas hoje \n você vai ter acesso por apenas:"}
      />

      {/* 9. Offer CTA 1 */}
      <OfferSplit 
        leftImage="https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/TUDAO.png"
        installmentsText="apenas 9x"
        priceMain="R$ 8,76"
        priceCash="ou R$ 67,00 à vista com desconto"
        supportingLines={[
          "ACESSO IMEDIATO E VITALÍCIO",
          "VOCÊ SÓ PAGA UMA ÚNICA VEZ ESSE VALOR!"
        ]}
        buttonLabel={ctaLabel}
        buttonUrl={ctaUrl}
        urgency="Condição especial por tempo limitado."
      />

      {/* 10. Delivery Steps */}
      <ThreeCards 
        title="Compre agora e receba seu acesso no e-mail imediatamente!"
        cards={[
          {
            title: "ACESSE SEU E-MAIL",
            text: "Assim que finalizar sua compra, você vai receber seu acesso no email.",
            image: "https://img.icons8.com/ios/100/000000/email.png"
          },
          {
            title: "ACESSE O GUIA",
            text: "Você vai receber todos os entregáveis imediatamente para usar quando e como quiser.",
            image: "https://img.icons8.com/ios/100/000000/book.png"
          },
          {
            title: "TUDO PRONTO!",
            text: "Agora é só aproveitar seus novos looks.",
            image: "https://img.icons8.com/ios/100/000000/ok.png"
          }
        ]}
      />

      {/* 11. Choice Section */}
      <ComparisonChoice 
        title="Agora você tem duas opções:"
        option1={{
          title: "Opção 1:",
          text: "Continuar do mesmo jeito. Abrindo o guarda-roupa cheio de roupas e sentindo que não tem nada para vestir. Continuar comprando peças novas que depois não combinam com nada e sair de casa sem se sentir elegante."
        }}
        option2={{
          title: "Opção 2:",
          text: "Garantir o Protocolo Looks Infinitos agora. Aprender a criar mais de 100 combinações com as roupas que você já tem e se arrumar em poucos minutos, com segurança e elegância."
        }}
        closingText="Eu sei (e você também sabe): se sentir elegante todos os dias usando o que já tem no armário muda tudo."
      />

      {/* 12. Offer CTA 2 */}
      <OfferSplit 
        leftImage="https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/TUDAO.png"
        installmentsText="apenas 9x"
        priceMain="R$ 8,76"
        priceCash="ou R$ 67,00 à vista com desconto"
        supportingLines={[
          "ACESSO IMEDIATO E VITALÍCIO",
          "VOCÊ SÓ PAGA UMA ÚNICA VEZ ESSE VALOR!"
        ]}
        buttonLabel={ctaLabel}
        buttonUrl={ctaUrl}
        urgency="Condição especial por tempo limitado."
      />

      {/* 12.5 Guarantee */}
      <Guarantee 
        title="Garantia Incondicional de 7 Dias"
        text="Eu tenho tanta confiança no Protocolo Looks Infinitos que eu te dou uma garantia de 7 dias. Se por qualquer motivo você achar que o protocolo não é para você, basta me enviar um e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas, sem letras miúdas e sem ressentimentos."
        image="https://raw.githubusercontent.com/suportefluir-jpg/PVLOOKS-IMAGES/main/SELO%20GARANTIA.png"
      />

      {/* 13. FAQ */}
      <FAQ 
        title="Perguntas Frequentes"
        items={[
          {
            question: "O acesso é imediato?",
            answer: "Sim. Assim que o pagamento for confirmado, você recebe o acesso no seu e-mail."
          },
          {
            question: "Por quanto tempo terei acesso?",
            answer: "O acesso é imediato e vitalício."
          },
          {
            question: "O produto é físico ou digital?",
            answer: "O Protocolo Looks Infinitos é um produto digital."
          },
          {
            question: "Preciso entender de moda para aplicar?",
            answer: "Não. O protocolo foi pensado justamente para mulheres que não entendem nada de moda e querem se vestir melhor usando o que já têm."
          },
          {
            question: "Vou precisar comprar roupas novas?",
            answer: "Não. A proposta do protocolo é te ensinar a montar combinações com as peças que você já tem no guarda-roupa."
          }
        ]}
      />

      <Footer />
    </div>
  );
}
