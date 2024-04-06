document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  
  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priority';
  prioritySelect.name = 'priority';

  
  const priorities = ['High', 'Medium', 'Low'];
  priorities.forEach((priority) => {
    const option = document.createElement('option');
    option.value = priority.toLowerCase(); 
    option.textContent = priority;
    prioritySelect.appendChild(option);
  });

  form.appendChild(prioritySelect); 

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn'); 

   
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(newTaskElement);
    });

    const newTaskDescription = document.getElementById('new-task-description').value;
    const selectedPriority = document.getElementById('priority').value;

 
    const newTaskElement = document.createElement('li');
    newTaskElement.textContent = newTaskDescription;

    
    newTaskElement.style.color = getColorForPriority(selectedPriority);

  
    function getColorForPriority(priority) {
      switch (priority) {
        case 'high':
          return 'red';
        case 'medium':
          return 'blue';
        case 'low':
          return 'green';
        default:
          return 'black'; 
      }
    }
    
    newTaskElement.appendChild(deleteButton);

    taskList.appendChild(newTaskElement);

 
    form.reset();
  });
});
