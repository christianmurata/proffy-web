import React from 'react';

// components
import Input from '../../components/Input';
import Header from '../../components/Header';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

// css
import './styles.css'

function Teachers() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis">
        <form action="" id="search-teachers">

          <Select 
            name="subject" 
            label="Matéria"
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

          <Input type="time" name="time" label="Hora" />

        </form>
      </Header>

      <main>

        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </main>
    </div>
  );
}

export default Teachers;