Como o framework que estou mais habituado a utilizar é o Vue, criar uma aplicação utilizando React foi um desafio divertido, no qual precisei revisar o conceitos e sintaxes usadas no react e após isso desenvolver a aplicação. 

O projeto consiste em um sistema de compartilhamento de artigos. Esses artigos podem ser curtidos e os autores seguidos por outros usuários. O sistema conta com uma tela de registro, para que novos usuários possam se cadastrar no sistema. Uma tela de login para que usuários já cadastrados possam se autenticar no sistema utilizando e-mail e senha. A aplicação também dispõe de uma tela de perfil, que exibe o perfil do autor de cada post, com seu nome, imagem e uma pequena biografia.
Após o login, os usuários podem escrever novos post’s, atualizar seus dados de cadastro, seguir outros usuários, além de curtir os artigos publicados no sistema.

A aplicação foi desenvolvida utilizando principalmente o framework react para estruturação do front-end, criação de componentes reaproveitáveis e de paginas a serem exibidas ao usuário.
Alem de react foram utilizados os frameworks Bootstrap, para estilização das telas e componentes, o framework Axios, para consumir a api fornecida nas especificações do teste. Assim como outras  bibliotecas como Moment, SweetAlert e React Router.

O usuário pode acessar  a listagem de artigos e visualizar seu conteúdo, no entanto as ações de curtir artigos e seguir usuários só podem ser realizadas com a disponibilização de token de autenticação. Esse token é adicionado ao Local Storage do navegador após o usuário realizar o login, sendo utilizado para todas as requisições que necessitem de autenticação. 

Para realização das requisições, foi criado um componente de configuração onde foi definida a rota principal de cada requisição e onde o token salvo no Local Storage é adicionado ao header da requisição com o parâmetro “Authorization”.

Foi criado um componente para gerenciar a navegação entre as paginas e controlar as rotas de redirecionamento. 

Para hosting da aplicação, escolhi o firebase, por ter compatibilidade com a hospedagem de aplicações que utilizam react, podendo ser acessado pela url https://reader-59e95.web.app/

O código da aplicação foi adicionado ao GitHub com o nome de Reader podendo ser acessado na url https://github.com/valterdamiani/reader. 