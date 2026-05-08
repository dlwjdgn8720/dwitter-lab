import { useState, useEffect } from "react"
import { Title, SubTitle, TitleDescription } from "../components/commons/Titles.jsx"
import SkillsContent from "../components/content/SkillsContent.jsx"
import { getFetchData } from "../util/fetch.js";
// import { useOutletContext } from "react-router-dom";

export default function Skills() {
    const [skills, setSkills]  = useState({});
    // const { data } = useOutletContext();
    
    useEffect(() => {
        const fetchData = async() => {
            const jsonData = await getFetchData("/content/skills");
            setSkills(jsonData.result);
        }
        fetchData();
    },[]);
    
    return (
        <section id="skills" className="section container">
            <Title title="My Skills" />
            <SubTitle subTitle="Skills & Attributes" />
            <TitleDescription titleDescription={skills?.description} />
            <SkillsContent skills={skills}/>
        </section>
    )
}