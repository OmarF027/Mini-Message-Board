const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Ciao a tutti!",
    user: "Mario",
    added: new Date()
  },
  {
    text: "Benvenuti nel message board!",
    user: "Luigi", 
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render("index", { 
    title: "Mini Messageboard", 
    messages: messages 
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Nuovo Messaggio" });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  });
  res.redirect("/");
});

module.exports = indexRouter;