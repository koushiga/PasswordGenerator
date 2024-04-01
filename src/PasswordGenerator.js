import { useState } from 'react';
import './PasswordGennerator.css';

const PasswordGenerator = () => {
    const[length,setLength]=useState(8);
    const[includeUppercase,setIncludeUppercase]=useState(true);
    const[includeLowercase,setIncludeLowercase]=useState(true);
    const[includeNumbers,setIncludeNumbers]=useState(true);
    const[includeSymbol,setIncludeSymbol]=useState(true);
    const[password,setPassword]=useState("");

    const generatePassword=()=>{
        let charset="";
        if(includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charset += "0123456789";
        if(includeSymbol) charset += "!@#$%^&*()-_=+";
        let yourPassword="";
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random() * charset.length);
            yourPassword += charset[randomIndex];
        }
        setPassword(yourPassword);
    };

    const copyBtn= () =>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    };

  return (
    <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className='length-input'>
            <label htmlFor='length'>Password Length :</label>
            <input type='number' id='length' value={length} onChange={(e)=>setLength(e.target.value)}/>
        </div>
        <div className='checkbox-group'>
            <input type='checkbox' id='upper' checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)} />
            <label htmlFor='upper'>Include Uppercase</label>
        </div>
        <div className='checkbox-group'>
            <input type='checkbox' id='lower' checked={includeLowercase} onChange={(e)=>setIncludeLowercase(e.target.checked)} />
            <label htmlFor='lower'>Include Lowercase</label>
        </div>
        <div className='checkbox-group'>
            <input type='checkbox' id='num' checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)} />
            <label htmlFor='num'>Include Numbers</label>
        </div>
        <div className='checkbox-group'>
            <input type='checkbox' id='symbol' checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)} />
            <label htmlFor='symbol'>Include Symbol</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className='generated-password'>
            <input type='text'  value={password}  readOnly/>
            <button className='copy-btn' onClick={copyBtn}>Copy</button>
        </div>
    </div>
  )
}

export default PasswordGenerator;