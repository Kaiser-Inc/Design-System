// ─── Utilities ───────────────────────────────────────────────────────────────
export { cn } from "./utils/cn.js";

// ─── Primitives ──────────────────────────────────────────────────────────────
export { Button } from "./components/Button/index.js";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./components/Button/index.js";

export { Badge } from "./components/Badge/index.js";
export type { BadgeProps, BadgeVariant, BadgeSize } from "./components/Badge/index.js";

export { Avatar } from "./components/Avatar/index.js";
export type { AvatarProps, AvatarSize } from "./components/Avatar/index.js";

export { Input } from "./components/Input/index.js";
export type { InputProps } from "./components/Input/index.js";

// ─── Layout & Containers ─────────────────────────────────────────────────────
export { Card, CardHeader, CardTitle, CardBody } from "./components/Card/index.js";
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardBodyProps,
} from "./components/Card/index.js";

// ─── Dashboard ───────────────────────────────────────────────────────────────
export { StatCard } from "./components/StatCard/index.js";
export type { StatCardProps, TrendDirection } from "./components/StatCard/index.js";

export { TopBar } from "./components/TopBar/index.js";
export type { TopBarProps, BreadcrumbItem } from "./components/TopBar/index.js";

export { Sidebar } from "./components/Sidebar/index.js";
export type { SidebarProps, SidebarItem, SidebarSection } from "./components/Sidebar/index.js";
