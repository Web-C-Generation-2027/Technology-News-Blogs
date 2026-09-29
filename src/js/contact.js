/*
  contact.js
  Validates the contact form on about.html. This is a front-end demo:
  connect the form to a form service or backend to actually receive messages.
*/
(function () {
  /* Paste your Formspree URL here, e.g. https://formspree.io/f/abcdwxyz */
  var FORM_ENDPOINT = "https://formspree.io/f/xbglqrjk";

  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  var fields = [
    { id: "name", test: function (v) { return v.trim().length >= 2; }, msg: "Enter your name." },
    { id: "email", test: isValidEmail, msg: "Enter a valid email address, for example name@example.com." },
    { id: "message", test: function (v) { return v.trim().length >= 10; }, msg: "Write a message of at least 10 characters." }
  ];

  function setError(input, message) {
    var err = document.getElementById(input.id + "-error");
    if (message) {
      input.setAttribute("aria-invalid", "true");
      err.textContent = message;
    } else {
      input.removeAttribute("aria-invalid");
      err.textContent = "";
    }
  }

  fields.forEach(function (f) {
    var input = document.getElementById(f.id);
    input.addEventListener("blur", function () {
      if (input.value !== "") setError(input, f.test(input.value) ? "" : f.msg);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var firstBad = null;
    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      var ok = f.test(input.value);
      setError(input, ok ? "" : f.msg);
      if (!ok && !firstBad) firstBad = input;
    });

    if (firstBad) {
      status.className = "mt-3 text-sm text-err";
      status.textContent = "Fix the highlighted fields and send again.";
      firstBad.focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.className = "mt-3 text-sm text-muted";
    status.textContent = "Sending...";

    fetch(FORM_ENDPOINT, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (res) {
      if (!res.ok) throw new Error("Request failed");
      status.className = "mt-3 text-sm font-medium text-purple-900";
      status.textContent = "Thanks, your message has been sent. We reply within two working days.";
      form.reset();
    }).catch(function () {
      status.className = "mt-3 text-sm text-err";
      status.textContent = "Sorry, the message could not be sent. Please try again later.";
    }).then(function () {
      btn.disabled = false;
    });
  });
})();
