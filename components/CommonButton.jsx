import Link from "next/link";
import "./CommonButton.css";

export default function CommonButton({ children,
    onClick,
    variant = "primary",
    size = "medium",
    disabled = false,
    type = "button",
    href,
    target,
    className = ""
}) {
    const buttonClasses = `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`.trim();
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={buttonClasses}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
            >
                {children}
                {target === "_blank" && <span className="external-indicator">↗</span>}
            </a>
        );
    }
    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}