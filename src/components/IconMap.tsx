import {
  Workflow,
  Bot,
  BarChart3,
  ClipboardList,
  Briefcase,
  Handshake,
  GraduationCap,
  Users,
  Building2,
  Car,
  Stethoscope,
  Factory,
  Scissors,
  Sparkles,
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
  Building2,
  Car,
  Stethoscope,
  Factory,
  Scissors,
  Sparkles,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Briefcase;
}