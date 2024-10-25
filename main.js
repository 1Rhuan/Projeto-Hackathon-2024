document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.animacao-telaini-dir').classList.add('fade-out');
    document.querySelector('.animacao-telaini-esq').classList.add('fade-out');
    document.querySelector('.animacao-telaini-meio').classList.add('fade-out');
    this.classList.add('fade-out');

    setTimeout(() => {
        document.querySelector('.animacao-telaini-dir').style.display = 'none';
        document.querySelector('.animacao-telaini-esq').style.display = 'none';
        document.querySelector('.animacao-telaini-meio').style.display = 'none';
        this.style.display = 'none';
        document.getElementById('escolhas').classList.remove('esconder');
        
    }, 500);
});

var data = {
    "Nome": "Yuri Alberto",
    "Pontos": 0,
    "prox": 1
};
const res = document.getElementById("quiz-screen")

usuario();
function usuario() {
	let getPontos = JSON.parse(localStorage.getItem('pontos'));
	if (getPontos) {
		data = getPontos;
	}
	var pontosHTML = document.getElementById("pontos")
	pontosHTML.innerHTML = `<p>Pontuaçao: ${data.Pontos}</p>`	
}


function checkAnswer(a) {
	
	if(a === 1){
		alert("resposta certa")
		data.Pontos += 1;
		
		localStorage.setItem('pontos', JSON.stringify(data));
	}else if(a === 2){
		alert("errado")
	}
	usuario()
	data.prox += 1;
	perguntas(data.prox);

}

function perguntas(idd){
	document.getElementById('details').style.display = 'none';
	document.getElementById('logo').style.display = 'none';
	document.getElementById('start-screen').style.display = 'none';
	//document.getElementById('escolhas').classList.remove('esconder');
	document.getElementById('quiz-screen').style.display = 'block';
	fetch('dados.json')
	  .then(response => response.json())
	  .then(data => {{
		  const perguntasFacil = data.perguntasCriancas.filter(pergunta => pergunta.id == idd);
		  data.prox = idd
		  console.log(data.prox)

		  perguntasFacil.forEach(pergunta => {
			
			res.innerHTML = `
					<div class="quiz-container">
					  <div class="question-container">
						<h2 id="question">${pergunta.pergunta}</h2>
					  </div>
					  <div class="options-container">
						<button class="option" onclick="checkAnswer(${pergunta.corretaA})">A) ${pergunta.alternativaA}</button>
						<button class="option" onclick="checkAnswer(${pergunta.corretaB})">B) ${pergunta.alternativaB}</button>
						<button class="option" onclick="checkAnswer(${pergunta.corretaC})">C) ${pergunta.alternativaC}</button>
					  </div>
					 </div>
			
			`
		  });
		 }
	  })
	  .catch(error => console.error('Erro ao carregar JSON:', error));
}
