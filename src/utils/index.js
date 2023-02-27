
const path = "@/questions/"

export const getRandomQuestion = () => {
    const questions = ['first', 'second'];
    const res = questions[Math.floor(Math.random()* questions.length)];
    return res;
}