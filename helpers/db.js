import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("contacts.db");

export const init = () => {

    const promise = new Promise ((resolve, reject) => {
         db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contact3 (id INTEGER PRIMARY KEY, name TEXT NOT NULL, number NUMBER NOT NULL, image TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL)',
                [],
                () => {resolve()},
                (_, err ) => {reject(err)}
             );
        });
    });

    return promise;
}

export const insertContact = async (name, number, image, latitude, longitude) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contact3 (name, number, image, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
            [name, number, image, latitude, longitude],
            (_, result) => {console.log(result);
                resolve(result)},
            (_, err) => {reject(err)}
            );
        })
    });
    return promise;
}

export const searchContacts = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_contact3',
                [],
                (_, result) => {resolve(result)},
                (_, err) => {reject(err)}
            );
        })
    });
    return promise;
}


init().then(() => {}).catch(() => {})