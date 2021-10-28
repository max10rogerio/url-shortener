import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 9999,
  mongo_uri:
    process.env.MONGO_URI ||
    "mongodb://dbuser:123456@localhost:27017/urlshortener",
};
