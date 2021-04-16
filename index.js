function greet(name = 'stranger') {
  console.log(`Hello ${name}!`)
}

function congrats(name = 'stranger') {
  console.log(`Congratulations ${name}! 🥳`)
}

export {
  greet,
  congrats
}