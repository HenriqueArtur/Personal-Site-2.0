// @ts-ignore
import { Identification, Terminal } from '@carbon/icons-react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from 'react';

export default function Profile(): JSX.Element {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, windowDimensions.height], [25, -25]);
  const rotateY = useTransform(x, [0, windowDimensions.width], [-25, 25]);

  function handleMouse(event: any) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const detectSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimensions]);

  return (
    <motion.div
      className=" absolute flex place-items-center place-content-center h-100% inset-0 left-[3rem] m-auto"
      style={{ perspective: 400 }}
      onMouseMove={handleMouse}
    >
      <div>
        <motion.h1
          className="text-5xl text-center"
          style={{ rotateX: rotateX, rotateY: rotateY }}
        >
          Henrique Artur
        </motion.h1>
        <motion.h3
          className="font-secondary font-light text-2xl text-center mt-4"
          style={{ perspective: 400 }}
        >
          Full-Stack Developer
        </motion.h3>
      </div>
    </motion.div>
  );
};