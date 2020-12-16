window.onload = () => {
  fetch('https://serverless.dcardonac31.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => {
      const mealsList = document.getElementById('meals-list')
      const template = data.map(x => '<li>' + x.name + '</li>').join('')
      mealsList.innerHTML = template
    })
}