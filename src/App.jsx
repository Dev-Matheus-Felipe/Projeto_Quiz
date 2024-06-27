import React, { useState, useEffect,useRef } from 'react';
import './App.css'

function App() {

  //------------------------------------------------------------ variáveis -------------------------------------------------------- //
  const [respostas_certas, setRespostas_certas] = useState(0);
  const [nenhumTemClasse, setNenhumTemClasse] = useState(true);
  const [indexTeste, setIndexTeste] = useState(0);

  const perguntas = [
    'No anime Bunny Girl, qual é a explicação científica por trás dos fenômenos sobrenaturais enfrentados pelos personagens?',
    'Em "Code Geass", qual a cor de cabelo da personagem C.C?',
    'Qual é o objetivo final de Eren em "Attack on Titan"?',
    'No anime Frieren: Beyond Journey s End, como o herói Himmel morreu?',
    'Sobre o anime Your Name, em que tipo de localidades os personagens principais vivem',
    'Quem era originalmente o principal candidato para se tornaro sucessor de All Might e herdeiro do One For All',
    'Fique tranquilo. Eu vou devorar todos os seus pecados junto com você / Esse é o sacrifício para que eu possa evoluir. De quem são essas frases?',
    'Complete a frase corretamente: Não consigo sentir ____ daqueles que estão abaixo de mim… O que eu sinto, é ____. (Escanor)',
    'Qual é a posição de liderança ocupada por Mikey na gangue Tokyo Manji Gang?',
    'Como Muzan virou um oni em Demon Slayer?'
]

  const alternativas = [
    ['Síndrome da Coexistência Paradoxal','Síndrome da Adolescência','Síndrome da Percepção Distorcida','Síndrome da Ilusão Temporal'],
    ['Verde','Azul','Ciano','Preto'],
    ['Erradicar todos os Titãs','Destruir a muralha que separa os humanos dos Titãs','Vingar a morte de seus pais','Libertar a humanidade da opressão e da ameaça dos Titãs'],
    ['Morreu de causas naturais (velhice)','Morreu na luta contra o  Rei Demônio','Morreu envenenado','Nenhuma das alternativas'],
    ['Países diferentes','Continentes diferentes','Cidades diferentes','Planetas diferentes'],
    ['Izuku Midoriya','Mirio Togata','Nejire Hado','Sir Nighteye'],
    ['Kiyotaka Ayanokoji','Akame','Eren Yaeger','Rimuru Tempest'],
    ['pena / ódio','raiva / compaixão','ódio / pena', 'compaixão / raiva'],
    ['Vice-líder','Capitão','Chefe de segurança','Presidente'],
    ['Ele foi transformado enquanto procurava a cura para uma doença terminal que o acometia','Ele foi transformado enquanto procurava a imortalidade','Ele foi transformado enquanto procurava o poder absoluto','Ele foi transformado em um experimento pelo médico: Hataraku Saibou']

  ]
  const resposta_das_perguntas = ['Síndrome da Adolescência','Verde','Libertar a humanidade da opressão e da ameaça dos Titãs','Morreu de causas naturais (velhice)',
  'Cidades diferentes','Mirio Togata','Rimuru Tempest','ódio / pena','Presidente','Ele foi transformado enquanto procurava a cura para uma doença terminal que o acometia'];

    //-------------------------------------------------------------- FUNÇÕES -------------------------------------------------------------- //
  
  const checkResposta = ()=>{
    let active = document.querySelector(`.container .active`);
    let p = document.querySelectorAll(`.container p`);

    setNenhumTemClasse(true);

    
    if(active.textContent === resposta_das_perguntas[indexTeste]){
      active.classList.add('resposta_certa');
      setRespostas_certas(prev => prev + 1);
    }else{
      active.classList.add('resposta_errada');
      
      p.forEach((e)=>{
        if(e.textContent === resposta_das_perguntas[indexTeste]){
          e.classList.add('resposta_certa');
        }
      })
    }

    setTimeout(()=>{
  
      p.forEach((e)=>{
        e.classList = '';
      });
      
      setIndexTeste( prev => prev + 1);
    },1000)

    
  }

  // //------------------------------------------------------------------------- //

  const ativar = (index)=>{
    let p = document.querySelectorAll(`.container p`);

    p.forEach((e)=>{
      if(e.classList.contains('active')){
        e.classList.remove('active');
      }
    })

    p[index].classList.add('active');
    

    if(nenhumTemClasse === true){
      setNenhumTemClasse(false);
    }
    
  }

    //------------------------------------------------------------ CONTEÚDO -------------------------------------------------------- //

  const quiz = (
    (indexTeste == alternativas.length )
      ?
      <div className='container2'>
        <h1>Resultados:</h1>
        <p>{respostas_certas} / {perguntas.length}</p>
        <button onClick={() => window.location.reload()} className='button' style={{ marginTop: '20px' }}>RESETAR</button>
      </div>
      
      :
      <div className="container">
        <h1>{perguntas[indexTeste]}</h1>
        <p onClick={()=>ativar(0)}>{alternativas[indexTeste][0]}</p>
        <p onClick={()=>ativar(1)}>{alternativas[indexTeste][1]}</p>
        <p onClick={()=>ativar(2)}>{alternativas[indexTeste][2]}</p>
        <p onClick={()=>ativar(3)}>{alternativas[indexTeste][3]}</p>
        <button disabled={nenhumTemClasse} className="button" onClick={()=>{checkResposta()}}>ENVIAR</button>
      </div>
  )
  

  return (
    <div className="app">
      {quiz}
    </div>
    
  );
}

export default App;