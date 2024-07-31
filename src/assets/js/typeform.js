document.addEventListener("DOMContentLoaded", ()=>{
    const { open, close, toggle, refresh } = window.tf.createPopup('NJfm2KNi')
    document.querySelectorAll('#typeform_contact').forEach(element => element.onclick = toggle)
});