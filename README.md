Este projeto front-end em Angular possui funcionalidades para gerenciar usuários, com páginas para adicionar, editar e listar usuários, além de uma página inicial com estatísticas resumidas.

Funcionalidades
Add User Page
Adição ao Nav-Header: Inserido o link "Add User" para acessar a página de cadastro de novo usuário.
Formulário:
Nome: Campo obrigatório.
E-mail: Campo obrigatório com validação de e-mail.
Função: Campo select com opções: Engenheiro de FE, Engenheiro de BE, Analista de dados, Líder Técnico.
Senha: Campo obrigatório, mínimo de 6 e máximo de 15 caracteres.
Botão de Salvar: Habilitado somente quando o formulário é válido. Ao salvar, exibe o novo usuário no console e redireciona para a página de usuários.
Edit User Page
Adição ao Nav-Header: Inserido o link "Edit User" para acessar a página de edição de usuário existente.
Formulário:
Todos os campos já preenchidos com os dados de um usuário para edição.
Botão de Salvar: Habilitado somente quando o formulário é válido. Ao salvar, exibe o usuário editado no console e redireciona para a página de usuários.
Users Page
Lista de Usuários:
Uma tabela lista todos os usuários cadastrados.
Cada item da lista exibe: Nome, E-mail, Função.
Botão Editar: Ícone de lápis para redirecionar à tela de edição do usuário.
Botão Excluir: Ícone de X para remover o usuário da lista.
Botão NEW: Botão para adicionar novo usuário, redirecionando à tela de adição de usuário.
Home Page
Seção de Informações Resumidas:
Quantidade total de usuários cadastrados.
Tabela de Quantidade de Usuários por Função:
Exibe a quantidade de usuários para cada uma das funções disponíveis.
