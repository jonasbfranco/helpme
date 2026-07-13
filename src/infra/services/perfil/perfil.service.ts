import { prisma } from "../../../lib/prisma/prisma.js";

interface CreatePerfil {
  nome: string;
  descricao: string;
}

export async function createPerfilService(data: CreatePerfil) {
  const perfil = await prisma.perfil.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
    }
  });

  console.log("Perfil criado:", perfil);

  return {
    perfil,
  };
}

export async function getPerfisService() {
  const perfis = await prisma.perfil.findMany();

  return perfis;
}
