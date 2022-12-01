document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    buildTodo(e.target.newTaskDescription.value)
    form.reset()
  })
  
});

const buildTodo = todo =>{
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent='x'
  p.textContent= `${todo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

const handleDelete = e =>{
  e.target.parentNode.remove()
}
