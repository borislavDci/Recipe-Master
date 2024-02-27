import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    avatar: { type: String },
    preferences: {
      type: [String],
      enum: ["vegitarian", "non-vegitarian", "vegan"],
    },
    recipes: { type: Array },
    savedRecipes: { type: Array },
    favouriteRecipes: { type: Array },
    comments: { type: Array },
    likes: { type: Array },
  },
  { timestamps: true },
);

export const User = models.User || model("User", userSchema);
