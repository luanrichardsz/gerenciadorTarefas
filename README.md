Porque usar Express, Body Parser e Fs? 

O Express.js é um framework para Node.js usado para criar aplicações web e APIs de forma rápida e eficiente. 
Ele facilita:

Roteamento: Gerencia URLs e métodos HTTP (GET, POST, etc.).

Middleware: Adiciona funcionalidades como autenticação e manipulação de dados.
APIs REST: Simplifica a criação de APIs escaláveis.
Templates: Suporte a motores como EJS e Pug para páginas dinâmicas.
Modularidade: Organiza rotas e funcionalidades em módulos.

É simples, flexível, rápido e amplamente utilizado devido ao seu ecossistema rico e suporte da comunidade. Ideal para projetos pequenos e grandes.

O Body Parser é um middleware usado para analisar (ou "parsear") o corpo das requisições HTTP em aplicações Node.js. Ele converte os dados do corpo da requisição (como JSON ou formulários) em objetos JavaScript acessíveis no req.body. Isso é útil principalmente para lidar com requisições POST, PUT ou PATCH, onde informações são enviadas no corpo da requisição.

Beneficios:
Facilidade de Manipulação de Dados: Converte automaticamente dados de requisições em objetos JavaScript acessíveis via req.body, simplificando o processamento.
Suporte a Diversos Formatos: Suporta formatos como JSON e application/x-www-form-urlencoded, tornando-o versátil para diferentes tipos de dados.
Integração com o Express: A partir da versão 4.16, está integrado diretamente no Express, dispensando a necessidade de instalar pacotes adicionais.
Simplificação de Código: Evita a necessidade de escrever código extra para analisar dados do corpo da requisição, tornando o desenvolvimento mais rápido e eficiente.
Aumento da Escalabilidade: Facilita o processamento de dados em APIs RESTful, tornando mais simples lidar com grandes volumes de requisições.

O FS (File System) é um módulo nativo do Node.js que permite interagir com o sistema de arquivos. Ele oferece funções para:

Ler e escrever arquivos (assíncrona ou síncrona).
Manipular diretórios (criar, listar, excluir).
Verificar existência de arquivos e diretórios.
Obter informações sobre arquivos (como tamanho ou permissões).
É fundamental para operações de leitura, gravação e gestão de arquivos em aplicações Node.js, com métodos simples e eficientes.
