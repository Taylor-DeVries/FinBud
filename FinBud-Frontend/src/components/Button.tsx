"use client";
import { IconType } from "react-icons";

interface ButtonProps {
    label?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    disabled?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    outline,
    small,
    disabled,
    icon: Icon,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`relative disable:opacity-70 disabled:cursor-not-allowed rounded-xl transition border-dark_blue 
                ${
                    outline
                        ? "bg-white text-dark_blue "
                        : "bg-blue text-white hover:bg-light_blue"
                } 
                ${
                    small
                        ? "p-1 text-sm font-light border-[1px]"
                        : "p-3 text-md font-semibold "
                }
            `}
        >
            {Icon && (
                <Icon
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    size={24}
                />
            )}
            {label}
        </button>
    );
};

export default Button;
