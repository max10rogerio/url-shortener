import mongoose from "mongoose";

export type URLModelFields = {
  _id: string;
  short_name: string;
  original_url: string;
  used_times: number;
  created_at: Date;
  updated_at: Date;
};

const URLSchema = new mongoose.Schema<URLModelFields>(
  {
    short_name: {
      type: String,
      trim: true,
      unique: true,
    },
    original_url: {
      type: String,
      trim: true,
    },
    used_times: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export type URLModelType = mongoose.Model<URLModelFields>;

export const URLModel: URLModelType = mongoose.model("url", URLSchema);
