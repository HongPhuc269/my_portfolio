import React, { PureComponent, useState } from 'react'
import "../Header/Header.css";
import background from "../../assets/images/bg-contact.jpg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Content/Content.css";
import { validateEmail, validatePassword, validatePhone } from '../validate/validate';
const ContactPage = () => {
    const myStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: 300
    };

    const [values, setValues] = useState({
        email: "",
        password: "",
        phone: "",
    });

    const [touched, setTouched] = useState({
        email: false,
        password: false,
        phone: false,
    });

    const errorEmail = validateEmail(values.email);
    const errorPassword = validatePassword(values.password);
    const errorPhoneNumber = validatePhone(values.phone);


    const handleChange = evt => {
        console.log("evt: " + evt);
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        });
    };

    const handleBlur = evt => {
        setTouched({
            ...touched,
            [evt.target.name]: true
        })
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("values = ", values);
    }

    const formValid = !errorEmail && !errorPassword;

    return (<>
        <div className="header" style={myStyle}>
            <div className="text-content">
                <h1 className="me">Contact me</h1>
                <p className="aboutme">Have question? I have answers</p>
            </div>
        </div>

        <div className='form'>
            <p >Want to get in touch?
                Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
            <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && Boolean(errorEmail)}
                        isValid={touched.email && !Boolean(errorEmail)} />
                    <Form.Text className="text-muted" >
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && Boolean(errorPassword)}
                        isValid={touched.password && !Boolean(errorPassword)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label >Phone Number</Form.Label>
                    <Form.Control type="phoneNumber" placeholder="PhoneNumber"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && Boolean(errorPhoneNumber)}
                        isValid={touched.password && !Boolean(errorPhoneNumber)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label >Message</Form.Label>
                    <Form.Control type="text" placeholder="message" />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={ !formValid }>
                    Submit
                </Button>
            </Form>
        </div>
    </>
    );
}
export default ContactPage;