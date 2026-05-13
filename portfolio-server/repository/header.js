import db from '../db/connection.js';

export const getHeader = async() => {
    const sql = ` select header from portfolio `;
    const [ results, fields ] = await db.execute(sql, []);
    // console.log('result --> ', results);
    // console.log('result[0] --> ', results[0]);
    //  console.log('result[0] --> ', results[0].header);

    return await results[0].header;
}