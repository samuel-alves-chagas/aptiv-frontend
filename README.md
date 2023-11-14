APTIV Frontend

- Abra um terminal na pasta do projeto e baixe suas dependências:
```
npm install
```

Para executar os testes é preciso abri um bash e executar o projeto :

```
npm run start
```

Para abrir a interface gráfica abra um novo bash e digite:


```
./node_modules/.bin/cypress open
```

Para executar os testes por linha de comando abra um novo bash e digite:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
OBS: Ao executar por linha de comando um relatório será disponibilizado na pasta reports e um vídeo da execução será disponibilizado na pasta videos