APTIV Frontend

- Abra um terminal na pasta do projeto e baixe suas dependências:
```
npm install
```

Para executar os testes pela interface gráfica:
```
./node_modules/.bin/cypress open
```

Para executar os testes por linha de comando:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
OBS: Ao executar por linha de comando um relatório será disponibilizado na pasta reports e um vídeo da execução será disponibilizado na pasta videos