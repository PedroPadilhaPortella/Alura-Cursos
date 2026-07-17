import db from "../../../../../../prisma/db";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request, { params}) {
  try {
    const { id } = await params;
    const parentId = Number(id);

     await sleep(2000); // ⚠️ apenas para testar o spinner, remover depois

    const replies = await db.comment.findMany({
      where: { parentId },
      include: { author: true }
    });

    return Response.json(replies)
  } catch (error) {
    console.error("Erro ao buscar respostas:", error);
    return Response.json(
      { error: "Erro ao buscar respostas" },
      { status: 500 },
    );
  }
}