//
const correctAnswer = {
    "q1": "a1",
    "q2": "a2",
    //the rest of good answers defined here//
}

const validateForm = () => {
    // iterate over questions
    for (let question = 1; question <= 2; question++) {
        for (let answer = 1; answer <= 3; answer++) {
            const answerRadio = document.getElementById(`q${question}a${answer}`);
            if (answerRadio.checked) {
                if (correctAnswer[`q${question}`] === `a${answer}`) {
                    document.getElementById(`q${question}a${answer}label`).style.color = "lime";
                    //any other indication of good answer with re: to accessibility??/
                } else {
                    document.getElementById(`q${question}a${answer}label`).style.color = "red";
                    //any other indication of bad answer with re: to accessibility??
                }
            } else if (correctAnswer[`q${question}`] === `a${answer}`) {
                document.getElementById(`q${question}a${answer}label`).style.color = "green";
                //any other indication of good answer with re: to accessibility??

            }
        }
    }
}



const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    validateForm();
  });