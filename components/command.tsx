import React, { ReactNode } from 'react';

interface CommandItemProps {
  children: ReactNode;
  onSelect?: () => void;
  className?: string;
  disabled?: boolean;
}

const CommandItem: React.FC<CommandItemProps> = ({ children, onSelect, className, disabled }) => {
  return (
    <div
      className={`
        relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none 
        aria-selected:bg-accent aria-selected:text-accent-foreground 
        data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50
        ${className}
      `}
      onClick={onSelect}
      role="button"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {children}
    </div>
  );
};

export default CommandItem;

