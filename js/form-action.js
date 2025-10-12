const serviceID = "service_ee3d1rs";  // your service ID
const templateOwner = "contactUsTemplateOwner";   // make sure you created this template in EmailJS
const templateClient = "send_to_client"; // and this one too

const BOT_TOKEN = "8194428510:AAFMDER0QdP5YJGdHYl1288XiHN-CAU6zNY";
const CHAT_ID = "@rentvoe_contact";


// // Init EmailJS
// (function () {
//     emailjs.init("W1mtGRMCVOPWfCUbr"); //  PUBLIC key
// })();




// console.log("Form Data:", formData);
// // 1. Send email to YOU (site owner)
// emailjs.send(serviceID, templateOwner, formData)
// .then(() => {
//     console.log("✅ Email sent to owner");
// })
// .catch((err) => {
//     console.error("❌ Error sending to owner:", err);
// });

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




async function sendToTelegramBot(text, file = null) {
  try {
    if (file) {
      // Send file using sendDocument
      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("caption", text); // optional caption
      formData.append("document", file);

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
        method: "POST",
        body: formData,
      });
    } else {
      // Send plain text
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown"
        }),
      });
    }
  } catch (err) {
    console.error("Telegram Error:", err);
    throw new Error("Failed to send message/file to Telegram");
  }
}


async function handleHomePageContactFormSumbit(formData) {
  try {
    const text = `
      📩 New Contact Form Submission (Index Page)

      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Interest: ${formData.service_interest}
      Message: ${formData.message}
    `;

    // 2️⃣ Artificial delay 
    await delay(4000);

    // 1️⃣ Call Telegram function
    await sendToTelegramBot(text);

    // 2️⃣ Call other async functions (example)
    // await saveFormToDatabase(formData);
    // await sendEmailNotification(formData);

    // If all succeed, return a success message
    return "✅ Form received! Thank you for reaching out. We’ll contact you soon.";

  } catch (err) {
    console.error("Form submission error:", err);
    throw new Error(err.message || "Something went wrong in form submission");
  }
}





async function handleCareersPageApplicationFormSumbit(formData) {
  try {
    const text = `
    📩 New Job Application (Careers Page)

    Name: ${formData.firstName} ${formData.lastName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Position: ${formData.position}
    Experience: ${formData.experience}
    Cover Letter: ${formData.coverLetter}
`;

    // Artificial delay
    await delay(2000);

    // Send message + file (if resume exists)
    await sendToTelegramBot(text, formData.resume);

    // Optional: other async functions
    // await sendEmailNotification(formData);

    return "✅ Application received! Thank you for applying. We’ll contact you soon.";
  } catch (err) {
    console.error("Careers form submission error:", err);
    throw new Error(err.message || "Something went wrong during form submission");
  }
}


async function handleVendorRequestFormSubmit(formData) {
  try {
    // Build a nice formatted message
    const text = `
      📩 New Vendor Request Form Submission

       Full Name: ${formData.full_name}
       Property Name: ${formData.property_name || "N/A"}
       Address: ${formData.address}
       Email: ${formData.contact_email}
       Phone: ${formData.contact_phone}
       Preferred Service Date: ${formData.booking_date}
       Vendor Services Needed: ${formData.vendors_needed.length ? formData.vendors_needed.join(", ") : "None"}
       \n
      📝 Additional Remarks Written: ${formData.additional_notes || "N/A"}
    `;

    // 2️⃣ Artificial delay for UX (optional)
    await delay(2000);

    // 1️⃣ Call Telegram function (replace with your actual implementation)
    await sendToTelegramBot(text);

    // 2️⃣ Call other async functions if needed
    // await saveFormToDatabase(formData);
    // await sendEmailNotification(formData);

    // Return success message
    return "Vendor request submitted! Thank you, we’ll contact you soon.";

  } catch (err) {
    console.error("Vendor form submission error:", err);
    throw new Error(err.message || "Something went wrong during vendor request submission");
  }
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
  }, 7000);
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

// Helper to delay for given milliseconds
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Export globally
window.showOverlay = showOverlay;
window.hideOverlay = hideOverlay;
window.showMessage = showMessage;
