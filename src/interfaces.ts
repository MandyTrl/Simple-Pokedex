 export interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    types: {
      type : {
        name: string
      }
    }[]
  }///Ici on indique que c'est un objet avec un tableau dedans
  