
const getFirstSelector = selector => document.querySelector(selector)


const nestedTarget = ()  => document.querySelector('#nested .target')

const deepestChild = (el) =>{
  el = el || document.querySelector('#grand-node')

  if (el.children.length > 0) {
    return deepestChild(el.children[0])
  } else {
    return el;
  }
}

// const deepestChild = () =>{
//   let el = document.querySelector('#grand-node')
//   while (el.children.length > 0) {
//     el = el.children[0]
//   }
//   return el;
// }


const increaseRankBy = (n) => {
    const list = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < list.length; i++) {
      list[i].innerHTML = (i + n)
    }
  }
