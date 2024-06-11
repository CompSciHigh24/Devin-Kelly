const mongoose = require("mongoose");
// Import express below and create an instance called app
const express = require("express");
const app = express();

const ejs = require("ejs");
const { title } = require("process");

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

const mongoDBConnectionString =
  "mongodb+srv://david0:Myfuturescholar18!@cluster0.hfackg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDBConnectionString)
  .then(() => {
    console.log("MongoDB connection successful.");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema and model for Quote
const quoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
});

const Quote = mongoose.model("Quote", quoteSchema);

// Schema and model for Press
const pressSchema = new mongoose.Schema({
  text: { type: String, required: true },
  URL: { type: String, required: true },
});

const Press = mongoose.model("Press", pressSchema);

// Schema and model for Books
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  yearPublished: { type: Number, required: true },
  URL: { type: String, required: true },
  image_URL: { type: String, required: true },
});
const Book = mongoose.model("Book", bookSchema);

// Schema and model for publishedWork
const pubWorkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  URL: { type: String, required: true },
  company: { type: String, required: true },
  yearPublished: { type: Number, required: true },
});

const publishedWork = mongoose.model("publishedWork", pubWorkSchema);

mongoose.connect(mongoDBConnectionString).then(() => {
  console.log("MongoDB connected...");
});

/*
// Find a quote
app.get("/quotes", (req, res) => {
  Quote.findOne({})
    .then((data) => {
      res.json(data);
    });
});

// Find all the quotes
app.get("/morequotes", (req, res) => {
  Quote.find({}).then((data) => {
    res.json(data);
  });
});

// Find a published work
app.get("/publishedWork", (req, res) => {
  publishedWork.findOne({})
    .then((data) => {
      res.json(data);
    });
});

// Find all the published work
app.get("/publishedWorks", (req, res) => {
  publishedWork.find({}).then((data) => {
    res.json(data);
  });
});

// Find all books
app.get("/books", (req, res) => {
  Book.find({}).then((data) => {
    res.json(data);
  });
});
*/
// Create a book
app.post("/book", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    yearPublished: req.body.yearPublished,
    URL: req.body.URL,
    image_URL: req.body.image_URL,
  });
  newBook.save().then((book) => res.json(book));
});

// Create a Published Work document
app.post("/publishedWork", (req, res) => {
  const newpubWork = new publishedWork({
    title: req.body.title,
    URL: req.body.URL,
    company: req.body.company,
    yearPublished: req.body.yearPublished,
  });
  newpubWork.save().then((pubWork) => res.json(pubWork));
});

// Create a quote
app.post("/quotes", (req, res) => {
  const newQuote = new Quote({
    text: req.body.text,
    name: req.body.name,
  });
  newQuote.save().then((Quote) => res.json(Quote));
});

// Create a new Press link
app.post("/press", (req, res) => {
  const newPress = new Press({
    text: req.body.text,
    URL: req.body.URL,
  });
  newPress.save().then((Press) => res.json(Press));
});

// route handler

app.get("/", (req, res) => {
  const data = {};

  Quote.find({})
    .then((quotes) => {
      data.quotes = quotes;
    })
    .then(() => {
      publishedWork
        .find({})
        .then((pubWork) => {
          data.pubWork = pubWork;
        })
        .then(() => {
          Book.find({})
            .then((books) => {
              data.books = books;
            })
            .then(() => {
              Press.find({}).then((press) => {
                data.press = press;
                // console.log(data)
                res.render("home.ejs", data);
              });
            });
        });
    });
});

app.get("/admin", (req, res) => {
  const data = {};

  Quote.find({})
    .then((quotes) => {
      data.quotes = quotes;
    })
    .then(() => {
      publishedWork
        .find({})
        .then((pubWork) => {
          data.pubWork = pubWork;
        })
        .then(() => {
          Book.find({})
            .then((books) => {
              data.books = books;
            })
            .then(() => {
              Press.find({}).then((press) => {
                data.press = press;
                // console.log(data)
                res.render("admin.ejs", data);
              });
            });
        });
    });
});

app.delete("/book/:id", (req, res) => {
  const filter = { title: req.params.title };

  Book.findOneAndDelete(filter).then((del) => {
    res.json(del);
  });
});

app.patch("/book/:id", (req, res) => {
  Book.findByIdAndUpdate = (req.params.title, req.body, { new: true }).then(
    (book) => {
      res.json(book);
    },
  );
  const update = {
    title: req.body.title,
    author: req.body.author,
    yearPublished: req.body.yearPublished,
    URL: req.body.URL,
    image_URL: req.body.image_URL,
  };

  Book.findOneAndUpdate(id, update, { new: true }).then((upd) => {
    res.json(upd);
  });
});

app.patch("/publishedWork/:id", (req, res) => {
  // publishedWork.findByIdAndUpdate(req.params.title, req.body, {new: true} )

  const update2 = {
    title: req.body.title,
    URL: req.body.URL,
    company: req.body.company,
    yearPublished: req.body.yearPublished,
  };

  publishedWork.findOneAndUpdate(id, update2, { new: true }).then((upd) => {
    res.json(upd);
  });
});

app.delete("/publishedWork/:id", (req, res) => {
  const filter2 = { title: req.params.title };

  publishedWork.findOneAndDelete(filter2).then((del) => {
    res.json(del);
  });
});

app.patch("/quotes/:id", (req, res) => {
  // quotes.findByIdAndUpdate(req.params.title, req.body, { new: true });

  const update3 = { text: req.body.text, name: req.body.name };

  quotes.findOneAndUpdate(id, update3, { new: true }).then((upd) => {
    res.json(upd);
  });
});

app.delete("/quotes/:id", (req, res) => {
  const filter3 = { title: req.params.title };

  quotes.findOneAndDelete(filter3).then((del) => {
    res.json(del);
  });
});

app.patch("/press/:id", (req, res) => {
  // press.findByIdAndUpdate(req.params.text, req.body, { new: true });

  const update4 = { text: req.body.text, URL: req.body.URL };

  quotes.findOneAndUpdate(id, update4, { new: true }).then((upd) => {
    res.json(upd);
  });
});

app.delete("/press/:id", (req, res) => {
  const filter4 = { text: req.params.text };

  press.findOneAndDelete(filter4).then((del) => {
    res.json(del);
  });
});

app.listen(3000, () => {
  console.log("Server Running");
});
