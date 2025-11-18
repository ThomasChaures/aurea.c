import React from "react";
import Link from "next/link";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  route?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "underline";
}

const Button = ({
  className = "",
  children,
  route,
  onClick,
  disabled = false,
  variant = "default",
}: ButtonProps) => {

  // Base
  let styles = `
    px-6 py-3 rounded-[45px]
    flex items-center justify-center
    font-medium
    gap-[6px]
    cursor-pointer
  `;

  // VARIANT: DEFAULT
  if (variant === "default" && !disabled) {
    styles += " bg-[#0000004D] text-white";
  }

  // VARIANT: UNDERLINE
  if (variant === "underline") {
    styles += " bg-transparent hover:underline text-[#000000CC]";
  }

  // DISABLED
  if (disabled) {
    styles += " bg-black text-white opacity-30 cursor-not-allowed";
  }

  // Agregar className custom
  styles += ` ${className}`;

  // 👉 Si tiene route pero está deshabilitado → no se puede clickear
  if (route && disabled) {
    return <span className={styles}>{children}</span>;
  }

  // 👉 Si tiene route → Link
  if (route) {
    return (
      <Link href={route} className={styles}>
        {children}
      </Link>
    );
  }

  // 👉 Si NO tiene route → Button
  return (
    <button onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
};

export default Button;
