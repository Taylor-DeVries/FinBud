import React from 'react';

interface ServerButtonProps {
  label?: string;
  href: string;
  disabled?: boolean;
}

const ServerButton: React.FC<ServerButtonProps> = ({ label, href, disabled }) => {
  return (
    <a
      href={href}
      className={`text-white relative disabled:opacity-70 disabled:cursor-not-allowed rounded-xl transition bg-blue hover:bg-light_blue p-3 block ${disabled ? 'pointer-events-none' : ''}`}
    >
      <p className="dark:text-[#333]">{label}</p>
    </a>
  );
};

export default ServerButton; 