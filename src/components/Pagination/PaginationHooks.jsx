import { useEffect, useState } from 'react';

const useItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const determineItemsPerPage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768 && windowWidth <= 1439) {
        return 9;
      } else if (windowWidth < 375 || windowWidth >= 1440) {
        return 10;
      } else {
        return 10;
      }
    };

    const handleResize = () => {
      setItemsPerPage(determineItemsPerPage());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return itemsPerPage;
};

export default useItemsPerPage;
