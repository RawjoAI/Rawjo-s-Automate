import {
  Workflow,
  Bot,
  BarChart3,
  ClipboardList,
  Briefcase,
  Handshake,
  GraduationCap,
  Users,
  Gift,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Bot,
  BarChart3,
  ClipboardList,
  Briefcase,
  Handshake,
  GraduationCap,
  Users,
  Gift,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Briefcase;
}
