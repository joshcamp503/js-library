let myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

const newButton = document.getElementById('new-book-button')
const submitButton = document.getElementById('submit-button')
const mainContainer = document.getElementById('main-container')
const formContainer = document.getElementById('form-container')
const form = document.getElementById('form')

// make form hidden initially
mainContainer.style['display'] = 'none' 

// add event listener functions to New Book button
newButton.addEventListener('click', () => {
	mainContainer.style['display'] = 'block'  //unhide form
})

// add event listener functions to Submit button
submitButton.addEventListener('click', () => {
	mainContainer.style['display'] = 'none'  //hide form

	addBookToLibrary()


	// create book card


	// reset form
	form.reset()

})

function addBookToLibrary () {
	// assign variables to form elements
	const titleVal = document.getElementById('form-title').value
	const authorVal = document.getElementById('form-author').value
	const pagesVal = document.getElementById('form-pages').value
	const statusVal = document.getElementById('form-status').checked
	const newBook = new Book(titleVal, authorVal, pagesVal, statusVal)
	// push to library array
	createEntry(newBook)
	myLibrary.push(newBook)
	console.log(myLibrary)
	console.log(newBook.title)
}

function createHTML(elem, attr, name) {
	const newElem = document.createElement(elem);
	newElem.setAttribute(attr, name);
	return newElem
}

function createEntry(obj) {

	const titleData = createHTML('td','class', 'entry-title')
	titleData.textContent = obj.title

	const authorData = createHTML('td','class', 'entry-author')
	authorData.textContent = obj.author

	const pagesData = createHTML('td','class', 'entry-pages')
	pagesData.textContent = obj.pages

	const statusData = createHTML('td','class', 'entry-status')
	statusData.textContent = obj.status

	const emptyData = createHTML('td','class', 'empty-entry')
	const dataButton = createHTML('button','class', 'entry-button')
	dataButton.textContent = "Remove"
	dataButton.addEventListener('click', (e) => {
		e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
	})
	emptyData.appendChild(dataButton)

	const row = createHTML('tr','class', 'entry')
	row.append(titleData, authorData, pagesData, statusData, emptyData)


	const display = document.getElementById('display')
	display.appendChild(row)

}