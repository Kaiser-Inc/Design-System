# @kaiserinc/react-native

> 10 React Native components com tokens JS — dark mode por padrão, Expo ready.

## Install

```bash
pnpm add @kaiserinc/tokens @kaiserinc/react-native
```

## Components

`Button` `Input` `Badge` `Avatar` `Card` `Switch` `Checkbox` `Spinner` `Separator` `Text`

---

## Usage

### Button

```tsx
import { Button } from "@kaiserinc/react-native";

<Button onPress={() => console.log("pressed")}>Salvar</Button>
<Button variant="outline" size="sm">Cancelar</Button>
<Button variant="ghost" loading>Carregando...</Button>
<Button variant="destructive">Deletar</Button>
```

Variants: `default` `outline` `ghost` `destructive`  
Sizes: `sm` `md` `lg`

### Input

```tsx
import { Input } from "@kaiserinc/react-native";

<Input
  placeholder="Digite seu email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>

<Input
  placeholder="Senha"
  secureTextEntry
  error="Senha inválida"
/>
```

### Badge

```tsx
import { Badge } from "@kaiserinc/react-native";

<Badge variant="success">Ativo</Badge>
<Badge variant="danger">Erro</Badge>
<Badge variant="warning">Pendente</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="default">Padrão</Badge>
```

### Avatar

```tsx
import { Avatar } from "@kaiserinc/react-native";

<Avatar source={{ uri: "https://example.com/avatar.png" }} size="md" />
<Avatar fallback="JS" size="lg" />
```

Sizes: `sm` (32) `md` (40) `lg` (56) `xl` (80)

### Card

```tsx
import { Card } from "@kaiserinc/react-native";

<Card>
  <Card.Header>
    <Card.Title>Projeto Alpha</Card.Title>
    <Card.Description>Descrição do projeto</Card.Description>
  </Card.Header>
  <Card.Body>
    <Text preset="body">Conteúdo do card</Text>
  </Card.Body>
  <Card.Footer>
    <Button size="sm">Ver mais</Button>
  </Card.Footer>
</Card>
```

### Switch

```tsx
import { Switch } from "@kaiserinc/react-native";

<Switch value={enabled} onValueChange={setEnabled} />
<Switch value={enabled} onValueChange={setEnabled} disabled />
```

### Checkbox

```tsx
import { Checkbox } from "@kaiserinc/react-native";

<Checkbox checked={accepted} onPress={() => setAccepted(!accepted)} label="Aceito os termos" />
```

### Spinner

```tsx
import { Spinner } from "@kaiserinc/react-native";

<Spinner size="md" variant="brand" />
<Spinner size="lg" variant="white" />
```

Sizes: `sm` `md` `lg`  
Variants: `default` `brand` `white`

### Separator

```tsx
import { Separator } from "@kaiserinc/react-native";

<Separator />
<Separator orientation="vertical" />
```

### Text

```tsx
import { Text } from "@kaiserinc/react-native";

<Text preset="h1">Título</Text>
<Text preset="h2">Subtítulo</Text>
<Text preset="body">Corpo do texto</Text>
<Text preset="caption">Legenda</Text>
<Text preset="label">Label</Text>
```

Presets: `h1` `h2` `h3` `body` `bodySmall` `caption` `label` `overline`

---

## Tokens

Tokens JS com hex hardcoded — sem CSS custom properties.

```ts
import { colors, spacing, radii, typography } from "@kaiserinc/react-native/tokens";

colors.purple[500] // "#8257e6"
colors.brand      // "#8257e6"
spacing[4]        // 16
radii.md          // 8
```

Dark mode por padrão. Para suporte dinâmico, injete `colorScheme` nos tokens.

---

## Peer Dependencies

```json
{
  "react": ">=18",
  "react-native": ">=0.73"
}
```

Compatível com **Expo SDK 50+**.

## License

MIT © [KaiserInc](https://github.com/KaiserInc)
