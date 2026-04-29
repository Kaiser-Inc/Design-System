# KaiserInc Design System

> Design system da **KaiserInc** — tokens, componentes e utilitários de UI para projetos frontend.

Monorepo construído com **pnpm workspaces** + **Turborepo**, publicado no npm sob o escopo `@kaiserinc/`.

---

## Pacotes

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| [`@kaiserinc/tokens`](./packages/tokens) | `0.1.0` | CSS custom properties + exports JS/TS dos tokens de design |
| [`@kaiserinc/tailwind`](./packages/tailwind) | `0.1.0` | Preset Tailwind v3 + tema CSS para Tailwind v4 |
| [`@kaiserinc/react`](./packages/react) | `0.1.0` | Biblioteca de componentes React |

---

## Usando nos seus projetos

### Instalação

```bash
# Apenas os tokens (framework-agnostic)
pnpm add @kaiserinc/tokens

# Tokens + componentes React
pnpm add @kaiserinc/tokens @kaiserinc/react

# Preset Tailwind (v3 ou v4)
pnpm add -D @kaiserinc/tailwind
```

---

### `@kaiserinc/tokens` — Tokens CSS

Importe o CSS no ponto de entrada da sua aplicação para disponibilizar todas as variáveis CSS:

```css
/* app.css / globals.css */
@import "@kaiserinc/tokens/css";
```

Ou via JavaScript/TypeScript (valores estáticos para uso programático):

```ts
import { colors, spacing, radii, shadows } from "@kaiserinc/tokens";

console.log(colors.purple[500]); // "#8257e6"
console.log(spacing[4]);         // "16px"
```

Exports disponíveis:

```ts
import { colors }     from "@kaiserinc/tokens/colors";
import { spacing }    from "@kaiserinc/tokens/spacing";
import { radii }      from "@kaiserinc/tokens/radii";
import { shadows }    from "@kaiserinc/tokens/shadows";
import { fontFamily, fontSize } from "@kaiserinc/tokens/typography";
import { easing, duration }     from "@kaiserinc/tokens/motion";
```

---

### `@kaiserinc/tailwind` — Preset Tailwind

#### Tailwind v3

```ts
// tailwind.config.ts
import { kaiserPreset } from "@kaiserinc/tailwind";
import type { Config } from "tailwindcss";

export default {
  presets: [kaiserPreset],
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config;
```

#### Tailwind v4 (padrão nos projetos KaiserInc)

```css
/* app.css */
@import "tailwindcss";
@import "@kaiserinc/tailwind/v4-theme.css";
```

O arquivo `v4-theme.css` já inclui os tokens e configura o `@theme` automaticamente.

---

### `@kaiserinc/react` — Componentes React

> **Requisito:** os tokens CSS precisam estar importados globalmente antes de usar os componentes.

```tsx
// 1. Importe os tokens no ponto de entrada
import "@kaiserinc/tokens/css";

// 2. Use os componentes
import { Button, Card, CardHeader, CardTitle, CardBody, Badge, Input } from "@kaiserinc/react";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meu Projeto</CardTitle>
        <Badge variant="success">Ativo</Badge>
      </CardHeader>
      <CardBody>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Button variant="primary" size="md">Salvar</Button>
      </CardBody>
    </Card>
  );
}
```

#### Componentes disponíveis

**Primitivos**

| Componente | Props principais |
|------------|-----------------|
| `<Button>` | `variant` (`primary` \| `secondary` \| `ghost` \| `danger`), `size` (`sm` \| `md` \| `lg`), `loading`, `leftIcon`, `rightIcon` |
| `<Badge>` | `variant` (`default` \| `success` \| `warning` \| `danger` \| `brand`), `size` (`sm` \| `md`) |
| `<Avatar>` | `src`, `alt`, `fallback`, `size` (`xs` \| `sm` \| `md` \| `lg` \| `xl`) |
| `<Input>` | `label`, `error`, `hint`, `leftElement`, `rightElement` |

**Layout e containers**

| Componente | Props principais |
|------------|-----------------|
| `<Card>` | `hoverable`, `noPadding` |
| `<CardHeader>` | — |
| `<CardTitle>` | — |
| `<CardBody>` | — |

