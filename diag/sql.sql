-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/6jB3zk
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Post" (
    "ID" UUID   NOT NULL,
    "title:" string;   NOT NULL,
    "name" string   NOT NULL,
    "description" string   NOT NULL,
    "technology_name" string   NULL,
    "medium" string   NULL,
    "level" string   NULL,
    "tags" object   NULL,
    "type" string   NULL,
    "media_link" string   NULL,
    "author" string   NULL,
    "created_at" Date   NULL,
    "updated_at" Date   NULL,
    "technologyId" uuid   NULL,
    "ownderId" uuid   NULL,
    "votes:" string   NULL,
    "views:" string   NULL,
    CONSTRAINT "pk_Post" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "PostType" (
    "ID" UUID   NOT NULL,
    "name" string   NOT NULL,
    "description:" string   NOT NULL,
    "pay_type" string   NULL,
    CONSTRAINT "pk_PostType" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "User" (
    "ID" UUID   NOT NULL,
    "user_id:" string   NOT NULL,
    "email:" string   NOT NULL,
    "last_login:" date   NOT NULL,
    "provider:" string   NULL,
    "badge:" string   NULL,
    CONSTRAINT "pk_User" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Bookmarks" (
    "ID" UUID   NOT NULL,
    "message:" string   NOT NULL,
    "postId" uuid   NULL,
    "userId" uuid   NULL,
    CONSTRAINT "pk_Bookmarks" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Notifications" (
    "ID" UUID   NOT NULL,
    "message:" string   NOT NULL,
    "userId" uuid   NULL,
    CONSTRAINT "pk_Notifications" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Comments" (
    "ID" UUID   NOT NULL,
    "message:" string   NOT NULL,
    "postId" uuid   NULL,
    "userId" uuid   NULL,
    "replyId" uuid   NULL,
    CONSTRAINT "pk_Comments" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Ratings" (
    "ID" UUID   NOT NULL,
    "ratings:" string   NOT NULL,
    "comments:" string   NULL,
    "postId:" uuid   NULL,
    "userId:" uuid   NULL,
    CONSTRAINT "pk_Ratings" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Technologies" (
    "ID" UUID   NOT NULL,
    "techonology_name:" string   NOT NULL,
    "icon:" string   NOT NULL,
    "banner:" string   NULL,
    "parentId" uuid   NULL,
    CONSTRAINT "pk_Technologies" PRIMARY KEY (
        "ID"
     ),
    CONSTRAINT "uc_Technologies_techonology_name:" UNIQUE (
        "techonology_name:"
    )
);

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_type" FOREIGN KEY("type")
REFERENCES "PostType" ("ID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_technologyId" FOREIGN KEY("technologyId")
REFERENCES "Technologies" ("ID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_ownderId" FOREIGN KEY("ownderId")
REFERENCES "User" ("ID");

ALTER TABLE "Bookmarks" ADD CONSTRAINT "fk_Bookmarks_postId" FOREIGN KEY("postId")
REFERENCES "Post" ("ID");

ALTER TABLE "Bookmarks" ADD CONSTRAINT "fk_Bookmarks_userId" FOREIGN KEY("userId")
REFERENCES "User" ("ID");

ALTER TABLE "Notifications" ADD CONSTRAINT "fk_Notifications_userId" FOREIGN KEY("userId")
REFERENCES "User" ("ID");

ALTER TABLE "Comments" ADD CONSTRAINT "fk_Comments_postId" FOREIGN KEY("postId")
REFERENCES "Post" ("ID");

ALTER TABLE "Comments" ADD CONSTRAINT "fk_Comments_userId" FOREIGN KEY("userId")
REFERENCES "User" ("ID");

ALTER TABLE "Comments" ADD CONSTRAINT "fk_Comments_replyId" FOREIGN KEY("replyId")
REFERENCES "Comments" ("ID");

ALTER TABLE "Ratings" ADD CONSTRAINT "fk_Ratings_postId:" FOREIGN KEY("postId:")
REFERENCES "Post" ("ID");

ALTER TABLE "Ratings" ADD CONSTRAINT "fk_Ratings_userId:" FOREIGN KEY("userId:")
REFERENCES "User" ("ID");

ALTER TABLE "Technologies" ADD CONSTRAINT "fk_Technologies_parentId" FOREIGN KEY("parentId")
REFERENCES "Technologies" ("ID");

CREATE INDEX "idx_Post_name"
ON "Post" ("name");

CREATE INDEX "idx_PostType_name"
ON "PostType" ("name");

