import React, {useState} from 'react';
import '../index.css'


export default function Card(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  const bg = {
    backgroundColor:'rgb(168, 199, 202)'
  }

  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 1000);
  };

  return (
    <div >
    <div className='container py-3'>
      <div className='row justify-content-center footer'>
        <div className='col-md-6'>
          <div  className={`card p-4 ${buttonClicked ? 'animate-button-escape' : ''}`}
              style={bg}>
            <h2 className='card-title text-center'>Contact Me</h2>
            <form>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input type='text' className='form-control' style={bg} id='name' placeholder='Your name' required/>
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' style={bg} id='email' placeholder='Your email' required />
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label' >
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  rows='5'
                  placeholder='Your message'
                  style={bg}
                ></textarea>
              </div>
              <div className='d-grid'>
                <button type='submit' className={`btn btn-success ${buttonClicked ? 'disabled' : ''}`}
                    onClick={handleButtonClick}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
