import { cocktailsType, cocktailType } from "@/domain/models/cocktail";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/cocktails.json");

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const cocktailId = Number(id);

  const data: cocktailsType = JSON.parse(
    readFileSync(filePath, "utf-8")
  );

  const cocktail = data.find(
    (c: cocktailType) => c.id === cocktailId
  );

  if (!cocktail) {
    return Response.json(
      { message: "Cocktail introuvable" },
      { status: 404 }
    );
  }

  return Response.json(cocktail);
}

export async function PUT(req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updatedCocktail = await req.json();

  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  const updated = data.map((c: cocktailType) =>
    c.id === Number(id) ? { ...c, ...updatedCocktail } : c
  );

  writeFileSync(filePath, JSON.stringify(updated, null, 2));

  return Response.json(updated);
}

export async function DELETE(req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const data = JSON.parse(readFileSync(filePath, "utf-8"));

  const filtered = data.filter((c: cocktailType) => c.id !== Number(id));

  writeFileSync(filePath, JSON.stringify(filtered, null, 2));

  return Response.json(filtered);
}