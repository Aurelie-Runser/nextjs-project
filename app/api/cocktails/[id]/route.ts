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
  try {
    const { id } = await params;

    const data: cocktailsType = JSON.parse(readFileSync(filePath, "utf-8"));

    const exists = data.some((c) => c.id === Number(id));

    if (!exists) {
      return new Response(null, {
        status: 404,
        statusText: "Cocktail not found",
      });
    }

    const filtered = data.filter((c) => c.id !== Number(id));

    writeFileSync(filePath, JSON.stringify(filtered, null, 2));

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error(error);

    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}