(() => {
    const startBtn = document.querySelector('#voice');
    const output = document.querySelector('#textMessage');
    let cond = false;
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-br";
      recognition.continuous = true;
      recognition.start();
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            const content = event.results[i][0].transcript.trim();
            output.textContent = content;
          }         
        }
      };
    };
    startBtn.addEventListener('click', () => start());
  })();