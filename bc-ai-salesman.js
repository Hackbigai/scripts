    // bc-ai-salesman.js
    console.log('inject chat bot .js')
    // Function to inject the chatbot UI HTML and CSS
    function injectChatbotUI() {
        const chatbotStyle = document.createElement("style");
        chatbotStyle.innerHTML = `
    /* Add your CSS code here */
  <style>
    /* The chat UI wrapper */
    #chatBotButton {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(140deg, #282ddc 0%, #03bffd 100%);
        color: white;
        padding: 8px;
        border-radius: 8px;
        z-index: 9999;
    }
    #chatUi {
        background-color: antiquewhite;
        border: 1px solid rgb(211, 200, 200);
        border-radius: 16px;
        overflow: hidden;
        position: fixed;
        max-height: 500px;
        width: 400px;
        right: 20px;
        bottom: 20px;
        z-index: 9999;
    }

    /* Chat header css starts here */
    #chatUi .chatheader {
        display: flex;
        gap: 16px;
        height: 100px;
        width: 100%;
        background: linear-gradient(140deg, #282ddc 0%, #03bffd 100%);
        box-shadow: 0px 2px 20px 0px;
        padding: 16px;
    }

    #chatUi .chatheader .profileImage {
        height: 100%;
        aspect-ratio: 1;
        background-color: whitesmoke;
        border: 1px solid white;
        border-radius: 50%;
        background-image: url("https://img.freepik.com/premium-photo/cyborg-head-artificial-intelligence-3d-rendering_117023-271.jpg?w=740");
        background-position: center;
        background-size: cover;
    }

    #chatUi .chatheader .proflieInfo {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-end;
    }
    #chatUi .chatheader .proflieInfo .name {
        color: white;
        font-size: x-large;
        font-weight: bold;
    }
    #chatUi .chatheader .proflieInfo .designation {
        color: whitesmoke;
        font-size: small;
    }
    #chatUi .chatheader .proflieInfo .company {
        color: whitesmoke;
        font-size: smaller;
    }    
    #chatUi .chatheader .close{
        position: absolute;
        right: 8px;
        top: 8px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
    }
    #chatUi .chatheader .close:hover {
        opacity: 1;
    }
    #chatUi .chatheader .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    #chatUi .chatheader .close:before {
        transform: rotate(45deg);
    }
    #chatUi .chatheader .close:after {
        transform: rotate(-45deg);
    }



    /* Chat Body css starts here */
    #chatUi .chatbody {
        height: 300px;
        overflow-y: scroll;
    }

    #chatUi .chatbody::-webkit-scrollbar {
        display: none;
    }

    #chatUi .chatbody .message {
        display: flex;
        gap: 16px;
        margin: 4px 8px;
    }

    #chatUi .chatbody .message .profile {
        height: 50px !important;
        width: 50px !important;
        background-color: red;
        border: 1px solid white;
        border-radius: 50%;
        position: sticky;
        top: 8px;
        background-position: center;
        background-size: cover;
    }

    .userAvatar{
        background-image: url("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1692215632~exp=1692216232~hmac=50654f18e9749e7a10b2bb912b0d4f42ce8f98eab96ba8f8e010825ef1b89689");
    }
    .AIavtar{
        background-image: url("https://img.freepik.com/premium-photo/cyborg-head-artificial-intelligence-3d-rendering_117023-271.jpg?w=740");
    }

    #chatUi .chatbody .message .text {
        flex: 1;
        text-align: justify;
    }



    /* Chat footer Css starts here */
    #chatUi .chatfooter {
        height: 60px;
        background-color: white;
        padding: 8px;
        display: flex;
        gap: 16px;
        box-shadow: 0px -2px 20px 0px;
    }

    #chatUi .chatfooter #chat-input {
        flex: 1;
        background-color: #dcdbdb;
        border: none;
        border-radius: 8px;
    }

    #chatUi .chatfooter #messageLoading {
        height: 100%;
        aspect-ratio: 1;
    }

    #chatUi .chatfooter #sendbutton {
        position: relative;
        background: linear-gradient(140deg, #282ddc 0%, #03bffd 100%);
        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    #chatUi .chatfooter #sendbutton * {
        position: absolute;
        border: none;
        background: none;
    }

    #chatUi .chatfooter #sendbutton svg {
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
    }

    #chatUi .chatfooter #sendbutton input {
        width: 100%;
        height: 100%;
    }


    /**
     * ==============================================
     * Dot Typing
     * ==============================================
     */
    .dot-typing {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #9880ff;
      color: #9880ff;
      box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      animation: dot-typing 1.5s infinite linear;
    }

    @keyframes dot-typing {
      0% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      16.667% {
        box-shadow: 9984px -10px 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      33.333% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      50% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px -10px 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      66.667% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
      83.333% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px -10px 0 0 #9880ff;
      }
      100% {
        box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
      }
    }
  </style>
  `;

        const chatbotDiv = document.createElement("div");
        chatbotDiv.innerHTML = `
    <!-- Add your HTML code here -->
<button id="chatBotButton" onclick="openChatUI()" style="position: fixed; bottom: 20px; right: 20px; background: linear-gradient(140deg, #282ddc 0%, #03bffd 100%); color: white; padding: 8px; border-radius: 8px; z-index: 9999;">
    Chat With Acme AI Salesman
</button>
<div id="chatUi" style=" display:none; background-color: antiquewhite; border: 1px solid #8f8f8f; border-radius: 16px; overflow: hidden; position: fixed; max-height: 500px; width: 400px; right: 20px; bottom: 20px; z-index: 9999;">
    <div class="chatheader">
        <div class="profileImage"></div>
        <div class="proflieInfo">
            <div class="name">Joe Ben</div>
            <div class="designation">AI Salesman</div>
            <div class="company">The ACME company</div>
        </div>
        <button onclick="closeChatUI()" class="close"></a>
    </div>
    <div id="chat-messages" class="chatbody"></div>
    <form id="chat-form" action="" class="chatfooter">
        <input id="chat-input" type="text" placeholder="Enter your message here">
        <div id="messageLoading" class="snippet" data-title="dot-typing" style="display:none;">
          <div class="stage">
            <div class="dot-typing"></div>
          </div>
        </div>
        <div id="sendbutton">
            <svg fill="#ffffff" height="800px" width="800px" version="1.1" id="Capa_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 495.003 495.003" xml:space="preserve">
                <g id="XMLID_51_">
                    <path id="XMLID_53_" d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
                l-67.6-32.22V456.687z" />
                    <path id="XMLID_52_" d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
                c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
                l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
                L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z" />
                </g>
            </svg>
            <input type="submit" value="">
        </div>
    </form>
</div>`;

        document.head.appendChild(chatbotStyle);
        document.body.appendChild(chatbotDiv);

        const form = document.querySelector('#chat-form');
        const chatInput = document.querySelector('#chat-input');
        var isLoadingMessage = false;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (isLoadingMessage) return

            isLoadingMessage = true;
            const messageLoading = document.querySelector('#messageLoading');
            const sendButton = document.querySelector('#sendbutton');
            messageLoading.style.display = "block"
            sendButton.style.display = "none"

            const message = chatInput.value;
            chatInput.value = '';
            storeTheMessagesToLocalStorage(message, "user")
            appendMessage(message, "user");


            // Prepare the body
            var body = {
                url: window.location.href,
                chat: getTheMessagesFromLocalStorage()
            }

            // Send the request
            fetch(`https://bc-ai-foundation.vercel.app/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(async (response) => response.json())
                .then(result => {
                    isLoadingMessage = false
                    messageLoading.style.display = "none"
                    sendButton.style.display = "block"

                    storeTheMessagesToLocalStorage(result.replay, "AI-Salesman")
                    appendMessage(result.replay, "AI-Salesman")
                })
                .catch(error => {
                    console.log('error', error)

                    isLoadingMessage = false
                    messageLoading.style.display = "none"
                    sendButton.style.display = "block"
                });

        });

    }


    function openChatUI() {
        const chatUi = document.getElementById("chatUi");
        const chatbotButton = document.getElementById("chatBotButton");

        chatUi.style.display = "block"
        chatbotButton.style.display = "none"
    }

    function closeChatUI() {
        const chatUi = document.getElementById("chatUi");
        const chatbotButton = document.getElementById("chatBotButton");

        chatUi.style.display = "none"
        chatbotButton.style.display = "block"
    }

    function appendMessage(message, author = "AI-Salesman") {

        const isRightSide = author == "user";

        const messageElement = document.createElement('div');
        messageElement.className = "message"
        if (isRightSide) {
            messageElement.style.flexDirection = "row-reverse"
        }


        messageElement.innerHTML = `<div class="profile ${isRightSide ? 'userAvatar' : 'AIavtar'}"></div>
            <div class="text" ${isRightSide && 'style="text-align:right"'}>${message}</div>`;

        document.querySelector('#chat-messages').appendChild(messageElement);
    }

    function storeTheMessagesToLocalStorage(message, author) {
        // Save the message to localStorage
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push({ name: author, message });
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }


    function getTheMessagesFromLocalStorage() {
        return JSON.parse(localStorage.getItem('chatMessages')) || [];
    }

    // Call the function to inject the chatbot UI when the script is loaded
    injectChatbotUI();
