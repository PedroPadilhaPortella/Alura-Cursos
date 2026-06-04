import { createContext, useContext, useState } from "react";

import { Adventure } from '../../models/Adventure';

export const AdventuresContext = createContext({
    adventures: [] as Adventure[],
    addAdventure: (adventure: Adventure) => {},
});

export const AdventuresProvider = ({ children }: { children: React.ReactNode }) => {
    const [adventures, setAdventures] = useState<Adventure[]>([]);

    const addAdventure = (adventure: Adventure) => {
        setAdventures([...adventures, adventure]);
    }

  return (
    <AdventuresContext.Provider value={{ adventures, addAdventure }}>
      {children}
    </AdventuresContext.Provider>
  );
};

export const useAdventures = () => {
    const context = useContext(AdventuresContext);

    if (!context) {
        throw new Error("useAdventures must be used within an AdventuresProvider");
    }

    return context;
}