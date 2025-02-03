import mongoose from 'mongoose';

const regularSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const shinySchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const alolanSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const hisuianSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const megaSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const galarSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const gmaxSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const megaShinySchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const multiFormSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const shadowSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const uniqueSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const xySchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const primalSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

const originSchema = new mongoose.Schema({
  id: Number,
  name: String,
  model: String,
});

export default {
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
};