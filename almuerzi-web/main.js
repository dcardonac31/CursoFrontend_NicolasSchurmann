let mealsState = []
let ruta = 'login' //login, register, orders

const stringToHTML = (s) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(s, 'text/html')

  return doc.body.firstChild

}

const renderItem = (item) => {
  const element = stringToHTML(`<li data-id="${item._id}">${item.name}</li>`)

  element.addEventListener('click', () => {
    const mealsList = document.getElementById('meals-list')
    Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
    element.classList.add('selected')
    const mealsIdInput = document.getElementById('meals-id')
    mealsIdInput.value = item._id
  })

  return element
}

const renderOrder = (order, meals) => {
  const meal = meals.find(meal => meal._id === order.meal_id)
  const element = stringToHTML(`<li data-id="${order._id}">${meal.name} ${order.user_id}</li>`)

  return element
}

const inicializaFormulario = () => {
  const orderForm = document.getElementById('order')
  orderForm.onsubmit = (e) => {
    e.preventDefault()
    const submit = document.getElementById('submit')
    submit.setAttribute('disabled', true)
    const mealId = document.getElementById('meals-id')
    const mealsIdValue = mealId.value
    if (!mealsIdValue) {
      alert('Debe seleccionar un plato')
      return
    }

    const order = {
      meal_id: mealsIdValue,
      user_id: 'chanchito triste',
    }

    fetch('https://serverless.dcardonac31.vercel.app/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order)
    }).then(x => x.json())
      .then(respuesta => {
        const renderedOrder = renderOrder(respuesta, mealsState)
        submit.removeAttribute('disabled')
        const ordersList = document.getElementById('orders-list')
        ordersList.appendChild(renderedOrder)
        submit.removeAttribute('disabled')
      })
  }
}

const inicializaDatos = () => {
  fetch('https://serverless.dcardonac31.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => {
      mealsState = data
      const mealsList = document.getElementById('meals-list')
      const submit = document.getElementById('submit')
      const listItems = data.map(renderItem)
      mealsList.removeChild(mealsList.firstElementChild)
      listItems.forEach(element => mealsList.appendChild(element));
      submit.removeAttribute('disabled')
      fetch('https://serverless.dcardonac31.vercel.app/api/orders')
        .then(response => response.json())
        .then(ordersData => {
          const ordersList = document.getElementById('orders-list')
          const listOrders = ordersData.map(orderData => renderOrder(orderData, data))
          ordersList.removeChild(ordersList.firstElementChild)
          listOrders.forEach(element => ordersList.appendChild(element))
        })
    })
}

const renderApp = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return renderOrders()
  }
  renderLogin()
}

const renderOrders = () => {
  const ordersView = document.getElementById('orders-view')
  document.getElementById('app').innerHTML = ordersView.innerHTML
  inicializaFormulario()
  inicializaDatos()
}

const renderLogin = () => {
  const loginTemplate = document.getElementById('login-template')
  document.getElementById('app').innerHTML = loginTemplate.innerHTML

  const loginForm = document.getElementById('login-form')
  loginForm.onsubmit = (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    fetch('https://serverless.dcardonac31.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    }).then(x => x.json())
      .then(respuesta => {
        localStorage.setItem('token', respuesta.token)
        ruta = 'orders'
        renderOrders()
      })
  }
}

window.onload = () => {
  renderApp()

}