var express = require("express");
const createNewMail = require("../../api/mail/createNewMail");
var router = express.Router();
const TempMail = require("node-temp-mail");

router.get("/new", createNewMail);
// router.get("/manage", async (req, res) => {
//   // Let's create an address object so it can be accessed by the module.
//   const address = new TempMail("testAddress");

//   // We already have the address object, so now let's access it and get a list of the emails in a nice & neat json object.
//   address.fetchEmails((err, body) => {
//     console.log(body);
//     res.send(body);
//   });

//   // Or we can use the async/await syntax
//   const body = await address.fetchEmails();

//   // If for any reason you need to see the full temporary email address, you can use the following function.
//   address.getAddress();
//   console.log(address, address.getAddress());
// });

module.exports = router;
