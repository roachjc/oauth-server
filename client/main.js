$(document).ready(() => {
  console.log('ready!');
  $('#githubAuth').click(() => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/login'
    })
  })
})
