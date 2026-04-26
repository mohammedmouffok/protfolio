import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-[#f5f5f5] ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#616161]">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/mohammedmouffok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#757575] hover:text-[#212121] transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </a>
            <a
              href="https://linkedin.com/in/mohammed-mouffok-4a7371325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#757575] hover:text-[#212121] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </a>
            <a
              href="mailto:mouffokmed5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#757575] hover:text-[#212121] transition-colors"
              aria-label="Gmail"
            >
              <EmailIcon sx={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
