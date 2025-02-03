import mongoose from 'mongoose';
import dbSchemas from '../schema/db.schema.js';

const { 
  regularSchema,
  shinySchema,
  alolanSchema,
  hisuianSchema,
  megaSchema,
  galarSchema,
  gmaxSchema,
  megaShinySchema,
  multiFormSchema,
  shadowSchema,
  uniqueSchema,
  xySchema,
  primalSchema,
  originSchema,
} = dbSchemas;

const RegularPokemon = mongoose.model('regular', regularSchema);
const ShinyPokemon = mongoose.model('shiny', shinySchema);
const AlolanPokemon = mongoose.model('alolan', alolanSchema);
const HisuianPokemon = mongoose.model('hisuian', hisuianSchema);
const MegaPokemon = mongoose.model('mega', megaSchema);
const GalarPokemon = mongoose.model('galar', galarSchema);
const GmaxPokemon = mongoose.model('gmax', gmaxSchema);
const MegaShinyPokemon = mongoose.model('megaShiny', megaShinySchema);
const MultiFormPokemon = mongoose.model('multiForm', multiFormSchema);
const ShadowPokemon = mongoose.model('shadow', shadowSchema);
const UniquePokemon = mongoose.model('unique', uniqueSchema);
const XyPokemon = mongoose.model('xy', xySchema);
const PrimalPokemon = mongoose.model('primal', primalSchema);
const OriginPokemon = mongoose.model('origin', originSchema);

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