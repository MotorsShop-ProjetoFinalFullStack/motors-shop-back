import { MigrationInterface, QueryRunner } from "typeorm";

export class FixAnnouncementTable1688665806438 implements MigrationInterface {
    name = 'FixAnnouncementTable1688665806438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "image" character varying(255) NOT NULL`);
    }

}
