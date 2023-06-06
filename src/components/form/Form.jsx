import './form.css';


function Form({handleChangeName}) {
    return (
        <section className='form-container'>
            <form>
                <div className='input-box'>
                    <input onChange={handleChangeName} type="text" name='name' placeholder='Nome' />
                </div>
            </form>
        </section>
    )
}

export default Form;