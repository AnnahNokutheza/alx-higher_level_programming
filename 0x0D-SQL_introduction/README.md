0x0D. SQL - Introduction

What is Database & SQL?
A Basic MySQL Tutorial
Basic SQL statements: DDL and DML (no need to read the chapter “Privileges”)
Basic queries: SQL and RA
SQL technique: functions
SQL technique: subqueries
What makes the big difference between a backtick and an apostrophe?
MySQL Cheat Sheet
MySQL 8.0 SQL Statement Syntax
installing MySQL in Ubuntu 20.04


Install MySQL 8.0 on Ubuntu 20.04 LTS
$ sudo apt update
$ sudo apt install mysql-server
...
$ mysql --version
mysql  Ver 8.0.25-0ubuntu0.20.04.1 for Linux on x86_64 ((Ubuntu))
$
Connect to your MySQL server:

$ sudo mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 8.0.25-0ubuntu0.20.04.1 (Ubuntu)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
mysql> quit
Bye
$
