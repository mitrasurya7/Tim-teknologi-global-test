const router = require("express").Router();
const TodoController = require("../controller/todo.controller");

router.post("/todos", TodoController.CreateTodo);
router.get("/todos", TodoController.ReadTodo);
router.get("/todos/:id", TodoController.ReadTodoId);
router.delete("/todos/:id", TodoController.DeleteTodo);

module.exports = router;
