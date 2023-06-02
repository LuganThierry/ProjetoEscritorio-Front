// Variáveis e elementos
const idInput = document.querySelector("#advogado-id-input");
const relatorioBtn = document.querySelector("#gerar-relatorio");
const container = document.querySelector('.dados-processos-container');

// Funções
async function PegarDadosProcessos(id) {
  try {
    const response = await fetch(`https://localhost:7176/api/Processos/advogado/${id}/processos`);
    if (response.status === 404) {
      throw new Error('Advogado não encontrado no banco de dados');
    }
    if (!response.ok) {
      throw new Error('Erro ao buscar os processos por ID do advogado');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const PegarIdAdvogado = async (id) => {
  const data = await PegarDadosProcessos(id);

  container.innerHTML = '';

  if (data) {
    data.forEach((processo) => {
      const processoDiv = document.createElement('div');
      processoDiv.classList.add('dados-processos');

      const numeroProcesso = processo.numero_processo;
      const arquivo = processo.arquivo;
      const proximoPrazo = formatarData(processo.proximo_prazo);

      let status;
      if (arquivo) {
        status = 'Processo arquivado';
      } else {
        status = `Próximo prazo: ${proximoPrazo}`;
      }

      processoDiv.innerHTML = `
        <h2>
          <span class="processo">${numeroProcesso}</span>
        </h2>
        <p>
          <span class="status">${status}</span>
        </p>
      `;

      container.appendChild(processoDiv);
    });
  } else {
    const erroDiv = document.createElement('div');
    erroDiv.classList.add('dados-processos');
    erroDiv.innerHTML = `Advogado para o ID ${id} não foi encontrado no banco de dados`;
    container.innerHTML = '';
    container.appendChild(erroDiv);
  }
};

function formatarData(data) {
    const dataObj = new Date(data);
    
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = String(dataObj.getFullYear());
    
    return `${dia}/${mes}/${ano}`;
  }
  
  const data = '2022-08-29T16:44:06';
  const dataFormatada = formatarData(data);
  console.log(dataFormatada);


// Eventos
relatorioBtn.addEventListener("click", async (e) => {
    e.preventDefault();
  
    const id = idInput.value;
    await PegarIdAdvogado(id);
  });