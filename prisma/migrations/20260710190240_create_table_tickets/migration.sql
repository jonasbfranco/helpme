-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "urgencia" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "criador" TEXT NOT NULL,
    "analista" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);
