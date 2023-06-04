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
