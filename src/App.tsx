import React from 'react';
import { Hero, BenefitsWithSideImage, QuoteBlocks, TextBoxEmphasis } from './components/Sections';
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
        logo="https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/LOGO.png?raw=true"
        headline="Descubra como montar looks diferentes todos os dias, sem precisar saber qual é o seu estilo e perder dinheiro com peças que não combinam com você"
        badges={[
          "USANDO PEÇAS QUE VOCÊ JÁ TEM",
          "ECONOMIZANDO DINHEIRO",
          "MESMO QUE VOCÊ NÃO ENTENDA NADA DE MODA"
        ]}
        gallery={[
          "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/GUIA%20ACHADINHOS%20(1).png?raw=true"
        ]}
      />

      {/* 2. For Who */}
      <BenefitsWithSideImage 
        title={"O Protocolo Looks Infinitos é \n para você, mulher, que..."}
        bullets={[
          "Sente que tem um “cemitério de roupas” e gasta com peças novas porque não sabe combinar as que já tem.",
          "Se sente “fantasiada” ou básica demais toda vez que tenta montar uma combinação por conta própria.",
          "Já comprou peças “lindas” por impulso e hoje elas estão ocupando espaço, com etiqueta, sem ver a luz do dia.",
          "Tem vontade de chorar na frente do armário por sentir que, mesmo cheia de roupa, não tem nada para vestir.",
          "Quer parar de enterrar dinheiro e deseja aprender a ser estratégica com o que já possui no guarda-roupa.",
          "Está cansada de se sentir mal vestida e quer finalmente ter looks prontos em menos de 5 minutos."
        ]}
        footerText={"Se você se identifica com ao menos 2 itens acima, \n o Protocolo Looks Infinitos é para você!"}
        sideImage="https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260309_2357_Image%20Generation_simple_compose_01kkatv6b4f0bv7zxk5v0wzk0p.png?raw=true"
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
        centerVisual="https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260310_0012_Image%20Generation_simple_compose_01kkavpn06e08bw5m1jpsg8kzc.png?raw=true"
      />

      {/* 4. Agitation Transition */}
      <TextBoxEmphasis 
        paragraphs={[
          "Você sabe do que eu estou falando, não é mesmo?",
          "Você não aguenta mais gastar com roupas que ficam paradas no armário. Você termina o dia exausta, frustrada e com a sensação de estar sempre mal vestida, mesmo tendo um guarda-roupa cheio.",
          "Agora eu te pergunto...",
          "Se você pudesse aprender a criar combinações com cara de rica usando apenas as peças que você já tem...",
          "Isso mudaria a sua confiança e o seu bolso?"
        ]}
        highlightCtaText="Se a sua resposta for “SIM”, o Protocolo Looks Infinitos é para você."
      />

      {/* 5. Three Steps */}
      <StepsCards 
        title="Seguindo esses 3 passos, você vai aprender a fazer fazer mais de 100 combinações de rica com as peças que você já tem:"
        steps={[
          {
            title: "Passo 01",
            text: "Limpe seu armário do que te faz parecer desleixada. Chega de guardar roupa que você comprou no impulso e nunca usou. É hora de fazer o que você já tem trabalhar a seu favor.",
            image: "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260310_0017_Image%20Generation_simple_compose_01kkavzewpepqr4paxrqwh0vav.png?raw=true"
          },
          {
            title: "Passo 02",
            text: "Escolha a intenção do seu look antes de sair de casa. O segredo não é saber de moda ou seu estilo ou perfil corporal.",
            image: "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260310_0017_Image%20Generation_simple_compose_01kkavyr97e7msmvhes2skskc3.png?raw=true"
          },
          {
            title: "Passo 03",
            text: "Aplique o protocolo para se arrumar em 5 minutos. Você vai seguir um passo a passo simples que te garante sair de casa pronta, impecável e com a segurança de que o seu look está falando exatamente o que você quer passar.",
            image: "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/20260310_0019_Elega%CC%82ncia%20Confiante_simple_compose_01kkaw2997etxrzvbgyey0pvz6.png?raw=true"
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
          "Resgatar sua autoestima e o prazer de se olhar no espelho."
        ]}
      />

      {/* 7. Deliverables */}
      <StackedOfferCards 
        title={"Veja tudo o que você vai receber para ter \n +100 combinações de looks:"}
        items={[
          {
            title: "O Guia “Intenção do Dia”",
            text: "A bússola que você precisava. Aprenda a definir a mensagem que quer passar antes de tocar nas roupas, garantindo que sua imagem esteja sempre alinhada com seus objetivos.",
            image: "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/1.png?raw=true"
          },
          {
            title: "O Dicionário de Estilos e Intenções",
            text: "Uma lista completa com cada estilo e a intenção por trás dele. Você nunca mais vai ficar na dúvida se o seu look está transmitir poder, sofisticação ou acessibilidade.",
            image: "https://github.com/suportefluir-jpg/PVLOOKS-IMAGES/blob/main/2.png?raw=true"
          },
          {
            title: "O Radar de Peças Estratégicas",
            text: "O guia prático para identificar quais peças no seu armário são verdadeiras “multiplicadoras de looks” e quais estão apenas ocupando espaço e te deixando com cara de desleixada.",
            image: "https://picsum.photos/seed/guide3/400/500"
          },
          {
            title: "Checklist de Segurança Antes de Sair",
            text: "O check de 30 segundos que evita que você saia de casa insegura. Se o seu look passar por esse checklist, você pode ter certeza: você está impecável.",
            image: "https://picsum.photos/seed/guide4/400/500"
          },
          {
            title: "Guia de Acessórios Magnéticos",
            text: "Descubra o “pulo do gato”. O acessório certo que muda tudo e transforma um look básico em uma produção digna de capa de revista, sem você precisar comprar roupas novas.",
            image: "https://picsum.photos/seed/guide5/400/500"
          },
          {
            title: "O Protocolo Looks Infinitos",
            text: "O método passo a passo para você dominar o seu armário, aprender a combinar suas peças pela intenção e nunca mais errar na hora de se vestir.",
            image: "https://picsum.photos/seed/guide6/400/500"
          },
          {
            title: "Catálogo com 100 Looks Prontos",
            text: "Não quer pensar? Não pense. Abra o catálogo, copie a combinação com as peças que você já tem e saia de casa pronta.",
            image: "https://picsum.photos/seed/guide7/400/500"
          }
        ]}
      />

      {/* 8. Value Stack */}
      <PricingRecap 
        title="Recapitulando tudo que você vai receber no Protocolo Looks Infinitos:"
        priceItems={[
          { name: "O Guia “Intenção do Dia”", price: "R$ 77" },
          { name: "O Dicionário de Estilos e Intenções", price: "R$ 97" },
          { name: "O Radar de Peças Estratégicas", price: "R$ 67" },
          { name: "Checklist de Segurança Antes de Sair", price: "R$ 97" },
          { name: "Guia de Acessórios Magnéticos", price: "R$ 97" },
          { name: "O Protocolo Looks Infinitos", price: "R$ 37" },
          { name: "Catálogo com 100 Looks Prontos", price: "R$ 99" }
        ]}
        totalText={"Tudo isso deveria custar R$571. Mas hoje \n você vai ter acesso por apenas:"}
      />

      {/* 9. Offer CTA 1 */}
      <OfferSplit 
        leftImage="https://picsum.photos/seed/mockup1/600/800"
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
            "text": "Agora é só aproveitar seus novos looks.",
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
        leftImage="https://picsum.photos/seed/mockup2/600/800"
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
