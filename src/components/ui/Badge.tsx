import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { CrownIcon, DownloadIcon, KeyIcon, ShieldIcon } from "@/components/Icons";
import type { BadgeVariants } from "@/styles/recipes/badge";

export const badge = tv({
  slots: {
    root: "inline-flex items-center justify-center rounded-full select-none",
    icon: "block text-brand",
  },
  variants: {
    size: {
      ss: { root: "w-5 h-5",  icon: "w-3 h-3" },
      sm: { root: "w-10 h-10", icon: "w-5 h-5" },
      md: { root: "w-14 h-14", icon: "w-7 h-7" },
      lg: { root: "w-16 h-16", icon: "w-8 h-8" },
      xl: { root: "w-24 h-24", icon: "w-14 h-14" },
    },
    appearance: {
      ghost:   { root: "border-none bg-transparent" },
      soft:    { root: "bg-brand/10 dark:bg-brand/20 border border-brand/20 dark:border-brand/30" },
      outline: { root: "border border-brand/30 dark:border-brand/40" },
      solid:   { root: "bg-brand text-white" },
    },
    intent: {
      crown: {}, download: {}, key: {}, shield: {},
    },
    elevated: { true: { root: "shadow-lg" } },
  },
  compoundVariants: [
    { intent: "shield",  class: { icon: "text-emerald-500 dark:text-emerald-400" } },
    { intent: "key",     class: { icon: "text-amber-500 dark:text-amber-400" } },
  ],
  defaultVariants: { size: "xl", intent: "crown", appearance: "soft" },
});


const ICONS = {
  crown: CrownIcon, download: DownloadIcon, key: KeyIcon, shield: ShieldIcon,
};

export type BadgeProps =
  Omit<HTMLMotionProps<"div">, "color"> &
  VariantProps<typeof badge>;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ intent, size, appearance, elevated, className, ...rest }, ref) => {

    // 1) 인덱싱용으로만 안전한 기본값 보정
    const resolvedIntent: NonNullable<BadgeVariants["intent"]> = intent ?? "crown";

    // 2) tv()는 그대로 undefined를 넘겨도 defaultVariants를 적용함
    const { root, icon } = badge({ intent, size, appearance, elevated });

    // 3) 인덱싱은 보정된 키로
    const Icon = ICONS[resolvedIntent];

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className={twMerge(root(), clsx(className))}
        {...rest}
      >
        <Icon className={icon()} />
      </motion.div>
    );
  }
);
Badge.displayName = "Badge";
export default Badge;