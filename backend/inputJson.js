export const json = `
{
  "Frontend": {
    "Title": "Employee Management System",
    "Template": "my_template_1"
  },
  "Backend": {
    "api_type": "CRUD",
    "input_type": "json",
    "output_type": "json"
  },
  "Database": {
    "type": "mysql_5.7",
    "ip": "1.2.3.4",
    "port": 3306,
    "name": "employee_db",
    "user": "root",
    "password": "admin"
  },
  "Entities": [
    {
      "name": "EMPLOYEE",
      "fields": [
        {
          "name": "EMPNO",
          "type": "INTEGER",
          "size": 20,
          "unique": "Y",
          "prim_key": "Y",
          "optional": "N"
        },
        {
          "name": "FIRSTNAME",
          "type": "TEXT",
          "size": 20,
          "unique": "N",
          "prim_key": "N",
          "optional": "N"
        },
        {
          "name": "LASTNAME",
          "type": "TEXT",
          "size": 20,
          "unique": "N",
          "prim_key": "N",
          "optional": "N"
        },
        {
          "name": "PHONENO",
          "type": "TEXT",
          "size": 15,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "WORKDEPT",
          "type": "TEXT",
          "size": 5,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "HIREDATE",
          "type": "DATE",
          "size": 15,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "JOB",
          "type": "TEXT",
          "size": 10,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "EDLEVEL",
          "type": "INTEGER",
          "size": 5,
          "unique": "N",
          "prim_key": "N",
          "optional": "N"
        },
        {
          "name": "BIRTHDATE",
          "type": "DATE",
          "size": 15,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "SEX",
          "type": "TEXT",
          "size": 1,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "SALARY",
          "type": "DOUBLE",
          "size": 15,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        },
        {
          "name": "BONUS",
          "type": "DOUBLE",
          "size": 15,
          "unique": "N",
          "prim_key": "N",
          "optional": "Y"
        }
      ]
    },
    {
      "name": "DEPARTMENT",
      "fields": [
        {
          "name": "DEPTNO",
          "type": "INTEGER",
          "size": 20,
          "unique": "Y",
          "prim_key": "Y",
          "optional": "N"
        },
        {
          "name": "DEPTNAME",
          "type": "TEXT",
          "size": 20,
          "unique": "N",
          "prim_key": "N",
          "optional": "N"
        }
      ]
    }
  ]
}`
