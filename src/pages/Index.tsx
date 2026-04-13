import { useEffect, useRef } from "react";
import silhouetteImg from "@/assets/silhouette-woman.png";
import shieldImg from "@/assets/shield-leaf.png";

const CHECKOUT_URL = "https://pay.kirvano.com/f353195e-5d47-4a38-a41c-37f3655ecc34";

function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.classList.remove("opacity-0");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FadeBlock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useFadeInOnScroll();
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* BLOCO 1 — BANNER */}
      <div className="w-full bg-red-600 py-3 px-4">
        <p className="text-center text-white text-sm font-bold leading-snug">
          🔒 Sua compra foi confirmada. Mas antes de acessar seu protocolo, lê isso aqui rapidinho.
        </p>
      </div>

      {/* BLOCO 2 — PROBLEMA */}
      <FadeBlock className="bg-background py-16 md:py-20">
        <div className="max-w-[600px] mx-auto px-6 md:px-12">
          <div className="flex justify-center mb-8">
            <img src={silhouetteImg} alt="Ilustração de mulher com barriga inchada" width={280} height={350} className="max-w-[240px] md:max-w-[280px]" />
          </div>
          <h1 className="font-headline text-primary text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight mb-6">
            Sabe por que tem mulher que segue tudo direitinho e a barriga continua inchada do mesmo jeito?
          </h1>
          <div className="space-y-5 text-text-dark text-base text-center leading-relaxed">
            <p>O intestino desregulado trava o resultado por dentro.</p>
            <p>Gordura, líquido e toxina ficam presos.</p>
            <p>E nenhuma solução funciona no máximo que deveria enquanto isso não é resolvido.</p>
          </div>
        </div>
      </FadeBlock>

      {/* BLOCO 3 — SOLUÇÃO */}
      <FadeBlock className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-mint to-background -z-10" />
        <div className="relative">
          <div className="max-w-[600px] mx-auto px-6 md:px-12 text-center">
            <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              ✨ A PEÇA QUE FALTAVA
            </div>
            <div className="flex justify-center mb-4">
              <img src={shieldImg} alt="Ícone escudo com folha" loading="lazy" width={80} height={80} className="w-20 h-20" />
            </div>
            <h2 className="font-headline text-primary text-3xl md:text-4xl font-bold mb-4">
              Intestino Saudável
            </h2>
            <p className="max-w-[500px] mx-auto text-text-dark text-base leading-relaxed">
              O protocolo de 7 dias para equilibrar a flora intestinal, eliminar o inchaço crônico e destravar o resultado que você acabou de comprar.
            </p>
          </div>
        </div>
      </FadeBlock>

      {/* BLOCO 4 — BULLETS */}
      <FadeBlock className="bg-background py-16 md:py-20">
        <div className="max-w-[480px] mx-auto px-6 md:px-12">
          <ul className="space-y-6">
            {[
              "Descobre exatamente o que tá travando seu intestino",
              "Elimina o inchaço que não some nem fazendo tudo certo",
              "Potencializa o resultado da Gelatina Mounjaro por dentro",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-primary text-xl font-bold mt-0.5">✓</span>
                <span className="text-text-dark text-base leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeBlock>

      {/* BLOCO 5 — CTA */}
      <FadeBlock className="bg-primary py-14 md:py-20">
        <div className="max-w-[600px] mx-auto px-6 md:px-12 text-center">
          {/* Badge */}
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            OFERTA ESPECIAL. APENAS NESSA PÁGINA.
          </div>

          {/* Escudo */}
          <div className="flex justify-center mb-4">
            <img src={shieldImg} alt="Ícone escudo com folha" loading="lazy" width={64} height={64} className="w-16 h-16" />
          </div>

          {/* Headline */}
          <h2 className="font-headline text-primary-foreground text-2xl md:text-3xl font-bold mb-2">
            Intestino Saudável
          </h2>
          <p className="text-primary-foreground/70 text-sm mb-6">
            Aplicativo completo. Acesso vitalício no celular.
          </p>

          {/* Divisória */}
          <div className="w-full h-px bg-white/20 mb-6" />

          {/* Lista de benefícios */}
          <ul className="space-y-4 text-left max-w-[360px] mx-auto mb-6">
            {[
              "Protocolo de 7 dias para resetar o intestino",
              "Guia dos alimentos que travam seu resultado",
              "Acesso vitalício sem mensalidade",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-400 text-base font-bold mt-0.5">✓</span>
                <span className="text-primary-foreground text-[15px] leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          {/* Divisória */}
          <div className="w-full h-px bg-white/20 mb-6" />

          {/* Preço */}
          <p className="text-primary-foreground/50 text-sm line-through mb-1">De R$47</p>
          <p className="text-primary-foreground text-4xl font-bold mb-1">Por apenas R$17</p>
          <p className="text-gold text-sm mb-8">Você economiza R$30 agora</p>

          {/* Botão CTA */}
          <a
            href={CHECKOUT_URL}
            className="inline-block w-full max-w-[440px] bg-primary-foreground text-primary font-body font-bold text-lg py-5 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            ✅ SIM, QUERO DESTRAVAR MEU RESULTADO AGORA
          </a>

          {/* Linha de confiança */}
          <div className="flex items-center justify-center gap-4 mt-6 text-primary-foreground/60 text-sm">
            <span>🔒 Pagamento seguro</span>
            <span>⚡ Acesso imediato</span>
            <span>📱 Funciona no celular</span>
          </div>

          {/* Recusa */}
          <a
            href={CHECKOUT_URL}
            className="inline-block mt-8 text-primary-foreground/40 text-sm underline hover:text-primary-foreground/60 transition-colors"
          >
            Não obrigada, prefiro correr o risco de o intestino travar meu resultado.
          </a>
        </div>
      </FadeBlock>
    </div>
  );
};

export default Index;
