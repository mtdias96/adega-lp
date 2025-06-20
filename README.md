# Estrutura do Projeto - AdegaTech Landing Page

## 📁 Organização de Pastas

### `/src/components/`
- **`/ui/`** - Componentes base reutilizáveis (Button, Card, Badge, etc.)
- **`/shared/`** - Componentes compartilhados entre páginas (Header, Logo, Navigation)
- **`/landing/`** - Componentes específicos da landing page (Hero, Features, etc.)
- **`/common/`** - Componentes utilitários (Spinner, Loading, etc.)

### `/src/constants/`
- **`navigation.ts`** - Itens de navegação
- **`features.ts`** - Dados dos recursos/features
- **`config.ts`** - Configurações gerais (opcional)

### `/src/types/`
- **`index.ts`** - Definições de tipos TypeScript

### `/src/utils/`
- **`utils.ts`** - Funções utilitárias
- **`helpers.ts`** - Funções auxiliares (opcional)

### `/src/hooks/`
- **`useMobileMenu.ts`** - Hook para menu mobile (opcional)
- **`useScroll.ts`** - Hook para scroll (opcional)

## 🎯 Padrões de Nomenclatura

### Componentes
- **PascalCase**: `Header.tsx`, `FeatureCard.tsx`
- **kebab-case**: `animated-devices.tsx` (para componentes complexos)

### Arquivos
- **camelCase**: `navigation.ts`, `features.ts`
- **kebab-case**: `global.css`

### Pastas
- **camelCase**: `components/`, `constants/`
- **kebab-case**: `landing-page/` (se necessário)

## 📋 Convenções de Import

```typescript
// Componentes UI
import { Button } from "@/components/ui/button"

// Componentes compartilhados
import Header from "@/components/shared/Header"

// Componentes da landing page
import Hero from "@/components/landing/Hero"

// Constantes
import { navigationItems } from "@/constants/navigation"

// Tipos
import type { Feature } from "@/types"

// Utilitários
import { cn } from "@/utils/utils"
```

## 🔧 Estrutura de um Componente

```typescript
// 1. Imports
import { Button } from "@/components/ui/button"
import type { ComponentProps } from "@/types"

// 2. Interface/Types
interface ComponentProps {
  // props
}

// 3. Componente
export default function Component({ prop }: ComponentProps) {
  return (
    // JSX
  )
}
```

## 📱 Responsividade

- **Mobile First**: Sempre começar com estilos mobile
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`
- **Classes responsivas**: `text-sm sm:text-base lg:text-lg`

## 🎨 Estilização

- **Tailwind CSS**: Classes utilitárias
- **CSS Modules**: Para estilos complexos (se necessário)
- **CSS Global**: Apenas para reset e variáveis

## 📦 Estrutura de Dados

### Navigation
```typescript
export const navigationItems = [
  { name: "Recursos", href: "#recursos" },
  { name: "Como Funciona", href: "#como-funciona" },
] as const;
```

### Features
```typescript
export const features = [
  {
    icon: Zap,
    title: "Vendas Instantâneas",
    description: "Descrição do recurso",
  },
] as const;
```

## 🚀 Próximos Passos

1. **Adicionar mais seções** na pasta `/landing/`
2. **Criar hooks customizados** na pasta `/hooks/`
3. **Expandir tipos** na pasta `/types/`
4. **Adicionar testes** na pasta `/__tests__/`
5. **Configurar Storybook** para documentação de componentes
