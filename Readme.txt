- START
* TestWebSelenium_test.js que realiza o teste de login na página do Personal através do framework codeceptjs utilizando a frame Selenium como base para testar a web.
* Teste segue as diretrizes propostas na task QA-277

* Instalação do projeto selenium baseado no tutorial descrito em www.codecept-io/quickstart

- Configuração do arquivo CODECEPT.CONF.JS
** A configuração do arquivo codecept.conf.js deve declarar em plugins:
	plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        }
para que o serviço do selenium seja reconhecido e iniciado.

** Em helpers um waitForTimeout também deve ser declarado para que o teste não quebre antes da iniciação de qualquer botão.

** Em chromeOptions é onde deve ser realizada a declaração de ser ou não Headless ou não.
