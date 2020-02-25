# front-end

As páginas da aplicação foi feito utilizando o Angular na versão 8 e para template de estilização das páginas foi utilizado o Material Design.

Para executar o Angular basta instalar as dependências com o comando "npm install" e após a instalação das dependências utilizar o comando "ng serve" para executar o frontend da aplicação sendo o mesmo exibido no link "http://localhost:4200". 

# back-end

O servidor foi implementado na linguagem java com o framework Spring Boot que é baseada no Spring e para o armazenamento de dados foi utilizado o servidor MySQL na versão 8. O arquivo "db-backup-25-02-2020.sql" contém o script para a criação do banco de dados e alguns dados salvos.

Para executar o servidor deverão ser executadas os seguintes passos:

# pelo terminal:
após baixar o projeto pelo comando git clone (https://github.com/Miler1/leaflet-project.git) entrar dentro da pasta back-end e executar o comando:

"mvn spring-boot:run"

O comando acima requer o maven instalado em sua máquina o link:http://maven.apache.org/download.cgi instala as dependencias do maven quando é executado pela primeira vez e depois executa o servidor.

caso o comando exibir a seguinte mensagem: 
"The JAVA_HOME environment variable is not defined correctly This environment variable is needed to run this program NB: JAVA_HOME should point to a JDK not a JRE" 

basta executar o comando:
"export PATH=$JAVA_HOME/jre/bin:$PATH" na qual permitirá a execução do comando do maven normalmente.

# pela IDE

basta somente importar o projeto pelo eclipse ou qualquer outra IDE com o Java devidamente instalado.

Para executar o servidor em modo de produção basta executar os comandos:
# Construir o projeto
mvn package 
# Executar o servidor 
java -jar target/spring-boot-restapi-mysql-0.0.1-SNAPSHOT.jar
