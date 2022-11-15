// @ts-ignore
import { Home, FaceWink, Catalog, LocationHeart } from '@carbon/icons-react';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { PageContext } from '../../contexts/PageContext';
import { Title } from '../Title';
import MenuItem from './MenuItem';

import './style.scss'

const startMenuItens: Item[] = [
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

interface Item {
  id: number;
  title: Title;
  icon: JSX.Element;
  isActive: boolean;
}

export default function Menu(): JSX.Element {
  const INITIAL_POS = 5;
  const UNITY_IN_PIXES = 50;

  const [menuItens, setMenuItens] = useState(startMenuItens);
  const [indicatorPosition, setIndicatorPosition] = useState(INITIAL_POS);

  const { updateTitle } = useContext(PageContext);

  function handlerNewActive(id: number) {
    const newMenuItens: Item[] =
      menuItens.map((i) => ({ ...i, isActive: i.id == id ? true : false }));

    setIndicatorPosition(INITIAL_POS + (id * UNITY_IN_PIXES));
    setMenuItens(newMenuItens);

    const currentItem = menuItens.find((i) => i.id == id) as Item;
    updateTitle(currentItem.title);
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