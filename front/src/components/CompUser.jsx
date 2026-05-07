import React, { useState, useEffect } from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompUser() {
    const [list, setList] = useState([]);

    {/* http://localhost:9000/users */ }

    useEffect(() => {
        const fetchData = async () => {
            const jsonData = await getFetchData(`/users`);
            setList(jsonData.list);
        }
        fetchData();
    }, []);

    console.log('list===>', list);

    return (
        <div style={{ width: "1000px", margin: "auto" }}>
            <h1>Get :: Users</h1>
            <table border="1" style={{ width: "60%" }}>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>아이디</th>
                        <th>패스워드</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 서버에게 받은 데이터 출력 */}
                    {list?.map((user, idx) =>
                        <tr key={idx} style={{ textAlign: "center" }}>
                            <td>{idx + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.pwd}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

