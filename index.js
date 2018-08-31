function getFirstSelector(selector) {

  return document.querySelector(selector)
}

function nestedTarget() {

  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, length = rankedLists.length; i < length; i++) {

    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
console.log(node)
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
console.log(node)
  return node;
}
// increaseRankBy(1)
deepestChild()
