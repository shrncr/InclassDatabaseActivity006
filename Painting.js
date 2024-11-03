const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  color: {
    red: { type: Number, required: true },
    green: { type: Number, required: true },
    blue: { type: Number, required: true },
  },
  web: { type: String, required: false },
  name: { type: String, required: false }
});

const SafeSearchAnnotationSchema = new mongoose.Schema({
  violence: { type: Number, required: false },
  racy: { type: Number, required: false }
});

const JsonAnnotationsSchema = new mongoose.Schema({
  safeSearchAnnotation: SafeSearchAnnotationSchema,
  dominantColors: [ColorSchema]
});

const PaintingSchema = new mongoose.Schema({
  PaintingID: { type: Number, required: true },
  ArtistID: { type: Number, required: true },
  FirstName: { type: String, default: null },
  LastName: { type: String, required: false },
  ImageFileName: { type: String, required: false },
  Title: { type: String, required: false },
  GalleryID: { type: Number, required: false },
  GalleryName: { type: String, required: false },
  GalleryCity: { type: String, required: false },
  GalleryCountry: { type: String, required: false },
  Latitude: { type: Number, required: false },
  Longitude: { type: Number, required: false },
  ShapeID: { type: Number, required: false },
  MuseumLink: { type: String, required: false },
  AccessionNumber: { type: String, required: false },
  CopyrightText: { type: String, required: false },
  Description: { type: String, required: false },
  Excerpt: { type: String, required: false },
  YearOfWork: { type: Number, required: false },
  Width: { type: Number, required: false },
  Height: { type: Number, required: false },
  Medium: { type: String, required: false },
  Cost: { type: Number, required: false },
  MSRP: { type: Number, required: false },
  WikiLink: { type: String, default: null },
  JsonAnnotations: JsonAnnotationsSchema,
  ShapeName: { type: String, required: false }
});

const Painting = mongoose.model('Paintings', PaintingSchema);

module.exports = Painting;
