$(document).ready(function () {
  var munch = new Audio('./assets/audio/munch-sound-effect.mp3')
  var wrong = new Audio('./assets/audio/ball-origin-beep.mp3')
  munch.autoplay = true

  $('#add').on('click', function () {
    event.preventDefault()
    const burger = $('#burgerName')
      .val()
      .trim()
    console.log('burger added', burger)
    if (burger === '' || burger === undefined) {
      wrong.autoplay = true
      wrong.play()
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
    console.log(typeof eaten)
    console.log(eaten)
    const target = `${eaten}AA`
    console.log(`target ${target}`)
    var who = $('#' + target)
      .val()
      .trim()
    console.log('who is this', who)
    console.log('eat what', eaten)
    if (who === '' || who === undefined) {
      wrong.autoplay = true
      wrong.play()
      alert('Enter a name')
    } else {
      var query = `/api/burgers/${eaten}/${who}`
      console.log(query)
      $.ajax(query, {
        type: 'PUT'
      }).then(function () {
        console.log('devouring burger')
        location.reload()
      })
    }
  })

  $('.delete').on('click', function () {
    event.preventDefault()
    console.log(this.id)
    var burgerDelete = this.id
    console.log(burgerDelete)
    munch.play()
    $.ajax('/api/burgers/' + burgerDelete, {
      type: 'DELETE'
    }).then(() => {
      location.reload()
    })
  })

  $('.devoured-delete').on('click', function () {
    event.preventDefault()

    var burgerDelete = this.value
    console.log(burgerDelete)
    munch.play()
    $.ajax('/api/burgers/devoured/' + burgerDelete, {
      type: 'DELETE'
    }).then(() => {
      location.reload()
    })
  })
})
