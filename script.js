const correctAnswers = ['B', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'A', 'B' ];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, ]

   // check answers
   userAnswers.forEach((answer, index) => {
       if(answer === correctAnswers[index]) {
           score += 10;
        //    const textPrimary = document.querySelector('.text-primary');
        //    textPrimary.innerContent = score;
           
       }
   });

   scrollTo(0, 0);
   
   result.classList.remove('d-none');

   let output = 0;
   const timer = setInterval(() => {
   result.querySelector('.text-primary').textContent = `${output}%`;
   if(output === score) {
       clearInterval(timer);
    } else {
        output++;
    }
}, 10);

});

