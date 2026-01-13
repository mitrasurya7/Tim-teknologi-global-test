const Todo = require("../models/todo");

const TodoController = {
  // CREATE
  async CreateTodo(req, res) {
    try {
      const { title, description, priority, dueDate } = req.body;

      const todo = await Todo.create({
        title,
        description,
        priority,
        dueDate,
      });

      return res.status(201).json({
        success: true,
        data: todo,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // READ ALL
  async ReadTodo(req, res) {
    try {
      const todos = await Todo.find().sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        data: todos,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // READ BY ID
  async ReadTodoId(req, res) {
    try {
      const { id } = req.params;

      const todo = await Todo.findById(id);

      if (!todo) {
        return res.status(404).json({
          success: false,
          message: "Todo tidak ditemukan",
        });
      }

      return res.status(200).json({
        success: true,
        data: todo,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "ID tidak valid",
      });
    }
  },

  // DELETE
  async DeleteTodo(req, res) {
    try {
      const { id } = req.params;

      const todo = await Todo.findByIdAndDelete(id);

      if (!todo) {
        return res.status(404).json({
          success: false,
          message: "Todo tidak ditemukan",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Todo berhasil dihapus",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "ID tidak valid",
      });
    }
  },
};

module.exports = TodoController;
