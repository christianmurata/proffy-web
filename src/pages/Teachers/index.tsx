import React from 'react';

// components
import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

// css
import './styles.css'

function Teachers() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são ps proffys disponíveis">
        <form action="" id="search-teachers">

          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" name="week_day" id="week_day"/>
          </div>


          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time"/>
          </div>

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