<h1> Deméter - Escritório Online </h1>

O Deméter é um sistema de gestão de escritórios de advocacia. 

O sistema foi criado como uma etapa avaliativa do processo seletivo para integrar a equipe de Tecnologia e Inovação. 

Segundo o documento de requisitos, trata-se de:

*Um filtro de processos que consiste em, a partir da base de dados fornecida, criar um programa que liste todos os processos pelos quais o advogado é responsável.*

Para construir esse filtro, decidimos usar uma arquitetura que conectasse uma página web com um banco de dados por meio de uma API, conforme a ilustração abaixo. 

![image](https://github.com/LuganThierry/ProjetoEscritorio-Back/assets/106288264/493e0bc4-df13-4bee-b425-129c7069618e)

<strong> Banco de dados </strong>

O banco de dados utilizado foi o MySQL, por se tratar de requisito da atividade. 
As tabelas foram geradas por migration de esquemas estabelecidos pela API. Essas tabelas foram populadas manualmente, com dados fornecidos pelos requisitos da atividade. 

<strong> Web API </strong>

Web API foi desenvolvida em linguagem de programação C# no framework .NET 6.0. 
O repositório da aplicação pode ser encontrado no github, pelo link:
https://github.com/LuganThierry/ProjetoEscritorio-Back

<strong> Página Web </strong>

Essa página web consome, trata e expõe os dados recebidos pela API acima. 

<h2> Tecnologias Utilizadas na API </h2>
<ol> 
    <li> HTML </li>
    <li> CSS </li>
    <li> JavaScript </li>
</ol>

<h2> Funcionalidades </h2>

<h3> Funcionamento regular </h3>
Ao digitar o id de um advogado que exista no banco de dados, serão expostos na tela todos os processos atribuidos a este advogado. 

![image](https://github.com/LuganThierry/ProjetoEscritorio-Front/assets/106288264/72c10b97-5077-4907-adab-6dd048fb06d6)

O campo de dados do processo mostra o número do processo e o próximo prazo relavante. 

Caso o processo esteja marcado como arquivo no banco de dados, ao invés do próximo prazo, este campo será preenchido como "processo arquivado". 

![image](https://github.com/LuganThierry/ProjetoEscritorio-Front/assets/106288264/57d9f81b-943f-414c-a7af-c195d2d447d8)

<h3> Funcionamento irregular </h3>
Se o ID digitado não for encontado no banco de dados, o sistema responde que não foi encontrado advogado para o respectivo ID.

![image](https://github.com/LuganThierry/ProjetoEscritorio-Front/assets/106288264/d9777798-5669-44fc-8e76-39a4e63e9fb3)

A mesma reação ocorre se o formato for irregular. 

![image](https://github.com/LuganThierry/ProjetoEscritorio-Front/assets/106288264/969d90cb-2390-4a15-a515-bcbf979f961d)

<h2> Funcionalidades futuras </h2>
A próxima funcionalidade a ser implementada deve ser a inclusão do nome do cliente como um dos dados do processo. 
