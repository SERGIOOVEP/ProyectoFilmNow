import React from 'react'
import { useState } from 'react';

export const Questions = () => {

    // Creamos el estado con la pregunta actual
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // Creamos el estado para almacenar la respuesta del usuario
    const [answers, setAnswers] = useState([]);


    // Definimos preguntas y respuestas
    const questions = [

        {
            question: <p className='pQues'>¿Qué tipo de género buscas?</p>,
            answers: [
                { text: 'Acción', value: 'Action, Adventure' },
                { text: 'Comedia', value: 'comedy' },
                { text: 'Ciencia Ficción', value: 'Sci-Fi' },
                { text: 'Drama', value: 'Drama' },
                { text: 'Familiar', value: 'Family' },
                { text: 'Musical', value: 'Musical' },
                { text: 'Romantica', value: 'Romance' },
                { text: 'Suspense', value: 'Thriller' },
                { text: 'Terror', value: 'Horror' },
                { text: 'Western', value: 'Western' },
            ],
        },
        {
            question: <p className='pQues'>¿De cúanto tiempo dispones?</p>,
            answers: [
                { text: '15 - 60 min', value: 1 },
                { text: '61 - 110 min', value: 2 },
                { text: '+110 min', value: 3 },
            ],
        },
        {
            question: <p className='pQues'>¿Cuál es tu nivel de exigencia?</p>,
            answers: [
                { text: 'Quiero peli de sabado tarde', value: 1 },
                { text: 'Estoy abierto a proposiciones', value: 2 },
                { text: 'Dame lo mejor que tengas', value: 3 },
            ],
        },

    ];

    // Obtenemos la pregunta actual
    const currentQuizQuestion = questions[currentQuestion];
    console.log(currentQuestion)



    // Función para manejar la selección de cada respuesta
    function answerSelection(selectedAnswer) {

        // Avanza a la siguiente pregunta
        setCurrentQuestion(currentQuestion + 1);


        // Agrega la respuesta seleccionada al estado del componente
        setAnswers([...answers, selectedAnswer]);

        console.log(selectedAnswer)

    }

    function goToHome() {
        window.location = '/generate'
    }


    // Convertimos el estado del componente en una cadena JSON para poder guardarlo en el Local
    const answersLocal = JSON.stringify(answers);

    // Guardamos las respuestas en el localStorage
    localStorage.setItem('quizAnswers', (answersLocal));


    return (
        <div className='divQuestions'>
            {/* Muestra la pregunta actual */}
            {/* <h1 className='h1Questions'>{currentQuizQuestion.question}</h1> */}
            {currentQuizQuestion ? currentQuizQuestion.question
                : <button onClick={() => goToHome()} className="butSave">ENCUENTRA MI PELICULA</button>}
            {/* Muestra las respuestas como botones */}
            {currentQuizQuestion ? currentQuizQuestion.answers.map((answer, i) => (
                <div key={i}>
                    <button onClick={() => answerSelection(answer)} className="buttonQuestion">
                        {answer.text}
                    </button>

                </div>

            )) : ""}

        </div>
    );
}

