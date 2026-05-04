// ─── Utilities ───────────────────────────────────────────────────────────────
export { cn } from "./utils/cn.js";
export { Portal } from "./utils/portal.js";
export type { PortalProps } from "./utils/portal.js";

// ─── Hooks ───────────────────────────────────────────────────────────────────
export { useDisclosure } from "./utils/useDisclosure.js";
export type { UseDisclosureReturn } from "./utils/useDisclosure.js";

// ─── Brand ───────────────────────────────────────────────────────────────────
export { Logo } from "./components/Logo/index.js";
export type { LogoProps, LogoVariant, LogoSize } from "./components/Logo/index.js";

// ─── Providers ───────────────────────────────────────────────────────────────
export { ThemeProvider, useTheme } from "./components/ThemeProvider/index.js";
export type { ThemeProviderProps, Theme } from "./components/ThemeProvider/index.js";

// ─── Primitives ──────────────────────────────────────────────────────────────
export { Button } from "./components/Button/index.js";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./components/Button/index.js";

export { Badge } from "./components/Badge/index.js";
export type { BadgeProps, BadgeVariant, BadgeSize } from "./components/Badge/index.js";

export { Avatar } from "./components/Avatar/index.js";
export type { AvatarProps, AvatarSize } from "./components/Avatar/index.js";

export { Input } from "./components/Input/index.js";
export type { InputProps } from "./components/Input/index.js";

export { Switch } from "./components/Switch/index.js";
export type { SwitchProps, SwitchSize } from "./components/Switch/index.js";

export { Checkbox } from "./components/Checkbox/index.js";
export type { CheckboxProps, CheckboxSize } from "./components/Checkbox/index.js";

export { Textarea } from "./components/Textarea/index.js";
export type { TextareaProps, TextareaResize } from "./components/Textarea/index.js";

export { Select } from "./components/Select/index.js";
export type { SelectProps, SelectOption } from "./components/Select/index.js";

export { Separator } from "./components/Separator/index.js";
export type { SeparatorProps } from "./components/Separator/index.js";

export { Progress } from "./components/Progress/index.js";
export type { ProgressProps, ProgressSize, ProgressVariant } from "./components/Progress/index.js";

export { Alert } from "./components/Alert/index.js";
export type { AlertProps, AlertVariant } from "./components/Alert/index.js";

export { Tabs, TabList, Tab, TabPanel } from "./components/Tabs/index.js";
export type { TabsProps, TabListProps, TabProps, TabPanelProps } from "./components/Tabs/index.js";

export { Tooltip } from "./components/Tooltip/index.js";
export type { TooltipProps, TooltipPlacement } from "./components/Tooltip/index.js";

// ─── Feedback ────────────────────────────────────────────────────────────────
export { Spinner } from "./components/Spinner/index.js";
export type { SpinnerProps, SpinnerSize, SpinnerVariant } from "./components/Spinner/index.js";

export { Skeleton } from "./components/Skeleton/index.js";
export type { SkeletonProps } from "./components/Skeleton/index.js";

export { Toaster, toast } from "./components/Toast/index.js";
export type { ToasterProps } from "./components/Toast/index.js";

// ─── Form Components ─────────────────────────────────────────────────────────
export { RadioGroup, RadioItem } from "./components/RadioGroup/index.js";
export type { RadioGroupProps, RadioItemProps } from "./components/RadioGroup/index.js";

export { Form, FormRoot, FormField, FormLabel, FormControl, FormMessage, FormSubmit } from "./components/Form/index.js";
export type { FormRootProps, FormFieldProps, FormLabelProps, FormControlProps, FormMessageProps, FormSubmitProps } from "./components/Form/index.js";

// ─── Disclosure ───────────────────────────────────────────────────────────────
export { Accordion, AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "./components/Accordion/index.js";
export type { AccordionRootProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from "./components/Accordion/index.js";

export { Dialog, DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "./components/Dialog/index.js";
export type { DialogRootProps, DialogTriggerProps, DialogContentProps, DialogHeaderProps, DialogTitleProps, DialogDescriptionProps, DialogBodyProps, DialogFooterProps, DialogCloseProps } from "./components/Dialog/index.js";

export { Sheet, SheetRoot, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetBody, SheetFooter, SheetClose } from "./components/Sheet/index.js";
export type { SheetRootProps, SheetTriggerProps, SheetContentProps, SheetHeaderProps, SheetTitleProps, SheetBodyProps, SheetFooterProps, SheetCloseProps, SheetPlacement } from "./components/Sheet/index.js";

export { Popover, PopoverRoot, PopoverTrigger, PopoverContent } from "./components/Popover/index.js";
export type { PopoverRootProps, PopoverTriggerProps, PopoverContentProps, PopoverPlacement } from "./components/Popover/index.js";

export { DropdownMenu, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./components/DropdownMenu/index.js";
export type { DropdownMenuRootProps, DropdownMenuTriggerProps, DropdownMenuContentProps, DropdownMenuItemProps, DropdownMenuLabelProps, DropdownMenuSeparatorProps } from "./components/DropdownMenu/index.js";

// ─── Data Display ─────────────────────────────────────────────────────────────
export { Breadcrumb } from "./components/Breadcrumb/index.js";
export type { BreadcrumbProps, BreadcrumbItemDef } from "./components/Breadcrumb/index.js";

export { Table, TableRoot, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "./components/Table/index.js";
export type { TableRootProps, TableHeaderProps, TableBodyProps, TableRowProps, TableHeadProps, TableCellProps, TableCaptionProps } from "./components/Table/index.js";

export { Pagination } from "./components/Pagination/index.js";
export type { PaginationProps } from "./components/Pagination/index.js";

export { EmptyState } from "./components/EmptyState/index.js";
export type { EmptyStateProps } from "./components/EmptyState/index.js";

// ─── Layout & Containers ─────────────────────────────────────────────────────
export { Card, CardHeader, CardTitle, CardBody } from "./components/Card/index.js";
export type { CardProps, CardHeaderProps, CardTitleProps, CardBodyProps } from "./components/Card/index.js";

// ─── Dashboard ───────────────────────────────────────────────────────────────
export { StatCard } from "./components/StatCard/index.js";
export type { StatCardProps, TrendDirection } from "./components/StatCard/index.js";

export { TopBar } from "./components/TopBar/index.js";
export type { TopBarProps, BreadcrumbItem } from "./components/TopBar/index.js";

export { Sidebar } from "./components/Sidebar/index.js";
export type { SidebarProps, SidebarItem, SidebarSection } from "./components/Sidebar/index.js";
