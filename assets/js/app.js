let langbtn = document.querySelectorAll(".lang_btn");
let modalbtn = document.querySelectorAll(".modal_btn");
let modal = document.querySelectorAll(".modal_wrapper");
let modalclose = document.querySelectorAll(".close_modal");
let copybtn = document.querySelectorAll(".chat_link_copy_btn");
let chatlink = document.querySelectorAll(".chatlink_input");
let toolsbtn = document.querySelectorAll(".tools_btn");
let toolsmenu = document.querySelectorAll(".tools_menu");
let messageslayout = document.querySelector(".messages_layout");
let messagesitem = document.querySelectorAll(".message_list_item");
let messages = document.querySelectorAll(".message_list_item_in");
let checkboxs = document.querySelectorAll(".checkbox");
let parol = document.querySelector(".parol");
let formcheck = document.querySelectorAll(".form-check input");
let messagebubble = document.querySelector(".message_bubble");
let answerbubble = document.querySelector(".message_answer_bubble");
let answerbubbleclose = document.querySelector(
  ".message_answer_bubble .close_bubble",
);
let answers = document.querySelectorAll(".answer");
let burgermenu = document.querySelector(".burger_btn");
let chatfolders = document.querySelector(".chatfolders");
let settingsbtn = document.querySelector(".settings_btn");
let settingsmenu = document.querySelector(".messages_layout_header_settings");
let chatfolderitem = document.querySelectorAll(".chatfolder_item");

formcheck.forEach((input) => {
  input.onchange = () => {
    if (input.checked) {
      parol.classList.remove("active");
    } else {
      parol.classList.add("active");
    }
  };
});
if (chatfolderitem) {
  chatfolderitem.forEach((item) => {
    item.onclick = (e) => {
      if (
        !e.target.closest(".chatfolder_tools") &&
        !e.target.closest(".sound_btn")
      ) {
        chatfolderitem.forEach((element) => {
          element.classList.remove("active");
        });
        burgermenu.classList.remove("active");
        item.classList.add("active");
        chatfolders.classList.remove("chatfolders_active");
        messageslayout.classList.remove("messages_layout_active");
      }
    };
  });
}
if (settingsbtn) {
  settingsbtn.onclick = () => {
    settingsmenu.classList.toggle("menu_active");
  };
}
if (burgermenu) {
  burgermenu.onclick = () => {
    burgermenu.classList.toggle("active");
    chatfolders.classList.toggle("chatfolders_active");
    messageslayout.classList.toggle("messages_layout_active");
  };
}
if (langbtn) {
  langbtn.forEach((btn) => {
    btn.onclick = () => {
      langbtn.forEach((element) => {
        element.classList.remove("active");
      });
      btn.classList.add("active");
    };
  });
}
if (modalbtn) {
  modalbtn.forEach((modalbtn) => {
    modalbtn.onclick = () => {
      modal.forEach((modal) => {
        if (modalbtn.getAttribute("data-filter") == modal.getAttribute("id"))
          modal.classList.add("modal_active");
      });
    };
  });
}
if (modalclose) {
  modalclose.forEach((close) => {
    close.onclick = () => {
      modal.forEach((modal) => {
        if (close.getAttribute("data-filter") == modal.getAttribute("id"))
          modal.classList.remove("modal_active");
      });
    };
  });
}
if (copybtn) {
  copybtn.forEach((copybtn) => {
    copybtn.onclick = () => {
      chatlink.forEach((input) => {
        if (copybtn.getAttribute("data-filter") == input.getAttribute("id")) {
          navigator.clipboard.writeText(input.value);
        }
      });
    };
  });
}
toolsbtn.forEach((btn, index) => {
  btn.setAttribute("id", `${index}`);
  btn.onclick = () => {
    toolsmenu.forEach((menu, i) => {
      menu.setAttribute("id", `${i}`);
      if (menu.getAttribute("id") == btn.getAttribute("id")) {
        menu.classList.toggle("menu_active");
      } else {
        menu.classList.remove("menu_active");
      }
    });
  };
});
checkboxs.forEach((checkbox, i) => {
  checkbox.setAttribute("id", `checkbox${i}`);
});
if (messages) {
  messages.forEach((message, index) => {
    message.setAttribute("for", `checkbox${index}`);
    message.onclick = (e) => {
      if (!e.target.closest(".answer")) {
        checkboxs.forEach((checkbox) => {
          if (message.getAttribute("for") == checkbox.getAttribute("id")) {
            checkbox.click();
          }
        });
        message.parentElement.classList.toggle("message_selected");
        if (document.querySelector(".message_selected")) {
          messagebubble.classList.add("bubble_active");
          answerbubble.classList.remove("answer_bubble_active");
          answers.forEach((answer) => {
            answer.classList.add("answer_visible");
          });
        } else {
          messagebubble.classList.remove("bubble_active");
          answers.forEach((answer) => {
            answer.classList.remove("answer_visible");
          });
        }
      } else {
        if (!document.querySelector(".message_selected")) {
          answerbubble.classList.add("answer_bubble_active");
          document.querySelector(".messages_composer").style.borderColor =
            "transparent";
        }
      }
    };
  });
}
if (answerbubbleclose) {
  answerbubbleclose.onclick = () => {
    answerbubble.classList.remove("answer_bubble_active");
    document.querySelector(".messages_composer").style.borderColor = "#e0e0e0";
  };
}
window.addEventListener("click", (e) => {
  if (!e.target.closest(".tools_btn")) {
    toolsmenu.forEach((menu) => {
      menu.classList.remove("menu_active");
    });
  }
  if (!e.target.closest(".settings_btn")) {
    if (settingsmenu) {
      settingsmenu.classList.remove("menu_active");
    }
  }
});
