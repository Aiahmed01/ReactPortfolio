import React, {useState, useEffect} from 'react'
import axios from 'axios';
import gitImg from './Images/65.svg'
import '../index.css'

export default function Portfolio() {
  const bg = {
    backgroundColor:'rgb(168, 199, 202)'
  }
  const [projects, setProjects] = useState([]);

const gitStyle = {
  maxWidth: '70%',
  maxHeight: '200px',
  borderRadius: '50%',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',

}
  useEffect(() => {
    axios.get('https://api.github.com/users/aiahmed01/repos')
    .then(response => {
      setProjects(response.data);
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
    });
}, []);

const limitedProjects = projects.slice(-6);

  return (
    <>

        <div className="container py-5 ">

      <h1 className="text-center">ShowCase</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        {limitedProjects.map(project => (
          <div key={project.id} className="col">
            <div className="card h-100" style={bg}>
              <img src={gitImg} style={gitStyle} className="card-img-top " alt={project.full_name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <a href={project.html_url} className="card-text">View Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
