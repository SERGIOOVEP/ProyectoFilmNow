import React from 'react'

export const InsertFilm = () => {

  const insertFilm = async e => {

    e.preventDefault();

    let FilmDates = {
      name_user: e.target.name_film.value,

    }

    let Metadatos = {
      method: 'POST',
      body: JSON.stringify(UserDates),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };

    fetch("http://localhost:5000/insertFilm", Metadatos)
      .then((res) => console.log(res))
      .then((res) => {
        console.log(res)

      });



  }

  return (
    <div>InsertFilm</div>
  )
}
