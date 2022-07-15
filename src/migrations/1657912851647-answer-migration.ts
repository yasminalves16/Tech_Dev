import { MigrationInterface, QueryRunner } from "typeorm";

export class answerMigration1657912851647 implements MigrationInterface {
    name = 'answerMigration1657912851647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "commentId" uuid, "userId" uuid, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_8d730381a7e1d7baf7aec45bdcc" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_5a26907efcd78a856c8af5829e6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_5a26907efcd78a856c8af5829e6"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_8d730381a7e1d7baf7aec45bdcc"`);
        await queryRunner.query(`DROP TABLE "answer"`);
    }

}
