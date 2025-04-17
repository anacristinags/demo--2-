# 👩🏻‍💻 Teste dti digital 

Projeto desenvolvido para o processo seletivo da **dti digital**.

## 📌 Sumário
1. [Informações sobre o projeto](#1-informações-sobre-o-projeto)  
2. [Premissas Assumidas e Decisões de Projeto](#2-premissas-assumidas-e-decisões-de-projeto)  
3. [Tecnologias Utilizadas](#3-tecnologias-utilizadas)  
4. [Pré-requisitos](#4-pré-requisitos)  
5. [Instruções para Executar o Sistema](#5-instruções-para-executar-o-sistema)  
6. [Imagens e Vídeos](#6-imagens-e-vídeos)  

---

## 1. Informações sobre o projeto

Este é um sistema para organização de **notas e frequência de alunos**.  
Cada aluno possui:

- Uma nota (de 0 a 10) em cada uma das **cinco disciplinas**;
- Um percentual de **frequência** (de 0% a 100%).

O sistema permite:

- Cadastro de alunos com suas respectivas notas e frequência;
- Cálculo da média de cada aluno;
- Cálculo da média da turma por disciplina;
- Identificação de alunos com:
  - **Média acima** da média geral da turma;
  - **Frequência abaixo de 75%** (atenção especial).

---

## 2. Premissas Assumidas e Decisões de Projeto

- O **frontend** foi desenvolvido em **React Native**;
- O **backend** foi desenvolvido com **Spring Boot**;
- O sistema **não utiliza banco de dados** — os dados são armazenados temporariamente na memória;
- É necessário cadastrar **pelo menos dois alunos** para liberar a geração do relatório;
- O sistema possui duas telas:
  - Tela Home para **cadastro** de alunos;
  - Tela de **relatório** com a tabela de notas e destaques;
- O cadastro só é permitido após **preenchimento de todos os campos**;
- A comunicação entre frontend e backend ocorre via **requisições HTTP (`fetch`)**, assumindo que ambos estão rodando **na mesma rede local (via IP)**.

---

## 3. Tecnologias Utilizadas

- 💻 **IDE**: Visual Studio Code  
- ☕ **Java JDK**: versão 17.0.14  
- 🚀 **Spring Boot**: versão 3.4.4  
- 📱 **React Native** com Expo (https://expo.dev)

---

## 4. Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Java JDK 17**
- **Spring Boot**, com as dependências:
  - `spring-boot-starter-web`
  - `spring-boot-devtools`
- **Expo Go** (em um dispositivo móvel)  
  ou  
  **Node.js + Expo CLI** instalados localmente para rodar o app no navegador/simulador.

---

## 5. Instruções para Executar o Sistema

### Backend (Spring Boot)

1. Clone o repositório com o GitHub Desktop ou via terminal:  
   `git clone <https://github.com/anacristinags/teste-dti-digital>`
2. Abra o projeto no IntelliJ IDEA, VSCode ou outra IDE de sua preferência;
3. Execute a aplicação Spring Boot.

### Frontend (React Native com Expo)

#### Opção 1 - Acessar via navegador

- Acesse o projeto diretamente no Expo Snack:  
  [https://snack.expo.dev/@anacristinags/teste-dti](https://snack.expo.dev/@anacristinags/teste-dti)

#### Opção 2 - Rodar localmente

- Abra o projeto em sua máquina com o VSCode ou terminal;
- No terminal, execute:  
```bash
npm install  
npx expo start
```

### ⚠️ Importante:
Nos arquivos `RelatorioView.js` e `HomeView.js`, existe uma variável chamada API_URL:
```bash
const API_URL = 'http://192.168.18.8:8080/demo';
```

Substitua `192.168.18.8` pelo **IP local do seu computador**.  
Para descobrir o IP:

1. Abra o **Prompt de Comando** (Windows);
2. Digite o comando: `ipconfig`;
3. Copie o valor do campo **"Endereço IPv4"**.

## 6. Imagens e Vídeos 
### Demonstração em Vídeo: 
https://github.com/user-attachments/assets/08bd61c0-0a1d-43a1-9b01-615068c08701
### Obs: O vídeo ficou longo então acelerei ele no 2x ⏩

### Imagens do projeto:
<div align="center"> <img src="https://github.com/user-attachments/assets/b61fd870-a21c-404c-af63-456deca411d7" width="700px" />
</div> 
<div align="center"> <img src="https://github.com/user-attachments/assets/52898c06-9458-4ef5-b394-37277fa9e1bc" width="700px" />
</div> 
<div align="center"> <img src="https://github.com/user-attachments/assets/cf30fbbd-f3c9-4214-858b-776b3d0e8f77" width="700px" />
</div> 

### Imagens do Backend (API):
<div align="center"> <img src="https://github.com/user-attachments/assets/2f21734c-2739-4ede-aeda-76e63551c365" width="700px" />
</div>
<div align="center"> <img src="https://github.com/user-attachments/assets/0fe4674f-b854-4cce-91eb-51eb64a08b83" width="700px" />
</div>
<div align="center"> <img src="https://github.com/user-attachments/assets/82254a01-4473-48b7-bff6-e6da0dc146f8" width="700px" />
</div>
 
---

Agradeço pela oportunidade de participar do processo seletivo e pelo convite para desenvolver este projeto! Espero que o resultado atenda às expectativas! 😊  
Fico à disposição para qualquer dúvida ou esclarecimento.
