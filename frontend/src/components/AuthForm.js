import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import "../AuthForm.css";

function AuthForm({ type }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: API call for authentication
    console.log("Form submitted", formData);
  };
  return (
    <div className="auth-form-container">
      <Card className="auth-card">
        <CardHeader>
          <CardTitle>{type === "login" ? "Sign in" : "Sign up"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {type === "register" && (
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                onChange={handleChange}
              />
            )}
            <Button type="submit" className="w-full">
              {type === "login" ? "Sign in" : "Sign up"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            {type === "login" ? (
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500">
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthForm;