let perguntas = [];
let respostas = [];

function adicionarPergunta() {
  const perguntaInput = document.getElementById('pergunta').value;
  
  
  if (perguntaInput && !perguntas.includes(perguntaInput)) {
    perguntas.push(perguntaInput);
    atualizarListaPerguntas();
    document.getElementById('pergunta').value = '';
  } else if (perguntas.includes(perguntaInput)) {
    alert('Esta pergunta já foi cadastrada!');
  } else {
    alert('Digite uma pergunta válida!');
  }
}

function atualizarListaPerguntas() {
  const listaPerguntas = document.getElementById('listaPerguntas');
  listaPerguntas.innerHTML = perguntas.map(pergunta => `<li>${pergunta}</li>`).join('');
  atualizarSelectPerguntas();
}

function atualizarSelectPerguntas() {
  const select = document.getElementById('perguntaAssociada');
  select.innerHTML = perguntas.map(pergunta => `<option value="${pergunta}">${pergunta}</option>`).join('');
}


function adicionarResposta() {
  const perguntaAssociada = document.getElementById('perguntaAssociada').value;
  const alternativaA = document.getElementById('alternativaA').value;
  const alternativaB = document.getElementById('alternativaB').value;
  const alternativaC = document.getElementById('alternativaC').value;
  const alternativaD = document.getElementById('alternativaD').value;
  const alternativaCorreta = document.querySelector('input[name="correta"]:checked') ? document.querySelector('input[name="correta"]:checked').value : null;

  
  if (perguntaAssociada && alternativaA && alternativaB && alternativaC && alternativaD && alternativaCorreta) {
    
    const respostaObj = {
      pergunta: perguntaAssociada,
      alternativas: {
        A: alternativaA,
        B: alternativaB,
        C: alternativaC,
        D: alternativaD
      },
      correta: alternativaCorreta
    };

    respostas.push(respostaObj);
    atualizarListaRespostas();
    document.getElementById('formRespostas').reset();
  } else {
    alert('Preencha todos os campos corretamente!');
  }
}

function atualizarListaRespostas() {
  const listaRespostas = document.getElementById('listaRespostas');
  listaRespostas.innerHTML = respostas.map(item => `
    <li>
      <strong>${item.pergunta}</strong><br>
      A: ${item.alternativas.A}<br>
      B: ${item.alternativas.B}<br>
      C: ${item.alternativas.C}<br>
      D: ${item.alternativas.D}<br>
      <em>Correta: ${item.correta}</em>
    </li>
  `).join('');
}
