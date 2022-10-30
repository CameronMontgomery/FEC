import React, { useState, useRef } from 'react';
import axios from 'axios';
import Modal from '../Modal.jsx';


const AddQuestion = ({productInfo, close}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  const submitQuestion = event => {
    event.preventDefault();
    axios.post('api/qa/questions', {
      body,
      name,
      email,
      product_id: productInfo.id
    })
    .then(() => close())
    .catch(err => setError(err.message))
  }

  return (
    <div className="QA-add-container">
      <h1>Ask Your Question</h1>
      <h2>About the {productInfo.name}</h2>
      <form className="QA-form" onSubmit={submitQuestion}>
        <label>
        Your Question*
        <textarea value={body} required className="QA-add-textarea" rows={5} cols={60} maxLength={1000} onChange={e => setBody(e.target.value)} />
        </label>
        <label>
        What is your nickname*
        <input type="text" value={name} required placeholder='“Example: jackson11!”' className="QA-add-input" onChange={e => setName(e.target.value)} />
          <span className="QA-add-subtext">For privacy reasons, do not use your full name of email address</span>
        </label>
        <label>
        Your email*
        <input type="email" value={email} required placeholder='“Example: jack@email.com”' className="QA-add-input" onChange={e => setEmail(e.target.value)} />
        <span className="QA-add-subtext">For authentication, you will not be emailed</span>
        </label>
        {error ? <div className="add-error">{error}</div> : null}
        <button type="submit">Submit Question</button>
      </form>
    </div>
  )
}

export default AddQuestion;