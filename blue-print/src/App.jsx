import React from 'react'
import ReactDom from 'react-dom/client'

export default function App(){
  function signUp(formData){

    const data = Object.fromEntries(formData)
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const allData = {
      ...data,
      dietaryRestrictions
    }

    console.log(allData)


    // event.preventDefault()
    // // console.log("submitted")
    // const formEl = event.currentTarget
    // const formData = new FormData(formEl)
    // const email = formData.get("email")
    // const password = formData.get("password")
    // const employmentStatus = formData.get("employmentStatus")
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    // const favColor = formData.get("favColor")
    // console.log(favColor)
    // console.log(email,password)
    // formEl.reset()
  }

  return(
    <section>
      <h1>Signup From</h1>
      <form action={signUp}>
        <label htmlFor="email">Email : </label>
        <input id="email" type="email" name="email" placeholder="Email" />
        <br/>

        <label htmlFor="password">Password : </label>
        <input id="password" type="password" name="password"  />
        <br/>

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description"></textarea>
        <br/>

        <fieldset>
          <legend>Employment Status</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed"/>
            Unemployed
          </label>

          <label>
            <input type="radio" name="employmentStatus" value="part-time"/>
            Part-Time
          </label>

          <label>
            <input type="radio" name="employmentStatus" defualtChecked={true} value="full-time"/>
            Full-Time
          </label>
        </fieldset>

        <br/>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
            Kosher
          </label>

          <label>
            <input type="checkbox" name="dietaryRestrictions" value="chicken"/>
            Chicken
          </label>

          <label>
            <input type="checkbox" name="dietaryRestrictions" defualtChecked={true} value="vegan"/>
            Vegan
          </label>
        </fieldset>

        <br/>

        <label htmlFor='favColor'>What is your favourite color?</label>
        <select id='favColor' name="favColor">
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Purple">Purple</option>
        </select>
        <br/>

        <button>Submit</button>
      </form>
    </section>
  )
}