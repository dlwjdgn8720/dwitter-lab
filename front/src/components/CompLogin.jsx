import React from 'react';
import { useState } from 'react';
import { postFetchData } from '../util/fetchDatas';

export default function CompLogin() {
    const [form, setForm] = useState({ id: '', password: '' });
    const style = {
        input: { padding: '10px', fontSize: '16px' },
        button: { padding: '10px', backgroundColor: '#007bff', 
                    color: 'white', border: 'none', cursor: 'pointer' },
        form:{ display: "flex", flexDirection: "column", gap: "10px" }
    }

    const handleChange = async (e) => {
        e.preventDefault();
        const{ name, value } = e.target;
        setForm({...form, [name] : value})
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if(form.id === ''){
            
        }else if(form.password === ''){
                
        }else {
            console.log(form);      
            const response = await postFetchData(`/api/post`, form);
            response.result ? alert('로그인 성공') : alert('로그인 실패');
        }
    }

    return (
        <div style={{ width: "1000px", margin: "auto" }}>
            <h1>Post :: 로그인 폼</h1>
            <form onSubmit={handleLogin} style={style.form}>
                <input
                    type="email"
                    name="id"
                    placeholder="아이디를 입력하세요"
                    value={form.id}
                    onChange={handleChange}
                    required
                    style={style.input}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={style.input}
                />
                <button type="submit" style={style.button}>로그인</button>
            </form>
        </div>

    );

    
}

