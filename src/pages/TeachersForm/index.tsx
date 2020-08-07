import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

// services
import api from '../../services/api';

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
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    setScheduleItems(scheduleItems.map((scheduleItem, index) => {
      if(index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    }));
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    console.log(
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    )

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    })

    .then((response) => { alert(response.data); history.push('/') })

    .catch(err => alert(err.message))
  }

  return (
    <div id="page-teacher-form" className="container">
      <Header 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main onSubmit={handleCreateClass}>

        <form>

          <fieldset>
            <legend>Seus Dados</legend>

            <Input 
              name="name" 
              label="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            
            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />

            <Input 
              name="whatsapp" 
              label="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <Textarea 
              name="bio" 
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>

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
            
            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />

          </fieldset>

          <fieldset>
            <legend>
              Horário Disponíveis
              <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
            </legend>

            {
              scheduleItems.map((schedule, index) => {
                return (
                  <div key={schedule.week_day} className="schedule-item">
                    <Select 
                      name="week_day" 
                      label="Dia da Semana"
                      value={schedule.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                      name="from" 
                      label="Das" 
                      type="time"
                      value={schedule.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                    />
                    
                    <Input 
                      name="to" 
                      label="Até" 
                      type="time"
                      value={schedule.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    />

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
            <button type="submit">Salvar Cadastro</button>
          </footer>

        </form>
      </main>
    </div>
  );
}

export default TeachersForm;