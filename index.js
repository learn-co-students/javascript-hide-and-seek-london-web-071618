
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  let jam = document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<jam.length; i++) {
    jam[i].innerHTML = parseInt(jam[i].innerHTML) + n
  }
}
