create table if not exists documents
(
    id          uuid                     not null,
    title       varchar                  not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    "deletedAt" timestamp with time zone null,
    primary key (id)
);
