const serviceID = "service_ee3d1rs";  // your service ID
const templateOwner = "contactUsTemplateOwner";   // make sure you created this template in EmailJS
const templateClient = "send_to_client"; // and this one too

// Init EmailJS
(function () {
    emailjs.init("W1mtGRMCVOPWfCUbr"); //  PUBLIC key
})();




console.log("Form Data:", formData);
// 1. Send email to YOU (site owner)
emailjs.send(serviceID, templateOwner, formData)
.then(() => {
    console.log("✅ Email sent to owner");
})
.catch((err) => {
    console.error("❌ Error sending to owner:", err);
});

// 2. Auto-reply to the client
// emailjs.send(serviceID, templateClient, formData)
//   .then(() => {
//     console.log("✅ Auto-reply sent to client");
//     alert("Message sent successfully! Check your inbox.");
//     document.getElementById("contact-form").reset(); // clear form
//   })
//   .catch((err) => {
//     console.error("❌ Error sending auto-reply:", err);
//     alert("There was a problem sending your message. Please try again.");
//   });








  async function foo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5
          ? resolve("Success!")
          : reject("Something went wrong.");
      }, 1000);
    });
  }








// === Overlay & Message Utilities ===

function ensureOverlay() {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.className =
      "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center hidden z-50";

    overlay.innerHTML = `
      <div class="flex flex-col items-center justify-center gap-4">
        <img src="/assets/logo.png" alt="Logo" class="w-[400px] h-auto mb-2" />
        <div class="w-16 h-16 border-4 border-white border-t-blue-400 border-b-blue-400 rounded-full animate-spin shadow-lg"></div>
        <p class="mt-2 text-white text-xl font-semibold tracking-wide">Please wait...</p>
      </div>
    `;

    document.body.appendChild(overlay);
  }
  return overlay;
}


function ensureMessageBox() {
  let box = document.getElementById("message-box");
  if (!box) {
    box = document.createElement("div");
    box.id = "message-box";
    box.className =
      "fixed inset-0 flex items-center justify-center hidden z-50";

    // Inner content container
    const content = document.createElement("div");
    content.id = "message-box-content";
    content.className =
      "flex items-center gap-3 p-4 rounded-lg shadow-xl text-white text-lg font-semibold min-w-[250px] max-w-[90%]";

    // Icon placeholder
    const icon = document.createElement("i");
    icon.id = "message-box-icon";
    icon.className = "fas fa-info-circle"; // default icon

    // Text placeholder
    const text = document.createElement("span");
    text.id = "message-box-text";

    content.appendChild(icon);
    content.appendChild(text);
    box.appendChild(content);

    document.body.appendChild(box);
  }
  return box;
}

// Show message function with icon
function showMessage(text, type = "success") {
  const box = ensureMessageBox();
  const content = document.getElementById("message-box-content");
  const icon = document.getElementById("message-box-icon");
  const textEl = document.getElementById("message-box-text");

  textEl.textContent = text;

  if (type === "success") {
    content.className =
      "flex items-center gap-3 p-4 rounded-lg shadow-xl text-white text-lg font-semibold min-w-[250px] max-w-[90%] bg-green-600";
    icon.className = "fas fa-check-circle";
  } else {
    content.className =
      "flex items-center gap-3 p-4 rounded-lg shadow-xl text-white text-lg font-semibold min-w-[250px] max-w-[90%] bg-red-600";
    icon.className = "fas fa-times-circle";
  }

  box.classList.remove("hidden");

  setTimeout(() => {
    box.classList.add("hidden");
  }, 3000);
}

// Show overlay
function showOverlay() {
  const overlay = ensureOverlay();
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // disable scrolling
}

// Hide overlay
function hideOverlay() {
  const overlay = ensureOverlay();
  overlay.classList.add("hidden");
  document.body.style.overflow = ""; // re-enable scrolling
}



// Export globally
window.showOverlay = showOverlay;
window.hideOverlay = hideOverlay;
window.showMessage = showMessage;
