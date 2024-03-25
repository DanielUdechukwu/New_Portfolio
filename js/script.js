
const Type = (document.getElementById('circle'));

const rotate = new CircleType(Type);


let date = document.getElementById("year");

let month = new Date().getFullYear();

date.innerHTML = month;


function resetForm() {
  document.getElementById("form").reset();
}

const btn = document.getElementById('form-button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.innerHTML = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_uvytpta';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerHTML = 'Send Message';
        alert('Your message has been sent!');
        resetForm();
      }, (err) => {
        btn.innerHTML = 'Send Message';
        alert(JSON.stringify(err));
      });
  });