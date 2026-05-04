import React, { useState, useEffect, useRef } from 'react';

export default function CompPost() {
    const nameRef = useRef(null);
    const [data, setData] = useState('');   //서버 전송 데이터
    const [name, setName] = useState('');   //폼 입력 데이터

    const handleChange = () => {
        setName(nameRef.current.value);
    }

    const handlePost = async() => {
        const url = 'http://localhost:9000/api/post';
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({"name": name})
        });
        const jsonData = await response.json(); // list:[]
        setData(jsonData.result);
    }

    /*
    useEffect(() => {
            const fetchData = async () => {
                const url = 'http://localhost:9000/api/post';
                const response = await fetch(url, {
                    method: 'POST',
                    headers : {'Content-type': 'application/json'},
                    body: JSON.stringify({"name" : "Smith❤"})
                });
                const jsonData = await response.json(); // list:[]
                setData(jsonData.result);
            }
            fetchData();
        }, []);
    */

    return (
        <div>
            <input type="text"
                name="name"
                value={name}
                ref={nameRef}
                onChange={handleChange}></input>
            <button onClick={handlePost}>전송</button>
            <h2>Post 방식으로 전송된 결과 : {data}</h2>
        </div>
    );
}

