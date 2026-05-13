import db from '../db/connection.js'

export const getHome = async () => {
    const sql = `select home from portfolio`;
    const [results] = await db.execute(sql, []);
    return await results[0].home;
}

export const getAbout = async () => {
    const sql = `select about from portfolio`;
    const [results] = await db.execute(sql, []);
    return await results[0].about;
}

export const getSkills = async () => {
    const sql = `select skills from portfolio`;
    const [results] = await db.execute(sql, []);
    return await results[0].skills;
}

export const getWork = async () => {
    const sql = `select work from portfolio`;
    const [results] = await db.execute(sql, []);
    return await results[0].work;
}

export const getTestimonials = async () => {
    const sql = `select testimonials from portfolio`;
    const [results] = await db.execute(sql, []);
    return await results[0].testimonials;
}

export const getProject = async (pid) => {
    // 1. 한번에 조회
    const sql = `
                select p.* 
                from portfolio, 
                json_table(work, '$.projects[*]'
                columns(
                    pid varchar(10) path '$.pid',
                    img varchar(50) path '$.img',
                    alt varchar(100) path '$.alt',
                    title varchar(50) path '$.title',
                    description varchar(100) path '$.description'
                ) 
            ) as p
                where p.pid = ?
                 `

    // 2. work 전체 조회 && find
    // const sql = `select work from portfolio`;
    const [results] = await db.execute(sql, [pid]);
    // const project = await results[0].work.projects.find((project) => project.pid === pid);
    return results[0];
}