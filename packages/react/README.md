# @kaiserinc/react

> 34 React components — Composition Pattern, `asChild`, dark mode, Next.js App Router ready.

## Install

```bash
pnpm add @kaiserinc/tokens @kaiserinc/react
```

## Setup

```tsx
// app/layout.tsx
import "@kaiserinc/tokens/css";
import { ThemeProvider, Toaster } from "@kaiserinc/react";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider defaultTheme="dark">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Components

### Primitivos
`Button` `Badge` `Avatar` `Input` `Select` `Textarea` `Checkbox` `Switch` `Separator` `Progress`

### Feedback
`Alert` `Spinner` `Skeleton` `Toaster` + `toast()`

### Form
`Form` `Form.Field` `Form.Label` `Form.Submit` · `RadioGroup` `RadioItem`

### Disclosure
`Accordion` `Dialog` `Sheet` `Popover` `DropdownMenu` `Tabs` `Tooltip`

### Data Display
`Table` `Pagination` `Breadcrumb` `EmptyState`

### Layout
`Card` `StatCard` `TopBar` `Sidebar`

### Providers & Utils
`ThemeProvider` `Portal` `Logo`

### Hooks
`useDisclosure` `useTheme`

---

## Usage

### Button

```tsx
import { Button } from "@kaiserinc/react";

<Button variant="default" size="md">Salvar</Button>
<Button variant="outline" size="sm">Cancelar</Button>
<Button variant="ghost" loading>Carregando...</Button>
<Button variant="destructive">Deletar</Button>
```

Variants: `default` `outline` `ghost` `destructive` `link`  
Sizes: `sm` `md` `lg` `icon`

### Dialog

```tsx
import { Dialog, Button, useDisclosure } from "@kaiserinc/react";

function ConfirmDialog() {
  const modal = useDisclosure();
  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onOpenChange}>
      <Dialog.Trigger asChild>
        <Button onClick={modal.open}>Abrir</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Confirmar</Dialog.Title>
          <Dialog.Description>Esta ação não pode ser desfeita.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <p>Tem certeza?</p>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="ghost">Cancelar</Button>
          </Dialog.Close>
          <Button onClick={modal.close}>Confirmar</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
```

### DropdownMenu

```tsx
import { DropdownMenu, Button } from "@kaiserinc/react";

<DropdownMenu>
  <DropdownMenu.Trigger asChild>
    <Button variant="outline">Opções</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>Editar</DropdownMenu.Item>
    <DropdownMenu.Item>Duplicar</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item destructive>Deletar</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
```

### Accordion

```tsx
import { Accordion } from "@kaiserinc/react";

<Accordion multiple defaultOpen="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>O que é KaiserInc?</Accordion.Trigger>
    <Accordion.Content>Design system para projetos frontend.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Como instalar?</Accordion.Trigger>
    <Accordion.Content>pnpm add @kaiserinc/tokens @kaiserinc/react</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Toast

```tsx
import { toast } from "@kaiserinc/react";

toast.success("Salvo com sucesso!");
toast.error("Erro ao salvar.");
toast.warning("Atenção: dados incompletos.");
toast.info("Nova versão disponível.");

// Com ação
toast("Rascunho salvo", {
  description: "Alterações salvas automaticamente.",
  action: { label: "Ver", onClick: () => router.push("/drafts") },
});
```

> Requer `<Toaster />` no layout.

### Popover

```tsx
import { Popover, Button } from "@kaiserinc/react";

<Popover>
  <Popover.Trigger asChild>
    <Button variant="outline">Filtros</Button>
  </Popover.Trigger>
  <Popover.Content placement="bottom" align="start">
    <p className="text-sm">Conteúdo do popover</p>
  </Popover.Content>
</Popover>
```

### Tabs

```tsx
import { Tabs } from "@kaiserinc/react";

<Tabs defaultValue="geral">
  <Tabs.List>
    <Tabs.Trigger value="geral">Geral</Tabs.Trigger>
    <Tabs.Trigger value="avancado">Avançado</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="geral">Configurações gerais</Tabs.Content>
  <Tabs.Content value="avancado">Configurações avançadas</Tabs.Content>
</Tabs>
```

### Pagination

```tsx
import { Pagination } from "@kaiserinc/react";

const [page, setPage] = useState(1);

<Pagination
  page={page}
  totalPages={20}
  onPageChange={setPage}
  siblingCount={1}
/>
```

### Table

```tsx
import { Table } from "@kaiserinc/react";

<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Nome</Table.Head>
      <Table.Head>Status</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Projeto Alpha</Table.Cell>
      <Table.Cell>Ativo</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Card / StatCard

```tsx
import { Card, StatCard } from "@kaiserinc/react";

<Card>
  <Card.Header>
    <Card.Title>Receita Mensal</Card.Title>
  </Card.Header>
  <Card.Content>
    <p>R$ 48.500</p>
  </Card.Content>
</Card>

<StatCard
  title="Usuários Ativos"
  value="1.284"
  delta="+12%"
  deltaDirection="up"
  description="vs mês anterior"
/>
```

### useDisclosure

```tsx
import { useDisclosure } from "@kaiserinc/react";

const { isOpen, open, close, toggle, onOpenChange } = useDisclosure();
```

---

## Theming

```tsx
import { ThemeProvider, useTheme } from "@kaiserinc/react";

// Wrap app
<ThemeProvider defaultTheme="dark">
  {children}
</ThemeProvider>

// Toggle theme
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle</button>;
}
```

Tokens via CSS custom properties — override in `:root` or `[data-theme="dark"]`.

---

## Peer Dependencies

```json
{
  "react": ">=18",
  "react-dom": ">=18"
}
```

## License

MIT © [KaiserInc](https://github.com/KaiserInc)
