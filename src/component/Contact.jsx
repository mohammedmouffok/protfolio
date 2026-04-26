import { useState } from "react";
import TextField from "@mui/material/TextField";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="Contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-4 text-center text-2xl text-black font-bold">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-[#757575] mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects. Feel
          free to reach out if you'd like to collaborate!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <EmailIcon sx={{ fontSize: 30 }} />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <p className="text-black font-bold">mouffokmed5@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <LocationOnIcon sx={{ fontSize: 30 }} />
                </div>
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="text-black font-bold">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitHubIcon sx={{ fontSize: 30 }} />
                </div>
                <div>
                  <h4 className="mb-1">GitHub</h4>
                  <p className="text-black font-bold">
                    github.com/mohammedmouffok
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 rounded-lg py-3 bg-input-background"
                  multiline
                  maxRows={4}
                />
              </div>
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 rounded-lg py-3 bg-input-background"
                  multiline
                  maxRows={4}
                />
              </div>
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 rounded-lg py-3 bg-input-background"
                  multiline
                  rows={4}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={submitted}
                  variant="outlined"
                  className="w-50 px-8 py-3 rounded-lg "
                  sx={{
                    color: "black",
                    alignItems: "center",
                    borderColor: "black",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                    transition: "all 0.5s ease",
                  }}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
