
const getFirstSelector = (selector) => document.querySelector(selector)

const nestedTarget = () => document.querySelector("#nested .target")
// const nestedTarget = () => document.getElementById('nested').children[0].querySelectorAll('div')[2]

const deepestChild = () => document.getElementById('grand-node').children[0].querySelectorAll('div')[2]

const increaseRankBy = (n) => {
    const list = document.getElementsByClassName('ranked-list')
    for (let i =0; i < list.length; i++) {
        list[i].innerHTML = (i +n )
    }
}