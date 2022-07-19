create table if not exists documents
(
    id          uuid                     not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    "deletedAt" timestamp with time zone null,
    primary key (id),
    title       varchar(255)             not null
);

create table if not exists users
(
    id          uuid                     not null,
    "createdAt" timestamp with time zone not null,
    "updatedAt" timestamp with time zone not null,
    "deletedAt" timestamp with time zone null,
    primary key (id),
    email       varchar(255)             null default null
);
