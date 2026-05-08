import db from '../db/connection.js';

export const getHeader = async() => {
    const sql = ` select header from portfolio `;
    const [ results, fields ] = await db.execute(sql, []);
    // console.log(results[0].header);

    return await results[0].header;
}