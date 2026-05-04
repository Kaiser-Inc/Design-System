"use client";
import { createContext, useContext } from "react";
import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cn } from "../../utils/cn.js";

interface TableContextValue { striped: boolean; hoverable: boolean; }
const TableContext = createContext<TableContextValue>({ striped: false, hoverable: false });

export interface TableRootProps extends HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  className?: string;
}
function TableRoot({ striped = false, hoverable = false, className, children, ...props }: TableRootProps) {
  return (
    <TableContext.Provider value={{ striped, hoverable }}>
      <div className="w-full overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border-subtle)]">
        <table className={cn("w-full text-sm border-collapse", className)} {...props}>{children}</table>
      </div>
    </TableContext.Provider>
  );
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}
function TableHeader({ className, children, ...props }: TableHeaderProps) {
  return <thead className={cn("bg-[var(--bg-elevated)] border-b border-[var(--border-default)]", className)} {...props}>{children}</thead>;
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
function TableBody({ className, children, ...props }: TableBodyProps) {
  return <tbody className={cn("divide-y divide-[var(--border-subtle)]", className)} {...props}>{children}</tbody>;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> { index?: number; }
function TableRow({ className, children, index, ...props }: TableRowProps) {
  const { striped, hoverable } = useContext(TableContext);
  return (
    <tr
      className={cn(
        "transition-colors duration-[var(--duration-fast)]",
        striped && index !== undefined && index % 2 === 1 && "bg-[var(--bg-elevated)]/40",
        hoverable && "hover:bg-[var(--bg-elevated)]/60",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {}
function TableHead({ className, children, ...props }: TableHeadProps) {
  return (
    <th className={cn("px-4 py-3 text-left text-xs font-semibold text-[var(--fg-4)] uppercase tracking-wider", className)} {...props}>{children}</th>
  );
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}
function TableCell({ className, children, ...props }: TableCellProps) {
  return <td className={cn("px-4 py-3 text-[var(--fg-2)]", className)} {...props}>{children}</td>;
}

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}
function TableCaption({ className, children, ...props }: TableCaptionProps) {
  return <caption className={cn("py-2 text-xs text-[var(--fg-4)] text-left px-4", className)} {...props}>{children}</caption>;
}

export const Table = Object.assign(TableRoot, {
  Header: TableHeader, Body: TableBody, Row: TableRow, Head: TableHead, Cell: TableCell, Caption: TableCaption,
});
export { TableRoot, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption };
