import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserAndAddressTable1686754479309 implements MigrationInterface {
    name = 'CreateUserAndAddressTable1686754479309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(255) NOT NULL, "number" character varying(10) NOT NULL, "complement" character varying(100), "cep" character varying(9) NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "userId" uuid, CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_typeuser_enum" AS ENUM('Comprador', 'Anunciante')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(80) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(11) NOT NULL, "birthdate" date NOT NULL, "description" character varying(350), "typeUser" "public"."users_typeuser_enum" NOT NULL DEFAULT 'Comprador', "password" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_typeuser_enum"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
