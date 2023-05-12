# API REST com TypeScript e Nodejs

Este é um projeto de API REST, com TypeScript, NodeJS e banco de dados relacional rodando com XAMPP em localhost.
Nele é possível, adicionar itens, fazer requisições, altera-las e deleta-las.


Primeiramente é necessário clonar o repositório, após isso, dentro do editor de código seguimos os seguintes passos:

Para rodar o servidor, primeiro é necessário instalar todas as dependências no terminal com o comando:
```
npm i

```
ou caso uilize o yarn, o comando é:

```
yarn add

```

Após isso, é necessário o download do arquivo do banco de dados para uso, o arquivo pode ser encontrado no link abaixo:

https://drive.google.com/file/d/12n_t_6Is4Ixu_48KCGbm3VskRKNKd_LH/view?usp=sharing

Com o arquivo baixado, é necessário o download da ferramenta XAMPP para poder rodar o banco localmente, o link para download da ferramenta está logo abaixo:
https://www.apachefriends.org/pt_br/download.html

após instalar a ferramenta, você precisa abrir o painel de controle e iniciar os serviços Mysql e Apache como na imagem a seguir:

![xampp](https://github.com/lenonlnc/api-rest-ts-node/assets/131901106/a7f34b6b-dea5-465a-b302-cac1b503bcaa)

Eles são necessários para podermos não só fazer a conexão com o banco mas também utilizar a ferramenta phpmyadmin, para a administração das entidades do banco.
Com os passos anteriores prontos, agora no editor de código de sua preferência é só rodar o comando:
```
npm run dev

```
Ele vai iniciar o servidor. Se a mensagem seguinte for mostrada no terminal:
```
Server ready and running at PORT: 3000
```

Então está tudo funcionando corretamente 

Para testes das requisições dos endpoints eu sugiro o uso de um app específico para isso ao invés do próprio navegador, como Postman ou Insomnia.
Vou deixar o link para download de ambos abaixo junto com o link de um plugin de datas do insomnia que utiliza momentjs, para poder inserir datas nas requisições com mais facilidade.

Insomnia:
https://insomnia.rest/plugins/insomnia-plugin-date-add, 
https://insomnia.rest/

Postman:
https://www.postman.com/





# Dentro da API

Nesta seção, irei explicar as endpoints da API juntamente com os tipos de dado de entrada e saída de cada rota.
Começando pelas rotas de inserção de dados no banco, ou rotas de POST:

# POST
A API conta com as seguintes rotas de inserção:

```
/license/insert

``` 
e

```
/company/insert

``` 

Na primeira rota, temos a inserção de Licenças. a entrada de dados necessária é em formato JSON da seguinte forma:

```
{
	"number": "1231231212312331",
	"environmental_agency" : "FEPAM",
	"issued_at": "2023-05-12",
	"validity": "2015-05-12",
	"company_id": 2
}

```

no caso da coluna de validity é interessante o uso do plugin que eu citei acima, pois a coluna issued_at, que é a data de emissão, vai ser sempre a data do dia em que foi criada a licença.


Ja na rota de empresas, temos a seguinte entrada de dados:
```
{
	"name" : "HyperX",
	"corporate_name": "razão social",
		"cnpj": "12345278901234",
		"cep": "12345678",
		"city": "porto alegre",
		"state": "rs",
		"neighborhood": "rio branco",
		"complement": "complemento"
}

```
O retorno de ambos os endpoints é um number, que é o id do item criado.


# DELETE

A API conta com as seguintes rotas de deleção:

```
/license/delete/:id

```
e

```
/company/delete/:id

```
Ambas as rotas recebem o id da licença ou empresa à serem deletadas e tem o retorno ```true```


# PUT

A API conta com as seguintes rotas de atualização:

```
/license/update/:id

```
e

```
/company/update/:id

```

Ambas as rotas, novamente, recebem o id da licença ou empresa à serem deletadas e tem o retorno ```true```


# GET

A API conta com as seguintes rotas de requisição:

# getAllLicenses

```

/licenses?page=1&limit=10&filter='' 

```
Recebe somente na url, por questões de possível paginação, a pagina, o limite de dados a serem retornados, e um possível filtro. E retorna todas as licenças disponíveis no banco.


# getAllCompanies

```

/companies?page=1&limit=10&filter='' 

```
Assim como a anterior, esta rota recebe os mesmos dados dentro da url, e retorna todas as empresas no disponíveis no banco.


# getLicenseById

```

/license/:id

```
Recebe na url o id de uma licença e retorna todos os dados da mesma.


# getCompanyById

```

/company/:id

```
Recebe na url o id de uma empresa e retorna todos os dados da mesma.



