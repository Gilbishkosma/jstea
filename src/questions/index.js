import First from './first'
import second from './second'


const questions = [First, second];

const randomIndex = Math.floor(Math.random() * questions.length);

export default questions[randomIndex];