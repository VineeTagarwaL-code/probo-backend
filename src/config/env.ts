/**
 *
 * @description - Environment variables
 *
 *
 */
import "dotenv/config";
import { TConfigProp } from "../types";
export const config: TConfigProp = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT!) || 3000,
};
