ALTER TABLE "todo" DROP COLUMN "items";

ALTER TABLE "todo"
ADD COLUMN "items" jsonb NOT NULL DEFAULT '[]'::jsonb;