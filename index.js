const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  resizeBy.send("welcome to my form ");
});

app.post("/api/form", (req, res) => {
  const data = req.body;
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: "codeteam35@gmail.com",
      pass: "team@2020",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "codeteam35@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
    <h3>Informations</h3>
    <ul>
    <li>Name: ${data.name} </li>
    <li>Last Name: ${data.lastname} </li>
    <li>E-mail: ${data.email} </li>
    </ul>
    <h3>Message</h3>
    <p> ${data.message} </p>
    
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      response.send("Success");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.Port || 3000;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});