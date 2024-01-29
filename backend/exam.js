const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const questions = [
    { question: 'What does a red traffic light indicate?', options: ['Go', 'Slow down', 'Stop', 'Proceed with caution'], correctAnswer: 'c' },
    { question: 'What does a yellow traffic light indicate?', options: ['Stop', 'Proceed with caution', 'Speed up', 'Make a U-turn'], correctAnswer: 'b' },
    { question: 'What does a round sign with a red border and a white interior indicate?', options: ['Yield', 'Stop', 'No Entry', 'One-way street'], correctAnswer: 'a' },
    { question: 'When approaching a school zone, what should you do?', options: ['Increase speed', 'Use the horn to alert children', 'Slow down and watch for children', 'Ignore it, as it\'s not important'], correctAnswer: 'c' },
    { question: 'What does a solid white line between lanes mean?', options: ['Lane changing is allowed', 'Lane changing is prohibited', 'You can cross the line if necessary', 'It\'s a suggestion for lane changes'], correctAnswer: 'b' },
    { question: 'If you are being passed by another vehicle, what should you do?', options: ['Speed up to maintain your position', 'Maintain your speed and stay in your lane', 'Slow down and let the other vehicle pass safely', 'Change lanes and block the other vehicle'], correctAnswer: 'c' },
    { question: 'What is the purpose of an anti-lock braking system (ABS)?', options: ['To increase fuel efficiency', 'To prevent skidding and maintain steering control during hard braking', 'To make the brakes more responsive', 'To decrease stopping distance'], correctAnswer: 'b' },
    { question: 'What does a red triangle with an orange center indicate?', options: ['Construction zone ahead', 'School zone ahead', 'Yield ahead', 'Stop sign ahead'], correctAnswer: 'c' },
    { question: 'In adverse weather conditions, what should you do to maintain a safe following distance?', options: ['Decrease following distance', 'Increase following distance', 'Maintain the same following distance', 'Tailgate the vehicle in front'], correctAnswer: 'b' },
    { question: 'When can you pass a vehicle on the right?', options: ['Only in a no-passing zone', 'When the vehicle in front is making a left turn', 'When the vehicle in front is moving below the speed limit', 'Whenever you feel like it'], correctAnswer: 'b' },
    { question: 'What is the legal blood alcohol concentration (BAC) limit for most drivers?', options: ['0.02%', '0.05%', '0.08%', '0.10%'], correctAnswer: 'c' },
    { question: 'What is the primary purpose of traffic signs?', options: ['Decoration', 'Provide information and guidance', 'Entertainment', 'Obstruct the view'], correctAnswer: 'b' },
    { question: 'When parking uphill with a curb, which way should the front wheels be turned?', options: ['Towards the curb', 'Away from the curb', 'Parallel to the curb', 'No need to turn'], correctAnswer: 'a' },
    { question: 'What does a white rectangular sign with black lettering indicate?', options: ['Speed limit', 'Warning', 'Regulatory information', 'Destination information'], correctAnswer: 'c' },
    { question: 'What does a flashing red traffic light indicate?', options: ['Go', 'Stop', 'Proceed with caution', 'Slow down'], correctAnswer: 'b' },
    { question: 'What should you do if your vehicle starts to skid?', options: ['Accelerate', 'Brake firmly', 'Steer in the direction you want to go', 'Close your eyes'], correctAnswer: 'c' },
    { question: 'When should you use your headlights?', options: ['Only at night', 'In fog, rain, or snow', 'When approaching other vehicles', 'All of the above'], correctAnswer: 'd' },
    { question: 'What is the purpose of a crosswalk?', options: ['To decorate the road', 'To provide a safe path for pedestrians', 'To indicate a bicycle lane', 'To discourage jaywalking'], correctAnswer: 'b' },
    { question: 'What does a green arrow signal indicate?', options: ['Turn permitted', 'Stop', 'Proceed with caution', 'Yield'], correctAnswer: 'a' },
    { question: 'When should you yield the right-of-way?', options: ['Always', 'Only when turning left', 'When a pedestrian is present', 'When required by traffic signs or signals'], correctAnswer: 'd' },
    { question: 'What is the purpose of a rumble strip on the road?', options: ['To create noise for entertainment', 'To alert drivers of upcoming hazards or changes in the road', 'To mark a bicycle lane', 'To enhance road aesthetics'], correctAnswer: 'b' },
  ];
  

let scores = {};

app.get('/questions', (req, res) => {
  res.json({ questions });
});

app.post('/submit', (req, res) => {
  const userAnswers = req.body.answers;
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      score++;
    }
  }

  const userId = Math.random().toString(36).substring(7);
  scores[userId] = score;

  res.json({ score });
});

app.get('/scores/:userId', (req, res) => {
  const userId = req.params.userId;
  const score = scores[userId];
  res.json({ score });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
