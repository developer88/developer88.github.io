---
title:  "Migrate from PostgreSQL to MySQL using Slick (Scala)"
date:   2022-05-10 15:04:23
categories: [coding]
tags: [scala, programming, slick, mysql, postgresql]
---
For my rather long engineering career, I did several migrations from one database to another. Usually, I dealt with cases like switching from SQL- to non-SQL or vice versa. This time I had an interesting case of migrating from Postgres to MySQL.

For a rather small database (of 14 GBs of size) where we do not use anything special from what PostgreSQL can provide, I did not expect to face any kind of issues. Sure, some SQL queries in Scala code must be adapted to follow the MySQL syntax, but other than that it was expected to run smoothly.

Even though, making the code producing correct data for MySQL was rather easy, I faced some difficulties with adopting it for be compatible with existing data and especially **timestamps**.

I was surprised to learn that timestamps produced by Slick in MySQL and PostreSQL have different format. In any case, we use [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format to store timestamps for both [MySQL](https://dev.mysql.com/doc/refman/8.0/en/datetime.html) and [PostreSQL](https://www.postgresql.org/docs/current/datatype-datetime.html). So, store such data in the default format like this:

```
2022-03-11 21:59:00
```

That means that after the migration, the MySQL compatible code must read and produce the same data, however that did not happen. Instead, the code produced this:

```
2022-03-11T21:59:00Z
```

After checking the [official Slick documentation](https://books.underscore.io/essential-slick/essential-slick-3.html#date-and-time-methods) regarding working with 'Date and Time' we can see, that Slick  saves data as `TIMESTAMP` for PostgreSQL and as `TEXT` for MySQL. In the end that should not be the issue. [Custom column mapping](https://books.underscore.io/essential-slick/essential-slick-3.html#custom-column-mappings) should help us convert the data from one type to another. Unfortunately that did not work out. Basically, it did not make any changes.

The answer and actually, the final solution, I found in the [migration guide from 3.2 to 3.3](https://scala-slick.org/doc/3.3.3/upgrade.html#support-for-java.time-columns) that states that custom mappind does not work for dates and suggests to adjust the `Profile` class directly. That was my way to go - create a new `Profile` class based on `slick.jdbc.MySQLProfile` and copy the logic regarding `instantType` from `PostgreSQLProfile`. This way I managed to be absolutely compatible with timestamps produced by MySQL version of Slick. The rest data types worked well out of the box.

Cheers.
