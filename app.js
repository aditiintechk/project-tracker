const addBtn = document.getElementById('add-project-btn')
const projectNameInput = document.getElementById('name')
const projectDesignInput = document.getElementById('design')
const projectLogicInput = document.getElementById('logic')
const projectsInfoContainer = document.querySelector('.projects')

let projectCounter = 1

addBtn.addEventListener('click', function () {
	if (
		!projectNameInput.value ||
		!projectDesignInput.value ||
		!projectLogicInput.value
	) {
		console.log('enter all the values')
	}

	let projectInfo = document.createElement('div')
	projectInfo.className = `project-info`
	projectInfo.id = `project-info-${projectCounter}`

	let projectName = document.createElement('p')
	projectName.className = 'project-name'
	projectName.textContent = projectNameInput.value
	projectInfo.append(projectName)

	let projectDesign = document.createElement('p')
	projectDesign.className = 'project-design'
	projectDesign.textContent = projectDesignInput.value
	projectInfo.append(projectDesign)

	let projectLogic = document.createElement('p')
	projectLogic.className = 'project-logic'
	projectLogic.textContent = projectLogicInput.value
	projectInfo.append(projectLogic)

	projectsInfoContainer.appendChild(projectInfo)
})
