// function to disable the button
function disableButton(id1, id2) {
  document.getElementById(id1).addEventListener("click", function () {
    const btn = document.getElementById(id1);

    btn.innerText = "Disabled";
    btn.disabled = "true";
    btn.style.background = "oklch(78.9% 0.154 211.53)";

    //after completed button is click then reducing one task form pending task count
    const taskNum = document.getElementById("pending-task").innerText;
    const convertedTaskNum = parseInt(taskNum) - 1;
    document.getElementById("pending-task").innerText = "0" + convertedTaskNum;

    const completedTaskNum =
      document.getElementById("completed-task").innerText;
    const converted = parseInt(completedTaskNum) + 1;
    document.getElementById("completed-task").innerText = converted;

    /// adding the completed task to activity log

    const completeTask = document.getElementById(id2).innerText;
    const p = document.createElement("p");
    p.innerText = " : " + completeTask;

    p.classList.add("activity-style");
    console.log(p);

    document.getElementById("Complete-task-container").appendChild(p);
  });
}