**Dashboard**

| Componente | Props principais |
|------------|-----------------|
| `<StatCard>` | `label`, `value`, `trend` (`{ value, direction }`) , `icon`, `description` |
| `<TopBar>` | `title`, `breadcrumb`, `actions`, `logo` |
| `<Sidebar>` | `sections`, `logo`, `footer`, `collapsed` |

---

## Rodando localmente

### Pré-requisitos

- **Node.js** `>=20`
- **pnpm** `>=9` — `npm install -g pnpm`

### Setup

```bash
# 1. Clone o repositório
git clone https://github.com/KaiserInc/KaiserInc-DesignSystem.git
cd KaiserInc-DesignSystem

# 2. Instale as dependências
pnpm install

# 3. Build inicial de todos os packages (necessário na primeira vez)
pnpm build
```

### Desenvolvimento

```bash
# Inicia todos os packages em modo watch + Storybook
pnpm dev
```

O Storybook abre em **http://localhost:6006** com hot-reload.

Para rodar apenas um package específico em watch:

```bash
# Apenas os tokens
pnpm --filter @kaiserinc/tokens dev

# Apenas o package React
pnpm --filter @kaiserinc/react dev
```

### Outros comandos úteis

```bash
pnpm build        # Build de todos os packages
pnpm lint         # Lint em todos os packages
pnpm typecheck    # Verificação de tipos TypeScript
pnpm test         # Testes unitários (vitest)
pnpm format       # Formata todos os arquivos com Prettier
```

---

## Estrutura do monorepo

```
KaiserInc-DesignSystem/
├── apps/
│   └── storybook/          # Documentação interativa (não publicado)
├── packages/
│   ├── tokens/             # @kaiserinc/tokens
│   ├── tailwind/           # @kaiserinc/tailwind
│   └── react/              # @kaiserinc/react
├── tooling/
│   ├── eslint/             # @kaiserinc/eslint-config (interna)
│   ├── typescript/         # @kaiserinc/typescript-config (interna)
│   └── prettier/           # @kaiserinc/prettier-config (interna)
├── .changeset/             # Configuração de versionamento
├── turbo.json              # Pipeline de build
└── pnpm-workspace.yaml
```

---

## Contribuindo

### Fluxo de trabalho

```bash
# 1. Crie uma branch
git checkout -b feat/meu-componente

# 2. Implemente a mudança

# 3. Adicione uma story no Storybook (se for componente)

# 4. Crie um changeset descrevendo a mudança
pnpm changeset
# Selecione os packages afetados e o tipo de bump (patch/minor/major)

# 5. Abra um PR para main
```

### Publicando uma nova versão

O fluxo de release é gerenciado pelo **Changesets** via GitHub Actions:

1. Todos os PRs com changesets são acumulados
2. O bot cria automaticamente um **"Version PR"** consolidado
3. Ao fazer merge do Version PR → os packages são publicados no npm automaticamente

Para publicar manualmente em desenvolvimento:

```bash
pnpm version-packages   # Aplica os changesets e atualiza os package.json
pnpm release            # Build + publish no npm
```

> **Requisito:** configure o secret `NPM_TOKEN` em **Settings → Secrets → Actions** no GitHub.

---

## Adicionando novos adapters (futuro)

A arquitetura foi desenhada para crescer. Para adicionar suporte a um novo framework:

1. Crie `packages/<stack>/` (ex: `packages/angular/`)
2. Adicione `@kaiserinc/tokens` como dependência
3. Implemente os componentes usando os tokens JS ou CSS vars
4. Adicione ao Storybook se aplicável

```
@kaiserinc/tokens  ← base de tudo, zero dependências externas
       ├── @kaiserinc/tailwind
       ├── @kaiserinc/react
       ├── @kaiserinc/angular      (futuro)
       ├── @kaiserinc/react-native (futuro — usa tokens JS, não CSS)
       └── @kaiserinc/next         (futuro — next/font + providers)
```

---

## Licença

MIT © [KaiserInc](https://github.com/KaiserInc)
