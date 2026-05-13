import * as repository from '../repository/content.js'

export const getHome = async (req, res, next) => {
    const home = await repository.getHome();
    await res.json({ "result": home });
}

export const getAbout = async (req, res, next) => {
    const about = await repository.getAbout();
    await res.json({ "result": about });
}

export const getSkills = async (req, res, next) => {
    const skills = await repository.getSkills();
    await res.json({ "result": skills });
}

export const getWork = async (req, res, next) => {
    const work = await repository.getWork();
    await res.json({ "result": work });
}

export const getTestimonials = async (req, res, next) => {
    const testimonials = await repository.getTestimonials();
    await res.json({ "result": testimonials });
}

export const getProject = async (req, res, next) => {
    const project = await repository.getProject(req.params.pid);
    await res.json({ "result": project });
}