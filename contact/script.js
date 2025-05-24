const contactForm = document.getElementById('contact-us');
const contactBtn = document.getElementById('contact-btn');

const scriptURL =
  'https://script.google.com/macros/s/AKfycbz8wKsDoNPlMOKTXk-u6e4rNIFB-KGdt9JyI_t2Kt1ybZiXHhkR9wPYp9HU5Apqc4GY/exec';
let submitting = false;

const setSubmitting = (value) => {
  submitting = value;
  contactBtn.disabled = value;
  contactBtn.innerText = value ? '전송중...' : '제출';
};

async function onSubmit(e) {
  e.preventDefault();

  if (submitting) return;
  setSubmitting(true);

  const formData = new FormData(e.target);

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
    });

    const res = await response.json();
    console.log(response);
    console.log(res);
    if (response.ok) {
      alert('전송되었습니다');
      window.location.reload();
    } else {
      alert('Error: ' + res.error);
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }

  setSubmitting(false);
}

contactForm.addEventListener('submit', onSubmit);
