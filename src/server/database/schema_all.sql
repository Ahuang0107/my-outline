drop table if exists documents;
create table if not exists documents
(
    "id"        uuid                     not null primary key,
    "urlId"     varchar                  not null unique,
    "title"     varchar                  not null,
    "text"      text,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    "deletedAt" timestamp with time zone null
);

drop table if exists users;
create table if not exists users
(
    "id"        uuid                     not null primary key,
    "email"     varchar(255)             null default null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    "deletedAt" timestamp with time zone null
);
