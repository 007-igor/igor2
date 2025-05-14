

  const initialItems = [
    { id: 1, nome: 'The Legend of Zelda: Breath of the Wild' },
    { id: 2, nome: 'Hollow Knight' },
    { id: 3, nome: 'Elden Ring' },
    { id: 4, nome: 'Hades' },
  ];

  let listaParaJogar = [...initialItems];
  let listaJaJoguei = [];
  let jogoSelecionado = null; 

  function renderLists() {
    const listParaJogarContainer = document.getElementById('listParaJogar');
    const listJaJogueiContainer = document.getElementById('listJaJoguei');

    
    listParaJogarContainer.innerHTML = '<strong>Jogos para jogar</strong>';
    listJaJogueiContainer.innerHTML = '<strong>Já joguei</strong>';

    
    listaParaJogar.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = item.nome;

      
      div.onclick = () => selecionarJogo(item);
      listParaJogarContainer.appendChild(div);
    });

    
    listaJaJoguei.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = item.nome;
      listJaJogueiContainer.appendChild(div);
    });
  }

  function selecionarJogo(jogo) {
    
    jogoSelecionado = jogo;
    
    
    const btnAdicionar = document.getElementById('btnAdicionar');
    btnAdicionar.disabled = false; 

    renderLists();  
  }

  function adicionarJogoNaLista() {
    if (jogoSelecionado) {
      
      listaParaJogar = listaParaJogar.filter(item => item.id !== jogoSelecionado.id);
      
      listaJaJoguei.push(jogoSelecionado);
      jogoSelecionado = null; 

      
      const btnAdicionar = document.getElementById('btnAdicionar');
      btnAdicionar.disabled = true;

      renderLists(); 
    }
  }

  function resetLists() {
    listaParaJogar = [...initialItems];
    listaJaJoguei = [];
    jogoSelecionado = null; 

    
    const btnAdicionar = document.getElementById('btnAdicionar');
    btnAdicionar.disabled = true;

    renderLists();
  }

  renderLists();
