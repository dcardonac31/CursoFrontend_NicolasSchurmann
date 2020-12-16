const stringToHTML = (s) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(s, 'text/html')
  return doc.body.firstChild
  //console.log(doc);
}

const renderItem = (item) => {
  const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`)
  return element
}

window.onload = () => {
  fetch('https://serverless.dcardonac31.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => {
      const mealsList = document.getElementById('meals-list')
      const submit = document.getElementById('submit')
      const listItems = data.map(renderItem)
      mealsList.removeChild(mealsList.firstElementChild)
      listItems.forEach(element => mealsList.appendChild(element));
      submit.removeAttribute('disabled')
    })
}