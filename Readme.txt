- START
* TestWebSelenium_test.js que realiza o teste de login na p�gina do Personal atrav�s do framework codeceptjs utilizando a frame Selenium como base para testar a web.
* Teste segue as diretrizes propostas na task QA-277

* Instala��o do projeto selenium baseado no tutorial descrito em www.codecept-io/quickstart

- Configura��o do arquivo CODECEPT.CONF.JS
** A configura��o do arquivo codecept.conf.js deve declarar em plugins:
	plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        }
para que o servi�o do selenium seja reconhecido e iniciado.

** Em helpers um waitForTimeout tamb�m deve ser declarado para que o teste n�o quebre antes da inicia��o de qualquer bot�o.

** Em chromeOptions � onde deve ser realizada a declara��o de ser ou n�o Headless ou n�o.
