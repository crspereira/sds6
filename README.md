# DS Movie - Classificação de Filmes
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/crspereira/sds1/blob/master/LICENSE) 

# Sobre o projeto

https://dsmovie-claytonpereira.netlify.app/

DS Movie é uma aplicação full stack web construída durante a 6ª edição da **Semana DevSuperior** (#sds6), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em classificar filmes, onde os dados de e-mail e score enviados pelo usuário são coletado. E seguida estes dados são salvos no banco de dados. O scores são recalculados pelo BackEnd e apresentados e forma de pontuação por estrelas pelo FrontEnd.

BackEnd hospedado no Heroku e FrontEnd no NetliFly

## Layout web
![Web 1](https://github.com/crspereira/sds6/blob/assets/assets/web1.png)

![Web 2](https://github.com/crspereira/sds6/blob/assets/assets/web2.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/crspereira/sds6/blob/assets/assets/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS

## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/crspereira/sds6

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/crspereira/sds6

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Clayton Pereira

https://www.linkedin.com/in/claytonpereira


