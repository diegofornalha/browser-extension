# **Taxy AI: Automação Completa do Navegador**

**[Lista de espera](https://docs.google.com/forms/d/e/1FAIpQLScAFKI1fZ1cXhBmSp2HM93Jvuc8Jvrxh5iSbkKhtwKN-OHoTQ/viewform)** | **[Discord](https://discord.gg/QNTaa8PH6b)**

Taxy usa o GPT-4 para controlar seu navegador e realizar ações repetitivas em seu nome. Atualmente, permite definir instruções ad-hoc. No futuro, também suportará fluxos de trabalho salvos e agendados.

O status atual do Taxy é **prévia de pesquisa**. Muitos fluxos de trabalho falham ou confundem o agente. Se você quiser hackear o Taxy para melhorá-lo ou testá-lo em seus próprios fluxos de trabalho, siga as instruções abaixo para executá-lo localmente. Se você quiser saber quando estará disponível para uso mais amplo, inscreva-se na nossa **[lista de espera](https://docs.google.com/forms/d/e/1FAIpQLScAFKI1fZ1cXhBmSp2HM93Jvuc8Jvrxh5iSbkKhtwKN-OHoTQ/viewform)**.

Taxy é totalmente de código aberto e não enviamos nenhum conteúdo de página ou instruções para nossos servidores.

Aqui está o Taxy usando o Google Agenda com o comando "Agendar standup amanhã às 10h. Convidar **[david@taxy.ai](mailto:david@taxy.ai)**"

![https://user-images.githubusercontent.com/176426/228092695-1bc11ea9-bfb7-470d-bbc6-0026e93c23c3.gif](https://user-images.githubusercontent.com/176426/228092695-1bc11ea9-bfb7-470d-bbc6-0026e93c23c3.gif)

## **Índice**

- **[Taxy AI: Automação Completa do Navegador](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#taxy-ai-automa%C3%A7%C3%A3o-completa-do-navegador)**
    - **[Índice](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#%C3%ADndice)**
    - **[Instalação e Execução](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#instala%C3%A7%C3%A3o-e-execu%C3%A7%C3%A3o)**
        - **[Instalando a extensão](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#instalando-a-extens%C3%A3o)**
        - **[Executando no seu navegador](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#executando-no-seu-navegador)**
    - **[Como Funciona - O Ciclo de Ação](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#como-funciona---o-ciclo-de-a%C3%A7%C3%A3o)**
    - **[Demonstrações Simples](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#demonstra%C3%A7%C3%B5es-simples)**
        - **[Protegendo a branch principal no GitHub](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#protegendo-a-branch-principal-no-github)**
        - **[Procurando e reproduzindo o filme Oblivion no Netflix](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#procurando-e-reproduzindo-o-filme-oblivion-no-netflix)**
        - **[Criando um evento no calendário](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#criando-um-evento-no-calend%C3%A1rio)**
        - **[Escrevendo um ensaio no OpenAI Playground](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#escrevendo-um-ensaio-no-openai-playground)**
        - **[Adicione o seu próprio!](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#adicione-o-seu-pr%C3%B3prio)**
    - **[Tecnologias Utilizadas](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#tecnologias-utilizadas)**
    - **[Recursos](https://chat.openai.com/chat/e668536f-3358-4c8b-a2c3-e20ae9889a6e#recursos)**

## **Instalação e Execução**

Atualmente, esta extensão está disponível apenas neste repositório do GitHub. Lançaremos no Chrome Web Store após adicionar recursos para aumentar sua usabilidade para um público não técnico. Para construir e instalar a extensão localmente em seu computador, siga as instruções abaixo.

### **Instalando a extensão**

1. Certifique-se de ter **[Node.js](https://nodejs.org/)** >= **16**.
2. Clone este repositório
3. Execute **`yarn`** para instalar as dependências
4. Execute **`yarn start`** para construir o pacote
5. Carregue sua extensão no Chrome, fazendo o seguinte:
    1. Navegue até **`chrome://extensions/`**
    2. Ative **`Modo do desenvolvedor`**
    3. Clique em **`Carregar extensão sem compactação`**
    4. Selecione a pasta **`build`** gerada pelo **`yarn start`**

### **Executando no seu navegador**

1. Uma vez instalado, o plugin do navegador estará disponível em duas formas:
    1. Como um pop-up. Ative pressionando **`cmd+shift+y`** no Mac ou **`ctrl+shift+y`** no Windows/Linux, ou clicando no logotipo da extensão no navegador.
    2. Como um painel de ferramentas do desenvolvedor. Ative primeiro abrindo as ferramentas do desenvolvedor do navegador e depois navegando até o painel **`Taxy AI`**.
2. A próxima coisa que você precisa fazer é criar ou acessar uma **[Chave da API OpenAI](https://platform.openai.com/account/api-keys)** existente e colá-la na caixa fornecida. Esta chave será armazenada de forma segura no seu navegador e não será enviada a terceiros.
3. Finalmente, navegue até uma página da web em que deseja que o Taxy aja (por exemplo, o **[OpenAI Playground](https://platform.openai.com/playground)**) e comece a experimentar!

## **Como Funciona - O Ciclo de Ação**

1. Taxy executa um script de conteúdo na página da web para extrair todo o DOM. Ele simplifica o HTML recebido para incluir apenas elementos interativos ou semanticamente importantes, como botões ou texto. Ele atribui um ID a cada elemento interativo. Em seguida, "templatiza" o DOM para reduzir ainda mais a contagem de tokens.
2. Taxy envia o DOM simplificado, juntamente com as instruções do usuário, para um LLM selecionado (atualmente GPT-3.5 e GPT-4 são suportados). Taxy informa o LLM de dois métodos para interagir com a página da web:
    1. **`click(id)`** - clique no elemento interativo associado a esse ID
    2. **`setValue(id, text)`** - foque em uma entrada de texto, limpe o texto existente e digite o texto especificado nessa entrada
3. Quando Taxy recebe uma resposta do LLM, ele analisa a resposta em busca de uma ação. O ciclo de ação terminará nesta etapa se qualquer uma das seguintes condições for atendida:
    1. O LLM acredita que a tarefa está completa. Em vez de uma ação, o LLM pode retornar uma indicação de que acredita que a tarefa do usuário está completa com base no estado do DOM e no histórico de ações até este ponto.
    2. O usuário parou a execução da tarefa. O usuário pode interromper a execução do LLM a qualquer momento, sem esperar que ele termine.

1. Havia um erro. A arquitetura com foco na segurança do Taxy faz com que ele pare automaticamente a execução em caso de uma resposta inesperada.
2. Taxy executa a ação usando a **[API chrome.debugger](https://developer.chrome.com/docs/extensions/reference/debugger/)**.
3. A ação é adicionada ao histórico de ações e Taxy retorna ao passo 1, analisando o DOM atualizado. Todas as ações anteriores são enviadas ao LLM como parte do prompt usado para determinar a próxima ação. O Taxy pode atualmente completar no máximo 50 ações para uma única tarefa, embora, na prática, a maioria das tarefas exija menos de 10 ações.

## **Demonstração Simples**

### **Protegendo a branch principal no GitHub**

![https://user-images.githubusercontent.com/41524992/228385404-175bf633-de1d-43eb-862c-2cfd5a7a674a.gif](https://user-images.githubusercontent.com/41524992/228385404-175bf633-de1d-43eb-862c-2cfd5a7a674a.gif)

### **Pesquisando e reproduzindo o filme Oblivion no Netflix**

![https://user-images.githubusercontent.com/41524992/228063949-c26a4b54-92ae-4e22-8177-7e78c0d9a29b.gif](https://user-images.githubusercontent.com/41524992/228063949-c26a4b54-92ae-4e22-8177-7e78c0d9a29b.gif)

### **Criando um evento no calendário**

![https://user-images.githubusercontent.com/41524992/228064011-0ca3a39d-cebb-4a55-9e2b-6aa3ae5b3f43.gif](https://user-images.githubusercontent.com/41524992/228064011-0ca3a39d-cebb-4a55-9e2b-6aa3ae5b3f43.gif)

### **Escrevendo um ensaio no OpenAI Playground**

![https://user-images.githubusercontent.com/41524992/228064056-84eab4e4-b5b5-4e79-b1e3-be92f14d2607.gif](https://user-images.githubusercontent.com/41524992/228064056-84eab4e4-b5b5-4e79-b1e3-be92f14d2607.gif)

### **Adicione o seu próprio!**

Se você tiver uma demonstração interessante que gostaria de compartilhar, envie um PR para adicionar a sua!

## **Tecnologias Utilizadas**

Tecnologia atualmente utilizada por esta extensão:

- **[Manifesto da Extensão do Chrome V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)**
- **[React 17](https://reactjs.org/)**
- **[Webpack 5](https://webpack.js.org/)**
- **[Webpack Dev Server 4](https://webpack.js.org/configuration/dev-server/)**
- **[React Hot Loader](https://github.com/gaearon/react-hot-loader)**
- **[eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app)**
- **[Prettier](https://prettier.io/)**
- **[TypeScript](https://www.typescriptlang.org/)**

## **Recursos**

- **[Introdução às Extensões do Chrome](https://developer.chrome.com/extensions/getstarted)**
