import { MigrationInterface, QueryRunner } from "typeorm";

export class FixUserTableAddOnDelete1687461724074 implements MigrationInterface {
    name = 'FixUserTableAddOnDelete1687461724074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "fuel"`);
        await queryRunner.query(`CREATE TYPE "public"."announcement_fuel_enum" AS ENUM('Gasolina', 'Álcool', 'Flex', 'Diesel', 'Elétrico')`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "fuel" "public"."announcement_fuel_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "fuel"`);
        await queryRunner.query(`DROP TYPE "public"."announcement_fuel_enum"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "fuel" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
