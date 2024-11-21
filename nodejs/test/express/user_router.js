import express from "express";
import { body, validationResult } from "express-validator";
const router = express.Router();

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

router.post("/", [body("name").isLength({ min: 5 }).withMessage("Name must be at least 5 characters"), body("email").isEmail().withMessage("Please enter a valid email address")], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  console.log(users);
  res.status(201).json(newUser);
});

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/search", async (req, res) => {
  try {
    const data = await someAsyncFunction();
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    const { name, email } = req.body;
    user.name = name;
    user.email = email;
    res.json(user);
  }
});

router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);
  res.json({ message: "User deleted" });
});

async function someAsyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data fetched successfully" });
    }, 1000);
  });
}

export { router as usersRouter };
