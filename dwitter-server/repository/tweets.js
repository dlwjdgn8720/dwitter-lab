import pool from '../db.js';


export const getAll = async() => {
    const sql = ` select * from tweets_view
                    ORDER BY created_at DESC`;
    const [rows] = await pool.execute(sql, []);
    return rows;
}

//mytweet 등록시 조회
export const getTweet = async (id) => {
    const sql = `
        select * from tweets_view
            where id = ?
        `;
    const [result] = await pool.execute(sql, [id]);
    return result[0];
}

export const create = async (content, user_id) => {
    const sql = 'INSERT INTO tweets (user_id, content) VALUES (?, ?)';
    const [result] = await pool.execute(sql, [user_id, content]);
    return result;
}


export const getDelete = async (id, user_id) => {
    const sql = 'DELETE FROM tweets WHERE id = ? and user_id=?'
    const [rows] = await pool.execute(sql, [id, user_id]);
    return rows.affectedRows;
}

export const getUpdate = async (id, content, user_id) => {
    const sql = 'UPDATE tweets SET content = ? WHERE id = ? and user_id=?'
    const [result] = await pool.execute(sql, [content, id, user_id]);
    console.log('result ::', result.affectedRows);
    return result.affectedRows;
}

export const getMyTweets = async (id) => {

    const sql = `
            select * from tweets_view
            WHERE user_id = ? ORDER BY created_at DESC
        `;
    const [rows] = await pool.execute(sql, [id]);
    return rows;
}