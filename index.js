// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// } 

const newTask = (title, description) => {
  const task = {
    title:  title, 
    description: description, 
    complete: false, 
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    }, 
    markCompleted: function() {
      this.complete = true
    }
  };
  return task;
} 

const task1 = newTask('Do the thing', 'You know how to do the thing... NOW DO IT!');
const task2 = newTask('Do that thing too', 'Yes, this too.');
const tasks =  [task1, task2];



task1.logState()
task1.markCompleted()
task1.logState()

console.log(tasks);
