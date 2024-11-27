export const metadata = {
    title: 'Contact',
}

const page = () => {
    return (
        <section>
            <div className="container">
                <h4 className='title-text'>Contact Us</h4>
                <div className='contact-form'>
                    <input type='text' name='username' placeholder='Name' className='input-box' />
                    <input type='email' name='Email' placeholder='Email' className='input-box' />
                    <input type='tel' name='Phone' placeholder='Phone No' className='input-box' />
                    <input type='password' name='password' placeholder='Password' className='input-box' />
                    <div>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default page
