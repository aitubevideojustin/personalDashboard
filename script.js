document.addEventListener('DOMContentLoaded', () => {
    // Weather Section
    const weatherInfo = document.getElementById('weather-info');
    // Fetch and display weather data here

    // News Section
    const newsArticles = document.getElementById('news-articles');
    // Fetch and display news articles here

    // To-Do List Section
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            newTaskInput.value = '';
        }
    });
});
