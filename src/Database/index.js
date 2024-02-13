import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = ()=> {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, tokenId TEXT NOT NULL)', //consulta SQL
                [], //Valores de la consulta
                ()=> resolve(),
                (_,err)=> reject(err)                
                )
        })
    })
    return promise
} 

export const insertSession = ({localId, email, idToken})=> {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'INSERT INTO sessions (email, localId, tokenId) VALUES (?, ?, ?);', //consulta SQL
                [email, localId, idToken], //Valores de la consulta
                (_,result)=> resolve(result),
                (_,err)=> reject(err)                
                )
        })
    })
    return promise
} 

export const fetchSession = (localId)=> {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM sessions WHERE localId = ?', //consulta SQL
                [localId], //Valores de la consulta
                (_,result)=> resolve(result),
                (_,err)=> reject(err)                
                )
        })
    })
    return promise
} 

export const deleteSession = (localId)=> {
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'DELETE FROM sessions WHERE localId = ?', //consulta SQL
                [localId], //Valores de la consulta
                (_,result)=> resolve(result),
                (_,err)=> reject(err)                
                )
        })
    })
    return promise
} 