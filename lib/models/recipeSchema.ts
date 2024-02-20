import { Schema, model, models } from "mongoose";

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: Array, required: true },
    cookingTime: { type: Number, required: true },
    difficulty: {
      type: String,
      required: true,
      enum: ["easy", "medium", "hard"],
    },
    servings: { type: Number, required: true },
    tag: { type: Array, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    shares: [{ type: Schema.Types.ObjectId, ref: "User" }],
    addedBy: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    addedInFavouritesBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    steps: [
      {
        stepTitle: { type: String },
        stepDescription: { type: String },
      },
    ],
    image: { type: String, required: true },
    recipeType: {
      type: String,
      required: true,
      enum: ["meal", "snack", "dessert", "drink"],
    },
    category: {
      type: Array,
      required: true,
      enum: ["breakfast", "lunch", "dinner"],
    },
    preferableFor: {
      type: String,
      required: true,
      enum: ["vegetarian", "non-vegetarian", "vegan"],
    },
  },
  { timestamps: true },
);

export const Recipe = models.Recipe || model("Recipe", recipeSchema);
