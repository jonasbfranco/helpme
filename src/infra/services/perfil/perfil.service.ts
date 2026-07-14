import { prisma } from "../../../lib/prisma/prisma.js";

interface CreatePerfil {
  nome: string;
  descricao: string;
}

interface EditPerfil {
  id: number; // ou string, dependendo do tipo do seu schema Prisma
  nome: string;
  descricao: string;
  ativo?: boolean;
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


export async function getPerfilUnicoService(id: number) {
  
  const perfis = await prisma.perfil.findUnique({
    where: {
      id,
    },
  });

  return perfis;
}



export async function getPerfilAtivoService() {
  /* const perfis = await prisma.perfil.findMany({
    where: {
      ativo: true,
    },
  }); */

  /* const totalAtivos = await prisma.perfil.count({
    where: {
      ativo: true,
    },
  }); */

  const [perfis, totalAtivos] = await Promise.all([
    prisma.perfil.findMany({
      where: {
        ativo: true,
      },
    }),
    prisma.perfil.count({
      where: {
        ativo: true,
      },
    }),
  ]);

  // return perfis;
  return { perfis, totalAtivos, };
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
      ...(data.ativo !== undefined && { ativo: data.ativo }),
    }
  });

  return perfil;
}

export async function deletePerfilService(id: number){
  
  const perfil = await prisma.perfil.findUnique({
      where: {
          id,
      },
  });


  if (!perfil) {
    throw new Error("Perfil não encontrado");
  }

  if (!perfil.ativo) {
    throw new Error("Perfil já está desativado");
  }

  const perfilAtualizado = await prisma.perfil.update({
    where: {
      id,
    },
    data: {
      ativo: false,
    },
  });

  return perfilAtualizado;

}