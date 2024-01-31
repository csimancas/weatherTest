import {useState, useEffect} from 'react';

const useHome = () => {
  const [searchText, setSearchText] = useState('');
  const [places, setPlaces] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getPlaces = async (text: string) => {
    try {
      const response = await fetch(
        `https://search.reservamos.mx/api/v2/places?q=${text}`,
      );
      if (response.ok) {
        const data = await response.json();
        setPlaces(data);
      } else {
        console.error('Error al obtener lugares:', response.status);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  useEffect(() => {
    if (searchText.length >= 3) {
      getPlaces(searchText);
    } else {
      setPlaces([]);
    }
  }, [searchText]);

  return {
    searchText,
    setSearchText,
    places,
    openModal,
    setOpenModal,
  };
};

export default useHome;
