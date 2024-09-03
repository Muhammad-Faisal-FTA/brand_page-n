import './App.css';
import { useState } from 'react';
import st from './model.module.css';
import { Questions } from './arryinput';

function App() {
  const [status, setStatus] = useState(false);
  const [showans, setShowans] = useState(Questions[1].id);

  // const [close, SetClose] = useState(false) 

  return (
    <>
      <button onMouseOver={() => setStatus(true)}>Click</button>
      <div className={`${st.overLay} ${status ? st.showLay : ''}`}></div>
      <div className={`${st.popup} ${status ? st.showpopup : ''} `} >
        <button className='ml-[24rem] mt-0 bg-slate-50 text-red-600 text-[0.5rem] w-3 h-3' onClick={() => setStatus(false)}>X</button>
      </div>
    
      <div className={st.faqs}>
        <h1>Frequently Asked Questions (F&Qs)</h1>
          <div>
            {Questions.map((item, i)=>{
            return(
              <div className={st.qus}>
                {console.log(item.id +"hgjh")}
                <h1 onMouseOver={()=>setShowans(item.id)}>{item.title}</h1>
                <p className={showans === item.id? st.actans : ''}>{item.body}</p>
              </div>
            );
          })}
          </div>
      </div>
    </>
  );
}

export default App;
