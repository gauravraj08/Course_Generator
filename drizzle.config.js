/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://accounts:fGEscg5qT8aU@ep-raspy-star-a5f0mi2q-pooler.us-east-2.aws.neon.tech/AI-Course-Gen?sslmode=require",
  },
};
