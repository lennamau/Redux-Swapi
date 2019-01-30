import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      <h2>Star Wars Characters</h2>
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
    </div>

  );
};

export default CharacterList;
