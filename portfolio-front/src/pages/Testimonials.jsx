import { useState, useEffect } from 'react';
import { Title, SubTitle } from '../components/commons/Titles.jsx';
import Testimonial from '../components/content/Testimonial.jsx';
import { getFetchData } from '../util/fetch.js';
// import { useOutletContext } from 'react-router-dom';

export default function Testimonials() {
    // const { data } = useOutletContext();
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const jsonData = await getFetchData('/content/testimonials')
            setTestimonials(jsonData.result);
        }
        fetchData();
    },[])
    
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle subTitle="See What they say about me" />
            <ul className="testimonials">
                {testimonials?.map((item, idx) =>
                    <li className="testimonial" key={idx}>
                        <Testimonial item={item} />
                    </li>
                )}
            </ul>
        </section>
    );
}

