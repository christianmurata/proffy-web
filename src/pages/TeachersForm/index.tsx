import React, { useState } from 'react';

// header component
import Input from '../../components/Input';
import Header from '../../components/Header';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';


// images
import WarningIcon from '../../assets/images/icons/warning.svg';

// CSS
import './styles.css'

function TeachersForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  return (
    <div id="page-teacher-form" className="container">
      <Header 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>

        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome Completo" />
          
          <Input name="avatar" label="Avatar" />

          <Input name="whatsapp" label="whatsapp" />

          <Textarea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>

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
          
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <fieldset>
          <legend>
            Horário Disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
          </legend>

          {
            scheduleItems.map(schedule => {
              return (
                <div key={schedule.week_day} className="schedule-item">
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

                  <Input name="from" label="Das" type="time" />
                  
                  <Input name="to" label="Até" type="time" />

                </div>
              )
            })
          }
          
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso Importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>

      </main>
    </div>
  );
}

export default TeachersForm;