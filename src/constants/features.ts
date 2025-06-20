import { CreditCard, Shield, Zap } from "lucide-react";

export const features = [
  {
    icon: Zap,
    title: "Vendas Instantâneas",
    description: "Busca rápida por produtos, adição ao carrinho e finalização em segundos",
  },
  {
    icon: CreditCard,
    title: "Múltiplos Pagamentos",
    description: "Aceite Pix, dinheiro, cartão e pagamentos por aproximação (NFC)",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Todas as transações são criptografadas e armazenadas com segurança",
  },
] as const;
