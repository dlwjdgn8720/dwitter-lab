import React from 'react';
import CompGet from './components/CompGet.jsx';
import CompPost from './components/CompPost.jsx';
import CompGetParam from './components/CompGetParam.jsx';
import CompLogin from './components/CompLogin.jsx'
import CompUser from './components/CompUser.jsx'

export default function App() {
  return (
    <div>
        <CompUser/>
        <hr/>
        <CompLogin/>
        <hr/>
        <CompPost/>
        <hr/>
        <CompGet />
        <hr/>
        <CompGetParam/>
    </div>
  );
}

