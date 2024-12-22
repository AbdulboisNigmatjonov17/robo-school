import React from 'react'
import "../styles/Form.css"

const Form = () => {
  return (
    <div className='Form'>
        <div className="Container">
          <div className="FormContent">
            <h3>Запишитесь на курс со скидкой 10%</h3>
            <p>Акция действительна до 10 марта 2022 года</p>
          </div>
          <form>
            <input type='text' placeholder='Имя' />
            <input type='number' placeholder='Телефон' />
            <input type="email" placeholder='E-mail' />
            <button>Оформить заявку</button>
          </form>
        </div>
    </div>
  )
}

export default Form
