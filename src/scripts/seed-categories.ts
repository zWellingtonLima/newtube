import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Travel and events",
  "Sports",
  "Science and technology",
  "Pets and animals",
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "Music",
  "How-to and style",
  "News an politics",
  "People and blogs",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.log("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
