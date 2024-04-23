import inquirer from "inquirer";
import chalk from "chalk";
//add Array type Define is string[]
let todoList = [];
let conditions = true;
// arrow  function sytax
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: "list",
                message: chalk.blue("Select an option you want to do: "),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await DeleteTask();
        }
        else if (option.choice === "Update Task") {
            await UpdateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new todo list Task
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "Task",
            type: "input",
            message: chalk.bgRedBright("Enter your new task: "),
        }
    ]);
    // add save value Array AND message print ~ use messge print
    todoList.push(newTask.Task);
    console.log(`\n ${newTask.Task} task added successfully in Todo-List`);
};
// Function to view Todo-list Task
let viewTask = async () => {
    console.log(chalk.blue("\n Your Todo list:\n"));
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
// function to delete Todo-list Task
let DeleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([{
            name: "index",
            type: "number",
            message: chalk.bgCyanBright("\n Enter the index of the task you want to delete\n:"),
        }]);
    let DeleteTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${DeleteTask} user Task is deleted successfully`);
};
// function to update Todo-list Task
let UpdateTask = async () => {
    await viewTask();
    let task_Index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.bgHex("\n Enter the index of the task you want to update\n:"),
        },
        {
            name: "update",
            type: "input",
            message: chalk.bgHex("\n Enter the new task\n:"),
        },
    ]);
    todoList[task_Index.index] = task_Index.update;
    console.log(`\n ${task_Index.index} user Task is updated successfully[for updated List check option: "view todo-list"]`);
};
main();
