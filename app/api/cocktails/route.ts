import { cocktailType } from "@/domain/models/cocktail";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/cocktails.json");

export async function GET() {
  const data = readFileSync(filePath, "utf-8");
  return Response.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const newCocktail: cocktailType = await req.json();

  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  const updated = [
    ...data,
    { ...newCocktail, id: Date.now() }
  ];

  writeFileSync(filePath, JSON.stringify(updated, null, 2));

  return Response.json(updated);
}