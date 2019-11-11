
$(document).ready(function () {
  var munch = new Audio('./assets/audio/munch-sound-effect.mp3')
  munch.autoplay=true;
  $('#add').on('click', function () {
    event.preventDefault()
    const burger = $('#burgerName').val().trim()
    if (burger === '' || burger === undefined) {
      alert('Try Again')
    } else {
      munch.play()
      $.ajax('/api/burgers/' + burger, {
        type: 'POST'
      }).then(function () {
      // Reload the page to get the updated list
        location.reload()
      })
    }
  })

  $('.devour').on('click', function () {
    var eaten = this.id
    munch.play()
    console.log(eaten)
    $.ajax('/api/burgers/' + eaten, {
      type: 'PUT'
    }).then(function () {
      console.log('devouring burger')
      location.reload()
    })
  })
})
