const addBtn = document.getElementById('add-project-btn')
const projectNameInput = document.getElementById('name')
const projectDesignInput = document.getElementById('design')
const projectLogicInput = document.getElementById('logic')
const projectsInfoContainer = document.querySelector('.projects')
const errorMessage = document.getElementById('error-message')

let getProjectList = JSON.parse(localStorage.getItem('projectList'))
let projectList = !getProjectList ? [] : getProjectList
let projectCounter = projectList.length

renderProjects(projectList)
addBtn.addEventListener('click', addProject)

function renderProjects(projectList) {
	projectList.map((eachProject) => {
		let projectInfo = document.createElement('div')
		projectInfo.className = `project-info`
		projectInfo.id = `project-info-${eachProject.id}`

		let projectNameElement = createElementFromInput(
			eachProject.projectName,
			'name',
			projectInfo
		)
		createElementFromInput(eachProject.design, 'design', projectInfo)
		createElementFromInput(eachProject.logic, 'logic', projectInfo)

		projectsInfoContainer.appendChild(projectInfo)

		projectNameElement.addEventListener('click', function (event) {
			let parent = event.target.parentElement
			parent.remove()
			// LOCAL STORAGE REMOVAL

			const index = projectList.findIndex(
				(project) => project.id === eachProject.id
			)
			if (index >= 0 && index < projectList.length) {
				projectList.splice(index, 1)
				localStorage.setItem('projectList', JSON.stringify(projectList))
				console.log('project has been removed')
			} else {
				console.log('invalid index')
			}
		})
	})
}

function createElementFromInput(inputValue, nameOfElement, parentElement) {
	let newElement = document.createElement('p')
	newElement.className = `project-${nameOfElement}`
	newElement.textContent = inputValue
	parentElement.append(newElement)

	return newElement
}

function addProject() {
	if (
		!projectNameInput.value ||
		!projectDesignInput.value ||
		!projectLogicInput.value
	) {
		errorMessage.style.visibility = 'visible'
	} else {
		projectCounter++

		let currentProject = {
			id: projectCounter,
			projectName: projectNameInput.value,
			design: projectDesignInput.value,
			logic: projectLogicInput.value,
		}

		projectList.push(currentProject)
		localStorage.setItem('projectList', JSON.stringify(projectList))

		let projectInfo = document.createElement('div')
		projectInfo.className = `project-info`
		projectInfo.id = `project-info-${projectCounter}`

		let projectName = createElementFromInput(
			projectNameInput.value,
			'name',
			projectInfo
		)

		createElementFromInput(projectDesignInput.value, 'design', projectInfo)
		createElementFromInput(projectLogicInput.value, 'logic', projectInfo)

		projectsInfoContainer.appendChild(projectInfo)

		projectNameInput.value = ''
		projectDesignInput.value = ''
		projectLogicInput.value = ''

		projectName.addEventListener('click', function (event) {
			let parent = event.target.parentElement
			parent.remove()
			// LOCAL STORAGE REMOVAL

			const index = projectList.findIndex(
				(project) => project.id === currentProject.id
			)
			if (index >= 0 && index < projectList.length) {
				projectList.splice(index, 1)
				localStorage.setItem('projectList', JSON.stringify(projectList))
				console.log('project has been removed')
			} else {
				console.log('invalid index')
			}
		})
	}
}
