import db from '../db/connection.js'

export const getHome = async () => {
    const sql = `select home from portfolio`
    const [result] = await db.execute(sql, []);
    return await result[0].home;
};

export const getAbout = async() => {
    const sql = `select about from portfolio`
    const [result] = await db.execute(sql, []);
    return await result[0].about;
}

export const getSkills = async() => {
    const sql = `select skills from portfolio`
    const [result] = await db.execute(sql, []);
    return await result[0].skills;
}

export const getWork = async() => {
    const sql = `select work from portfolio`
    const [result] = await db.execute(sql, []);
    return await result[0].work;
}

export const getTestimonials = async() => {
    const sql = `select testimonials from portfolio`
    const [result] = await db.execute(sql, []);
    return await result[0].testimonials
}


export const getProject = async(pid) => {

    const sql = `
      SELECT p.*
      FROM portfolio,
      JSON_TABLE(work, '$.projects[*]' 
        COLUMNS (
          pid VARCHAR(10) PATH '$.pid',
          title VARCHAR(100) PATH '$.title',
          alt VARCHAR(100) PATH '$.alt',
          img VARCHAR(255) PATH '$.img',
          description TEXT PATH '$.description'
        )
      ) AS p
      WHERE p.pid = ?;
    `;

    // const sql = `select work from portfolio`;
    // const project = result[0].work.projects.find((project) => project.pid === pid);
    const [result] = await db.execute(sql, [pid]);
    console.log('result[0]:: ', result[0]);
    return await result[0];
}



