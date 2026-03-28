import React, { useState } from "react";
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
import RegisterImg from "../../assets/LoginImg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    role: "user"
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    const newErrors = {};
    if (!registerData.username) newErrors.username = "Username is required";
    if (!registerData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // POST request to backend
      const res = await axios.post("http://localhost:8001/api/auth/register", registerData);

      // Success → redirect to login
      console.log("Register success:", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      const user = res.data.user;

      if (user.role === "organisation") {
        navigate("/org-dashboard");
      } else {
        navigate("/dashboard");
      }

      window.location.reload();
    } catch (err) {
      console.log(err);

      // Check if username is taken
      if (err.response?.data?.message?.includes("already exists")) {
        setErrors({ username: err.response.data.message });
      } else {
        setErrors({ form: err.response?.data?.message || "Registration failed" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="shadow rounded bg-white overflow-hidden" style={{ maxWidth: "900px", height: "75vh" }}>
        <Container fluid className="h-100 p-0">
          <Row className="g-0">
            <Col xs="12" lg="6" className="d-none d-lg-block h-100 p-0">
              <img
                src={RegisterImg}
                alt="register"
                className="img-fluid h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </Col>

            <Col xs="12" lg="6" className="p-4">
              <Form onSubmit={handleSubmit}>
                {errors.form && <p className="text-danger">{errors.form}</p>}

                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    value={registerData.username}
                    onChange={handleChange}
                    invalid={!!errors.username}
                  />
                  <FormFeedback>{errors.username}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={registerData.password}
                    onChange={handleChange}
                    invalid={!!errors.password}
                  />
                  <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="role">Role</Label>
                  <Input
                    type="select"
                    name="role"
                    id="role"
                    value={registerData.role}
                    onChange={handleChange}
                  >
                    <option value="user">User</option>
                    <option value="organisation">Organisation</option>
                  </Input>
                </FormGroup>

                <Button color="primary" type="submit" disabled={loading}>
                  {loading ? "Registering..." : "Register"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RegisterPage;
