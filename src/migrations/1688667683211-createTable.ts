import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1688667683211 implements MigrationInterface {
    name = 'CreateTable1688667683211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "image" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "image" character varying(255) NOT NULL`);
    }

}
