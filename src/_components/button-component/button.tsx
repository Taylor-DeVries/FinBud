'use client';

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-white relative disabled:opacity-70 disabled:cursor-not-allowed rounded-xl transition bg-blue hover:bg-light_blue p-3"
    >
      <p className="dark:text-[#333]">{label}</p>
    </button>
  );
};

export default Button;
