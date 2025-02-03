import mongoose from 'mongoose';
import pokemonSchema from '../schema/db.schema.js'; 

const RegularPokemon = mongoose.model('regular', pokemonSchema);
const ShinyPokemon = mongoose.model('shiny', pokemonSchema);
const AlolanPokemon = mongoose.model('alolan', pokemonSchema);
const HisuianPokemon = mongoose.model('hisuian', pokemonSchema);
const MegaPokemon = mongoose.model('mega', pokemonSchema);
const GalarPokemon = mongoose.model('galar', pokemonSchema);
const GmaxPokemon = mongoose.model('gmax', pokemonSchema);
const MegaShinyPokemon = mongoose.model('megaShiny', pokemonSchema);
const MultiFormPokemon = mongoose.model('multiForm', pokemonSchema);
const ShadowPokemon = mongoose.model('shadow', pokemonSchema);
const UniquePokemon = mongoose.model('unique', pokemonSchema);
const XyPokemon = mongoose.model('xy', pokemonSchema);
const PrimalPokemon = mongoose.model('primal', pokemonSchema);
const OriginPokemon = mongoose.model('origin', pokemonSchema);

export {
  RegularPokemon,
  ShinyPokemon,
  AlolanPokemon,
  HisuianPokemon,
  MegaPokemon,
  GalarPokemon,
  GmaxPokemon,
  MegaShinyPokemon,
  MultiFormPokemon,
  ShadowPokemon,
  UniquePokemon,
  XyPokemon,
  PrimalPokemon,
  OriginPokemon,
};