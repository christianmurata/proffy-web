import React, { useState, FormEvent } from 'react';

// services
import api from '../../services/api';

// components
import Input from '../../components/Input';
import Header from '../../components/Header';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

// css
import './styles.css'

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function searchTeachers(e: FormEvent) {
    e.preventDefault();

    console.log(subject, week_day, time);

    api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    })

    .then(response => setTeachers(response.data))

    .catch(err => alert(err.message));
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>

          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },

            ]} 
          />

          <Select 
            name="week_day" 
            label="Dia da Semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabádo' }

            ]} 
          />

          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">
            Buscar
          </button>

        </form>
      </Header>

      <main>

        {
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))
        }

      </main>
    </div>
  );
}

export default Teachers;