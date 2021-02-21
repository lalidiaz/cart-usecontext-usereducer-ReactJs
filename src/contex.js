import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext
} from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);

  return (
    <AppContext.Provider
      value={{
        cart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
