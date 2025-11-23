import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import { CrownIcon, DownloadIcon, KeyIcon, ShieldIcon } from "@/components/Icons";

export const featureBadge = tv({
  slots: {
    root: "flex items-center gap-1 px-2 py-0.5",
    icon: "block",
    text: "text-xs font-bold tracking-wider"
  },
  variants: {
    size: {
      md: { icon: "w-3 h-3" }
    },
    intent: {
      brand: {
        root: "border-brand/20 bg-brand/10 dark:border-brand/30 dark:bg-brand/20, text-brand",
      },
      success: {
        root: "border-status-success/20 bg-status-success/10 dark:border-status-success/30 dark:bg-status-success/20, text-status-success",
      }
    },
    border: {
      true: { root: "border" }
    },
    shape: {
      square: { root: "rounded-discord" },
      pill: { root: "rounded-full" }
    },
    badge: {
      crown: {}, download: {}, key: {}, shield: {},
    }
  },
  defaultVariants: { size: "md", intent: "brand", border: false, shape: "pill" }
});

const ICONS = {
  crown: CrownIcon, download: DownloadIcon, key: KeyIcon, shield: ShieldIcon,
};

export type FeatureBadgeProps =
  ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof featureBadge> &
  { leftIcon?: ReactNode }

export const FeatureBadge = forwardRef<HTMLSpanElement, FeatureBadgeProps>(
  ({ size, intent, border, shape, className, children, badge, ...rest }, ref) => {


    // 1) 인덱싱용으로만 안전한 기본값 보정
    const resolvedIntent: NonNullable<VariantProps<typeof featureBadge>["badge"]> = badge ?? "crown";
    const { root, icon, text } = featureBadge({ size, intent, border, shape });

    // 3) 인덱싱은 보정된 키로
    const Icon = ICONS[resolvedIntent];



    return (
      <span ref={ref} className={twMerge(root(), className)} {...rest}>
        <Icon className={icon()} />
        <span className={text()}>{children}</span>
      </span>
    );
  }
);

