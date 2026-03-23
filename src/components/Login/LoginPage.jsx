import React, {useState} from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import LoginImg from "../../assets/LoginImg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({username:"", password: ""});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
        setErrors({...errors, [e.target.name]: ""});
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents browser from refreshing the page

        const newErrors = {};
        if (!loginData.username) newErrors.username = "Username is required";
        if (!loginData.password) newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0){ //atleast 1 error exists, stop login
            setErrors(newErrors);
            return;
        }
    

        setLoading(true);
        setErrors({});

        try{
            const res = await axios.post("http://localhost:8001/api/auth/login", loginData);
            console.log("Login success: ", res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            const user = res.data.user;
            if (user.role === "organisation") {
                navigate("/org-dashboard");
            } else {
                navigate("/user-dashboard");
            }
            window.location.reload();
        } catch(err){
            console.log(err);
            const msg = err.response?.data?.message || "Login Failed";
            setErrors({form: msg});
        } finally{
            setLoading(false);
        }
    }


  return (
    <div className="d-flex align-items-center justify-content-center py-5">
    {/* gives horizontal padding and centers content */}
    <div className="shadow rounded bg-white overflow-hidden" style={{maxWidth: "900px", height: "75vh"}}>
        <Container fluid className="h-100 p-0"> 
            {/* creates horizontal flex layout */}
            <Row className="g-0 ">
                {/* defines how much WIDTH each section takes */}
                <Col xs="12" lg="6" className="d-none d-lg-block h-100 p-0">
                    {/* Image */}
                    <img src = {LoginImg} alt = "login" className="img-fluid h-100 w-100" style={{ objectFit: "cover" }}></img>
                </Col>
                <Col xs="12" lg="6" className="p-4">
                    {/* form */}
                    <Form onSubmit={handleSubmit}>
                        {errors.form && <p className="text-danger">{errors.form}</p>}
                        <FormGroup>
                            <Label for="username">
                            Enter Username
                            </Label>
                            <Input type="text"
                                name="username"
                                id="username"
                                value={loginData.username}
                                onChange={handleChange}
                                invalid={!!errors.username}/>
                            <FormFeedback>
                            {errors.username}
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                            Enter Password
                            </Label>
                            <Input 
                                type="password"
                                name="password"
                                id="password"
                                value={loginData.password}
                                onChange={handleChange}
                                invalid={!!errors.password}/>
                            <FormFeedback>
                            {errors.password}
                            </FormFeedback>
                        </FormGroup>

                        <Button color="primary" type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                                    
                        {/* <FormGroup>
                            <Label for="examplePassword">
                            Invalid input
                            </Label>
                            <Input invalid />
                            <FormFeedback>
                            Oh noes! that name is already taken
                            </FormFeedback>
                            <FormText>
                            Example help text that remains unchanged.
                            </FormText>
                        </FormGroup> */}
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>        
    </div>
  );
};

export default LoginPage;
