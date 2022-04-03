function criaMensagemAtendente(inputMsgCustomer) {
  const contentBox = document.getElementById("contentBox");
  contentBox.insertAdjacentHTML(
    "beforeend",
    `
    <div class="atendente" id="customerDiv">
      <p class="atendente-title">
        Atendente diz:
      </p>
      <p class="atendente-msg">
        ${inputMsgCustomer}
      </p>
    </div>
    `
  );
  contentBox.scrollTop = contentBox.scrollHeight;
}

function criaMensagemCliente(inputMsgClient) {
  const contentBox = document.getElementById("contentBox");
  contentBox.insertAdjacentHTML(
    "beforeend",
    `
    <div class="cliente" id="clientDiv">
      <p class="cliente-title">
        Você diz
      </p>
      <p class="cliente-msg">
        ${inputMsgClient}
      </p>
    </div>
    `
  );
  contentBox.scrollTop = contentBox.scrollHeight;
}

const formMsg = document.getElementById("formMsg");
formMsg.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputMsgClient = document.getElementById("inputMsgClient");
  const inputMsgCustomer = document.getElementById("inputMsgCustomer");

  if (inputMsgClient.value == "") {
    if (inputMsgCustomer.value === "") {
      alert("EPA!!! IMPOSSIVEL MANDAR MENSAGEM COM CAMPO VAZIO");
    } else {
      criaMensagemAtendente(inputMsgCustomer.value);
      // console.log(inputMsgCustomer.value);
      inputMsgCustomer.focus();
      formMsg.reset();
    }
  } else {
    criaMensagemCliente(inputMsgClient.value);
    inputMsgCustomer.value = "";
    inputMsgClient.focus();
    formMsg.reset();
  }
});
