import sql from "mssql";

const MSSQL_HOST = "localhost";
const MSSQL_USERNAME = "sa";
const MSSQL_PASSWORD = "12345678";
const MSSQL_DBNAME = "master";

const conn = await sql.connect({
  server: MSSQL_HOST,
  user: MSSQL_USERNAME,
  password: MSSQL_PASSWORD,
  database: MSSQL_DBNAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
});

const result = await new sql.Request().query`
  select *
  from information_schema.columns
`;

console.log(result);
