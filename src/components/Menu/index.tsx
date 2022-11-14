// @ts-ignore
import { Home, FaceWink, Catalog, LocationHeart } from '@carbon/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MenuItem from './MenuItem';

import './style.scss'

const startMenuItens = [
  {
    id: 0,
    title: "Hello World",
    icon: <Home size="24" />,
    isActive: true
  },
  {
    id: 1,
    title: "About",
    icon: <FaceWink size="24" />,
    isActive: false
  },
  {
    id: 2,
    title: "Contact",
    icon: <Catalog size="24" />,
    isActive: false
  },
  {
    id: 3,
    title: "This Project",
    icon: <LocationHeart size="24" />,
    isActive: false
  }
];

export default function Menu(): JSX.Element {
  const INITIAL_POS = 5;
  const UNITY_IN_PIXES = 50;
  const [menuItens, setMenuItens] = useState(startMenuItens);
  const [indicatorPosition, setIndicatorPosition] = useState(INITIAL_POS);

  function handlerNewActive(id: number) {
    const newMenuItens =
      menuItens.map((i) => ({ ...i, isActive: i.id == id ? true : false }));

    setIndicatorPosition(INITIAL_POS + id * UNITY_IN_PIXES);
    setMenuItens(newMenuItens);
  };

  return (
    <div className="menu bg-selections h-screen flex justify-center items-baseline">
      <div className="navigation self-center">
        <ul>
          {menuItens.map((i) => <MenuItem {...i} key={i.id} activeThisItem={handlerNewActive} />)}
          <motion.div className="indicator" animate={{ top: indicatorPosition }} />
        </ul>
      </div>
    </div>
  );
};