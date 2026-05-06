import React from 'react';
import { useState, useRef } from 'react';
import { postFetchData } from '../util/fetchDatas';

export default function CompLogin() {
    const [form, setForm] = useState({ id: '', password: '' });
    const [cf, setCf] = useState(true);
    const idRef = useRef(null);
    const pwdRef = useRef(null);

    const style = {
        input: { padding: '10px', fontSize: '16px' },
        button: {
            padding: '10px', backgroundColor: '#007bff',
            color: 'white', border: 'none', cursor: 'pointer'
        },
        form: { display: "flex", flexDirection: "column", gap: "10px" },
        span: { color: "red", fontSize: '13px' }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
        if(value !== '') setCf(false);    
    }

    const handleCfChange = (e) => {
        const { value } = e.target;
        
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (idRef.current.value.trim() !== '' && pwdRef.current.value.trim() !== '') {
            const response = await postFetchData(`/api/post`, form);
            response.result ? alert('로그인 성공') : alert('로그인 실패');
        } else {
            alert('아이디와 비밀번호는 필수값입니다!');
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
                    ref={idRef}
                    //required
                    style={style.input}
                />
                {cf && <span style={style.span}>아이디는 필수값입니다.</span>}
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={form.password}
                    onChange={handleChange}
                    ref={pwdRef}
                    //required
                    style={style.input}
                />
                {cf && <span style={style.span}>비밀번호는 필수값입니다.</span>}
                <button type="submit" style={style.button}>로그인</button>
            </form>
        </div>

    );
}

