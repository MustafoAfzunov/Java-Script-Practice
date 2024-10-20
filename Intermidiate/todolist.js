function toDoList() {
    let tasks = [];

    while (true) {
        let action = prompt("Choose an action: (add, complete, list, exit): ");
        
        if (action === "add") {
            let task = prompt("Enter a task: ");
            tasks.push({ task: task, completed: false });
        } else if (action === "complete") {
            let index = parseInt(prompt("Enter the task index to complete: "));
            if (tasks[index]) tasks[index].completed = true;
        } else if (action === "list") {
            console.log("Tasks:");
            tasks.forEach((task, index) => {
                console.log(`${index}: ${task.task} - ${task.completed ? "Completed" : "Incomplete"}`);
            });
        } else if (action === "exit") {
            break;
        }
    }
}

toDoList();
