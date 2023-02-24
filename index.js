const express = require("express");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

let port = 2332;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

  app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }
    const sum = num1 + num2;
    if (sum < -1000000) {
      return res.status(400).json({ status: 'error', message: 'Underflow' });
    }
    if (sum > 1000000) {
      return res.status(400).json({ status: 'error', message: 'Overflow' });
    }
    res.json({ status: 'success', message: 'the sum of given two numbers', sum });
  });

  app.post('/sub', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }
    const difference = num1 - num2;
    if (difference < -1000000) {
      return res.status(400).json({ status: 'error', message: 'Underflow' });
    }
    if (difference > 1000000) {
      return res.status(400).json({ status: 'error', message: 'Overflow' });
    }
    res.json({ status: 'success', message: 'the difference of given two numbers', difference });
  });

  app.post('/multiply', (req, res) => {
    console.log(req.body)
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }
    const result = num1 * num2;
    if (result < -1000000) {
      return res.status(400).json({ status: 'error', message: 'Underflow' });
    }
    if (result > 1000000) {
      return res.status(400).json({ status: 'error', message: 'Overflow' });
    }
    res.json({ status: 'success', message: 'The product of given numbers', result });
  });

  app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ status: 'error', message: 'Invalid data types' });
    }
    if(num2 === 0) {
        return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
        }
        const result = num1 / num2;
        if (result < -1000000) {
        return res.status(400).json({ status: 'error', message: 'Underflow' });
        } else if (result > 1000000) {
        return res.status(400).json({ status: 'error', message: 'Overflow' });
        }
        return res.status(200).json({ status: 'success', message: 'The division of given numbers', result });
        });


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

