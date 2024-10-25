import express from 'express';
import participants from './participants';

const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log('App is listening on port 3000!');
});

app.get('/', (_, res) => {
  console.log('app is working');
  res.send('app is working');
});

app.get('/participants', (req, res) => {
  const { firstName } = req.query;
  res.send({
    date: new Date(),
    workshopName: '/02',
    participants: participants.filter(
      (participant) => !firstName || participant.firstName === firstName,
    ),
  });
});

// TODO: add new name to list
app.put('/participants', (req, res) => {
  const newEntry = req.body;
  participants.push(newEntry);
  res.send(participants);
});
