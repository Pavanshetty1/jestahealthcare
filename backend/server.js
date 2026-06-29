import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./db/database.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

app.get("/api/categories", (req, res) => {
  const sql = "SELECT * FROM categories ORDER BY id";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Failed to fetch categories" });
    }

    res.json(rows);
  });
});

app.get("/api/categories/:slug", (req, res) => {
  const { slug } = req.params;

  const sql = "SELECT * FROM categories WHERE slug = ?";

  db.get(sql, [slug], (err, row) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch category" });
    }

    res.json(row);
  });
});

app.get("/api/products/category/:slug", (req, res) => {
  const { slug } = req.params;

  const sql = `
    SELECT products.*
    FROM products
    JOIN categories ON products.category_id = categories.id
    WHERE categories.slug = ?
    ORDER BY products.id
  `;

  db.all(sql, [slug], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Failed to fetch products" });
    }

    res.json(rows);
  });
});

app.get("/api/products/related/:categoryId/:slug", (req, res) => {
  const { categoryId, slug } = req.params;

  const sql = `
    SELECT *
    FROM products
    WHERE category_id = ?
    AND slug != ?
    ORDER BY id
    LIMIT 3
  `;

  db.all(sql, [categoryId, slug], (err, rows) => {
    if (err) {
      return res.status(500).json({
        message: "Failed to fetch related products",
      });
    }

    res.json(rows);
  });
});

// app.get("/api/products/:slug", (req, res) => {
//   const { slug } = req.params;

//   const sql = "SELECT * FROM products WHERE slug = ?";

//   db.get(sql, [slug], (err, row) => {
//     if (err) {
//       return res.status(500).json({ message: "Failed to fetch product" });
//     }

//     res.json(row);
//   });
// });

app.get("/api/search", (req, res) => {
  const q = req.query.q;

  if (!q) {
    return res.json({ products: [], categories: [] });
  }

  const searchTerm = `%${q}%`;

  const productsSql = `
    SELECT 
      products.id,
      products.title,
      products.slug,
      products.image,
      products.description,
      categories.name AS category_name,
      categories.slug AS category_slug
    FROM products
    JOIN categories ON products.category_id = categories.id
    WHERE products.title LIKE ?
    ORDER BY products.id
  `;

  const categoriesSql = `
    SELECT *
    FROM categories
    WHERE name LIKE ?
    ORDER BY id
  `;

  db.all(productsSql, [searchTerm], (err, products) => {
    if (err) {
      return res.status(500).json({ message: "Search failed" });
    }

    db.all(categoriesSql, [searchTerm], (err, categories) => {
      if (err) {
        return res.status(500).json({ message: "Search failed" });
      }

      res.json({
        products,
        categories,
      });
    });
  });
});

app.get("/api/products/:id/pack-contents", (req, res) => {
  const { id } = req.params;

  db.all(
    "SELECT * FROM pack_contents WHERE product_id = ? ORDER BY sort_order ASC",
    [id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    },
  );
});
app.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;

  const sql = `
    SELECT 
      p.*,
      c.name AS category_name,
      c.slug AS category_slug
    FROM products p
    LEFT JOIN categories c
      ON p.category_id = c.id
    WHERE p.slug = ?
  `;

  db.get(sql, [slug], (err, product) => {
    if (err) {
      return res.status(500).json({ message: "Failed to fetch product" });
    }

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, requirement, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Enquiry - ${requirement}`,
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Requirement:</b> ${requirement}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Enquiry sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send enquiry" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
