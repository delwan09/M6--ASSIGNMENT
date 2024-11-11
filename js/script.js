window.addEventListener('load', () => {
    const $ = id => document.getElementById(id);
    $('empForm').addEventListener('submit', e => {
      e.preventDefault();
      console.log({
        id: $('id').value,
        name: $('name').value,
        ext: $('ext').value,
        email: $('email').value,
        department: $('department').value
      });
    });
  });
  