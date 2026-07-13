import { prisma } from "../../../lib/prisma/prisma.js";

interface CreatePerfil {
  nome: string;
  descricao: string;
}

interface EditPerfil {
  id: number; // ou string, dependendo do tipo do seu schema Prisma
  nome: string;
  descricao: string;
}

export async function createPerfilService(data: CreatePerfil) {

  const perfilExist = await prisma.perfil.findUnique({
      where: {
          nome: data.nome,
      },
  });

  if (perfilExist) {
    throw new Error("Perfil já existe");
  }

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


export async function editPerfisService(data: EditPerfil) {
  
 const perfilExist = await prisma.perfil.findUnique({
      where: {
          id: data.id,
      },
  });

  if (!perfilExist) {
    throw new Error("Perfil não encontrado");
  }

  const perfil = await prisma.perfil.update({
    where: {
      id: data.id,
    },
    data: {
      nome: data.nome,
      descricao: data.descricao,
    }
  });

  return perfil;
}