import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateMigration1686103362219 implements MigrationInterface {
    name = 'UpdateMigration1686103362219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."announcement_fuel_enum" AS ENUM('Gasolina', 'Álcool', 'Flex', 'Diesel', 'Elétrico')`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(50) NOT NULL, "model" character varying(10) NOT NULL, "year" date NOT NULL, "fuel" "public"."announcement_fuel_enum" NOT NULL, "km" integer NOT NULL, "color" character varying(30) NOT NULL, "fipePrice" integer NOT NULL, "price" integer NOT NULL, "description" text NOT NULL, "image" character varying(255) NOT NULL, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TYPE "public"."announcement_fuel_enum"`);
    }

}
