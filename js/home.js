function showHome() {
    // Show the content element
    document.getElementById('content').style.display = 'block';
}
let newlyCompletedCount = 0;



function fetchAndDisplayTodo(){
    // Hide the content element
    document.getElementById('content').style.display = 'none';
    
    fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => {
            const todoList = data.map(todo => `
              <li class="${todo.completed ? 'completed' : ''}">
                <label>
                  <input type="checkbox" ${todo.completed ? 'checked disabled' : ''} onchange="checkNewlyCompleted(this)">
                  ${todo.title}
                </label>
              </li>`).join('');
            const todoListHtml = `<ul>${todoList}</ul>`;
            document.getElementById('todoContainer').innerHTML = todoListHtml;
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
      }

      function checkNewlyCompleted(checkbox) {
        if (checkbox.checked) {
          newlyCompletedCount++;
          if (newlyCompletedCount >= 5) {
            showCongratulationsMessage(newlyCompletedCount);
            newlyCompletedCount = 0; // Reset the count after showing the message
          }
        }
      }
    
      // Function to show the congratulations message
      function showCongratulationsMessage(count) {
        alert(`Congrats. ${count} New Tasks have been Successfully Completed`);
      }
// 
function addNewTask() {
  const newTaskInput = document.getElementById('newTaskInput');
  const taskTitle = newTaskInput.value.trim();

  if (taskTitle !== '') {
    const todoList = document.getElementById('todoContainer');
    const newTaskHtml = `
      <li>
        <label>
          <span>${taskTitle}</span>
          <input type="checkbox" onchange="checkNewlyCompleted(this)">
        </label>
      </li>`;
    todoList.insertAdjacentHTML('afterbegin', newTaskHtml);

    // Clear the input field
    newTaskInput.value = '';
  }
}
