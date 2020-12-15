import React, { useState } from 'react';

const initialPlayer = {
  player: ''
};

export const PlayerContext = React.createContext(initialPlayer);

export const PlayerContextProvider = (props) => {
  const { children } = props;
  const [player, setPlayer] = useState(null);

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
