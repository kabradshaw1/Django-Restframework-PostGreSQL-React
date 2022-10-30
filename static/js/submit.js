const submitForm = event => {
  event.preventDefault();

  const entry = $('[name=""]')
  fetch('api/items', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
}