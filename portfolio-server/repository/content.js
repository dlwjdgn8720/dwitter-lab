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
    const sql = `select work from portfolio`;
    const [result] = await db.execute(sql, []);
    const project = result[0].work.projects.find((project) => project.pid === pid);
    return project;
    
    // const sql = `
    //         SELECT * 
    //         FROM portfolio 
    //         WHERE ? MEMBER OF (work->'$.projects[*].pid')
    //     `;

    // const [result] = await db.execute(sql, [ pid ]);

    // // 2. 결과가 없는 경우(빈 배열)에 대한 처리
    // if (!result[0] || result[0].length === 0) {
    //     console.log(`No project found with pid: ${pid}`);
    //     return null; // 또는 []
    // }

    // // 3. 데이터가 있을 때만 로그 출력 및 반환
    // // 주의: DB 설정에 따라 work가 이미 객체일 수도, 문자열일 수도 있습니다.
    // console.log('Project Data:', result[0]);
}



