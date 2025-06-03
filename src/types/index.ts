import { IconSvgElement } from "@hugeicons/react";

// common props for components
export interface componentProps {
  className?: string;
}

// theme states
export interface ThemeState {
  headingSize: string;
  paragraphSize: string;
}

// icon button props
export interface IconButtonProps extends componentProps {
  icon: IconSvgElement;
}

// sidebar menu item props
export interface SidebarMenuItemProps {
  icon: IconSvgElement;
  label: string;
  isActive: boolean;
  link: string;
}

// events props
export interface AppEvents {
  isMenuOpen: boolean;
}

// sidebar state
export interface headerSearchProps extends componentProps {
  onClick?: () => void;
}

// title bar props
export interface breadcrumbsType {
  label: string;
  link: string;
}
export interface titleBarProps {
  title: string;
  breadcrumbs: breadcrumbsType[];
}

// text input props
export interface TextInputProps extends componentProps {
  icon?: IconSvgElement;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// book information props
export interface BookInformationProps {
  createdAt: string;
  updatedAt: string;
  published: boolean;
  chapters: number;
  groups: number;
}

// meta bar props
export interface MetaBarProps {
  value: number;
  message: string;
}

// chapter header props
export interface ChapterHeaderOptionsType {
  label: string;
  icon: IconSvgElement;
  onClick?: () => void;
}

export interface ChapterHeaderProps {
  name: string;
  options: ChapterHeaderOptionsType[];
}

export interface OptionProps {
  isSelected: boolean;
  disabled?: boolean;
}
