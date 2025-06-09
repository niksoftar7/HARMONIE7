// src/components/PageWrapper.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
        key={pathname}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >

          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
