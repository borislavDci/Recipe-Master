import { Schema, model, models } from "mongoose";

const commentSchema = new Schema(
  {
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export const Comment = models.Comment || model("Comment", commentSchema);
