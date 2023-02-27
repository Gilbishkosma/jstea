import first from './first';
import second from './second';


const questions = [first,second]

const question = questions[Math.floor(Math.random()*questions.length)];

export default question;