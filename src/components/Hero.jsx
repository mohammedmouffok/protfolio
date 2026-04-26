import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 bg-linear-to-br from-primary to-muted rounded-full mx-auto mb-6 flex items-center justify-center">
            <Stack>
              <Avatar
                sx={{ width: 110, height: 110 }}
                className="shadow-xl shadow-[#fff1df] transition-shadow "
              >
                <Typography variant="h3">M</Typography>
              </Avatar>
            </Stack>
          </div>
        </div>
        <h1 className="mb-4 text-2xl text-black font-bold">John Doe</h1>
        <p className="text-2xl text-[#505050] mb-8">
          Full Stack Developer & Designer
        </p>
        <p className="text-lg text-[#757575] mb-12 max-w-2xl mx-auto">
          I craft beautiful, functional web experiences with a focus on clean
          code and intuitive design. Passionate about creating solutions that
          make a difference.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#Projects"
            className="px-8 py-3 bg-black text-white rounded-lg hover:opacity-75 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#Contact"
            className="px-8 py-3 border border-[#dadada] rounded-lg hover:bg-[#dadada]  transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
