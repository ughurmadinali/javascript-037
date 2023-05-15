1
//создайте новый элемент и добавьте его в блок ниже с помощью append
//<div id='block'></div>
let elem = document.querySelector('#block')
elem.appendChild('block2')

2
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
//<div id='block'></div>
let elem1 = document.querySelector('#block1')
elem1.insertBefore('Some text', 'Alex')

3
//удалите тег 'p' из скрипта ниже с помощью DOM метода
//<div id='block'>
    //<p>Some text</p>
//</div>
let elem2 = document.querySelector('#p')
elem2.remove()

4
//замените тег 'p' на <i>Hello World</i>
//<div id='block'>
    //<p>Some text</p>
//</div>


5
//выведите в консоли коллекцию всех элементов с классом .block
document.querySelectorAll('.block')

6
//выведите в консоли первый элемент из ранее созданной коллекции


7
//выведите в консоли количество элементов в ранее созданной коллекции


8
//в чем разница между nodeList и HtmlCollection
// NodeList может хранить любые типы узлов, а HTMLCollection только узлы HTML элементов.