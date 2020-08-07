import React from 'react';

// services
import api from '../../services/api';

// images
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// css
import './styles.css';

export interface Teacher {
  id: number;
  name: string;
  avatar:string;
  bio:string;
  subject: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC <TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name} </strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a 
          rel="noopener noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection} 
          target="_blank"
        >
          <button>
            <img src={ whatsappIcon } alt="whatsapp"/>
            Entrar em Contato
          </button>
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;