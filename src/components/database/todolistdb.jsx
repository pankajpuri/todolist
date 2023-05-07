import React, { useEffect, useState } from "react";
import { useSQLite } from "react-sqlite-hook";
import { CapacitorSQLite } from "@capacitor-community/sqlite";

const TodoListDb = async () => {
  //   const db = useSQLite("todolist");
  const db = CapacitorSQLite;

  const [list, setList] = useState([]);
  useEffect(async () => {
    await db.createConnection({ database: "todolist" });
    await db.open({ database: "todolist" });
    await db.execute({
      statement:
        "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, title TEXT NOT NULL)",
    });
    // db.execute(
    //   "CREATE TABLE IF NOT EXITS Tasks(Id INTEGER PRIMARY KEY AUTOINCREMENT, task VARCHAR(255) NOT NULL, createdon DATETIME NOT NULL, completedon DATETIME, done BOOLEAN NOT NULL DEFAULT false)"
    // );
    // for (let d of datas) {
    //   db.execute(
    //     "INSERT INTO Tasks(task, createdon, completedon, done)VALUES(?,?,?,?)"
    //   )[(d.task, d.createdon, d.completedon, d.done)];
    // }
    // const fetchDatas = async () => {
    //   const result = await db.query(" SELECT * FROM Tasks");
    //   setList(result.rows);
    // };
    // fetchDatas();
  }, []);
  return <h1>Hello</h1>;
};

export default TodoListDb;
