# KaiserInc Design System

> Tokens, componentes e utilitários de UI para projetos frontend da **KaiserInc**.

Monorepo com **pnpm workspaces** + **Turborepo**, publicado no npm sob o escopo `@kaiserinc/`.

---

## Pacotes

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| [`@kaiserinc/tokens`](./packages/tokens) | `0.1.0` | CSS custom properties + exports JS/TS |
| [`@kaiserinc/tailwind`](./packages/tailwind) | `0.1.0` | Preset Tailwind v3 + tema CSS para Tailwind v4 |
| [`@kaiserinc/react`](./packages/react) | `0.2.0` | 34 componentes React — Next.js App Router ready |
| [`@kaiserinc/react-native`](./packages/react-native) | `0.1.0` | 10 componentes React Native com tokens JS |

---

## Instalação rápida

```bash
# React / Next.js
pnpm add @kaiserinc/tokens @kaiserinc/react

# React Native / Expo
pnpm add @kaiserinc/tokens @kaiserinc/react-native

# Apenas tokens (framework-agnostic)
pnpm add @kaiserinc/tokens

# Preset Tailwind
pnpm add -D @kaiserinc/tailwind
```

---

## `@kaiserinc/tokens`

```css
/* globals.css */
@import "@kaiserinc/tokens/css";
```

```ts
import { colors, spacing, radii } from "@kaiserinc/tokens";
colors.purple[500] // "#8257e6"
```

---

## `@kaiserinc/react`

> Todos os componentes incluem `"use client"` — compatíveis com Next.js App Router.

```tsx
import "@kaiserinc/tokens/css"; // tokens CSS obrigatórios

import { Button, Dialog, Toaster, toast, useDisclosure } from "@kaiserinc/react";

// Adicione <Toaster /> uma vez no layout
<Toaster />

// Use em qualquer lugar
function ConfirmDialog() {
  const modal = useDisclosure();
  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onOpenChange}>
      <Dialog.Trigger asChild>
        <Button onClick={modal.open}>Abrir</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header><Dialog.Title>Confirmar</Dialog.Title></Dialog.Header>
        <Dialog.Body><p>Tem certeza?</p></Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild><Button variant="ghost">Cancelar</Button></Dialog.Close>
          <Button onClick={() => { modal.close(); toast.success("Feito!"); }}>Confirmar</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
```

### Componentes disponíveis

**Primitivos**
`Button` `Badge` `Avatar` `Input` `Select` `Textarea` `Checkbox` `Switch` `Separator` `Progress`

**Feedback**
`Alert` `Spinner` `Skeleton` `Toaster` + `toast()`

**Form**
`Form` `Form.Field` `Form.Label` `Form.Submit` · `RadioGroup` `RadioItem`

**Disclosure**
`Accordion` `Dialog` `Sheet` `Popover` `DropdownMenu` `Tabs` `Tooltip`

**Data Display**
`Table` `Pagination` `Breadcrumb` `EmptyState`

**Layout**
`Card` `StatCard` `TopBar` `Sidebar`

**Providers & Utils**
`ThemeProvider` `Portal` `Logo`

**Hooks**
`useDisclosure` `useTheme`

Todos os componentes complexos expõem **Composition Pattern** (dot notation):
```tsx
<Accordion>
  <Accordion.Item value="1">
    <Accordion.Trigger>Pergunta</Accordion.Trigger>
    <Accordion.Content>Resposta</Accordion.Content>
  </Accordion.Item>
</Accordion>

<DropdownMenu>
  <DropdownMenu.Trigger asChild><Button>Opções</Button></DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Editar</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item destructive>Deletar</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
```

---

## `@kaiserinc/react-native`

```tsx
import { Button, Input, Card, Badge, Text } from "@kaiserinc/react-native";

function Example() {
  return (
    <Card>
      <CardHeader><CardTitle>Projeto</CardTitle></CardHeader>
      <CardBody>
        <Text preset="body">Descrição do projeto</Text>
        <Badge variant="success">Ativo</Badge>
        <Button onPress={() => {}}>Salvar</Button>
      </CardBody>
    </Card>
  );
}
```

Componentes: `Button` `Input` `Badge` `Avatar` `Card` `Switch` `Checkbox` `Spinner` `Separator` `Text`

Tokens JS com hex hardcoded (sem CSS vars), dark mode por padrão.

---

## Rodando localmente

```bash
git clone https://github.com/KaiserInc/KaiserInc-DesignSystem.git
cd KaiserInc-DesignSystem
pnpm install
pnpm build        # build inicial de todos os packages
pnpm dev          # Storybook em http://localhost:6006
```

```bash
pnpm dev --filter=@kaiserinc/storybook   # só o Storybook
pnpm dev --filter=@kaiserinc/react       # só o package React em watch
pnpm typecheck                           # TypeScript em todos os packages
pnpm build:storybook                     # build estático do Storybook
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
│   ├── react/              # @kaiserinc/react        (34 componentes)
│   └── react-native/       # @kaiserinc/react-native (10 componentes)
├── tooling/
│   ├── eslint/
│   ├── typescript/
│   └── prettier/
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Publicando

```bash
pnpm changeset          # descreve o que mudou
pnpm changeset version  # aplica bumps nos package.json
pnpm release            # build + publish no npm
```

> Requer `NPM_TOKEN` configurado em **Settings → Secrets → Actions** no GitHub.

---

## Licença

MIT © [KaiserInc](https://github.com/KaiserInc)
