import { useState } from "react";

interface MenuItemProps {
  id: number;
  icon: JSX.Element;
  title: string;
  isActive: boolean;
  activeThisItem: (id: number) => void;
};

export default function MenuItem(props: MenuItemProps): JSX.Element {
  const {
    id,
    icon,
    title,
    isActive = false,
    activeThisItem
  } = props;

  return (
    <li className={`list ${isActive ? 'active' : ''}`}>
      <a href="#" className="font-secondary font-light text-primary hover:text-tertiary" onClick={(_event) => activeThisItem(id)}>
        <span className="icon">{icon}</span>
        <span className="title">{title}</span>
      </a>
    </li>
  );
};