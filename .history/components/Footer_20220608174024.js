export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200 " id="footer">
      <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">Contact Me</h1>
            <h2> jhonesantiagor@gmail.com</h2>
          </div>
          <div class="flex align-center justify-center">
            <div className="flex jutify-center align-center space-x-5">
              <a target="_blank" href="mailto: jhonesantiagor@gmail.com">
                {" "}
                <img
                  height={"100"}
                  src="images/nicons/gmail.png"
                ></img> Mail{" "}
              </a>
              <a href="https://www.linkedin.com/in/jhonsantiago/" target="_blank">
                <img src="images/nicons/linkedin.png"></img> Linkedin{" "}
              </a>
              <a href="https://wa.me/+584247287084" target="_blank">
                <img src="images/nicons/whatsapp.png" ></img>WhatsApp
              </a>
              <a href="https://twitter.com/jhonenmsantiago" target="_blank">
                <img src="images/nicons/gorjeo.png"></img>Twitter
              </a>
              <a href="https://github.com/jhonenmanuel1" target="_blank" ><img src="images/nicons/github.png"></img>GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
