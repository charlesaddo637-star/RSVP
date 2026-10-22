import { useState } from "react";

export default function App() {
  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [Number,setNumber]=useState('');
  const [Check,setCheck]=useState(false);
  const [Pref,setPref]=useState('');

  const [Submitted,setSubmitted]=useState('');
  function handleSubmit(e){
    e.preventDefault();

    setSubmitted({
      name:Name,
      email:Email,
      number:Number,
      preference:Pref,
      additional:Check
    })
  }
  return <>
  <form onSubmit={handleSubmit}>
    <h2>Event RSVP</h2>
  <label>Name:</label>
  <input type="text" className="f" autoComplete="name" value={Name} onChange={(e)=>{setName(e.target.value)}} required/>
  <label>Email:</label>
  <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} required/>
  <label>Number of Attendees:</label>
  <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)} required min="1"/>
  <label>Dietary preferences:</label>
  <input type="text" value={Pref} onChange={(e)=>{setPref(e.target.value)}} />
  <label>Are you bringing additional guests?<input className="additional" type="checkbox" value={Check} onChange={(e)=>{setCheck(e.target.value)}}/></label>
  <span><button type="submit"><span className="gradient-text">Send RSVP</span></button></span>
  </form>
  {Submitted && <>
  <p>Name:{Submitted.name}</p>
  <p>Email:{Submitted.email}</p>
  <p>Number Of Attendees:{Submitted.number}</p>
  <p>Dietary preferences:{Submitted.preference}</p>
  <p >Additional Guests:{Submitted.additional}</p>
  </>}
  </>
}