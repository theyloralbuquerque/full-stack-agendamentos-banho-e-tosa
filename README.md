# API Escola
Esta API é projetada para fins didáticos e colocar em prática o que aprendi no curso de JavasScript e TypeScript moderno. Ela oferece operações CRUD (Criar, Ler, Atualizar e Deletar) para manipular registros de alunos e suas informações relacionadas.

## Endpoints Disponíveis:
Tokens (todas as requisições precisarão de token):
* POST /tokens/: Cria um token desde que passe no body um user válido.

Alunos:
* POST /alunos/: Cria um aluno com os dados passados no body.
* GET /alunos/{id}: Retorna um aluno.
* GET /alunos/: Retorna todos os alunos.
* PUT /alunos/{id}: Atualiza um aluno com base no id passado na URL (para identificar o aluno) e no(s) atributo(s) passado(s) no body.
* DELETE /alunos/{id}: Deleta um aluno.

Users:
* POST /users/: Cria um usuário com os dados passados no body.
* GET /users/{id}: Retorna um usuário.
* GET /users/: Retorna todos os usuários.
* PUT /users/{id}: Atualiza um usuário com base no id passado na URL (para identificar o usuário) e no(s) atributo(s) passado(s) no body.
* DELETE /users/{id}: Deleta um usuário.

## Utilização:
Para começar a utilizar a API, siga os seguintes passos:
Instale as dependências necessárias.
Inicie o servidor onde a API está hospedada.
Comece a interagir com a API para gerenciar os alunos da escola.

## Exemplo de Requisição:
Para adicionar um novo alno, basta enviar uma requisição POST para o endpoint /alunos/ com os dados do aluno no corpo da requisição no formato JSON:
```json
{
	"nome": "Aluno 3",
	"sobrenome": "Teste",
	"email": "teste3@gmail.com",
	"idade": 18,
	"peso": 82.8,
	"altura": 1.85
}
```
## Endpoints no Insomnia:
![image](https://github.com/theyloralbuquerque/api-escola/assets/109389510/e83542ac-e5d9-4b7a-8631-8fd356d86208)

![image](https://github.com/theyloralbuquerque/api-escola/assets/109389510/7c38b3a7-d0bd-4442-825d-29bc64ab5c38)

![image](https://github.com/theyloralbuquerque/api-escola/assets/109389510/5da65ae4-0bb7-4d6e-a391-9603c108d276)

![image](https://github.com/theyloralbuquerque/api-escola/assets/109389510/8d81f16d-ce66-439f-bc09-eee762cb9f8e)
