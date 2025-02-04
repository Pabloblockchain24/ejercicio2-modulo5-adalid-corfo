import { useState } from "react";
import DOMPurify from "dompurify";

function Vulnerabilities() {
  const [origin, setOrigin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("origen: ", origin);
    const sanitized = DOMPurify.sanitize(origin);
    console.log("sanitizado: ", sanitized);
  };

  return (
    <>
      <h1>Demostración de vulnerabilidades</h1>
      <section>
        <h2>Clickjacking</h2>
        <p>
          Intenta cargar esta pagina en un iframe para ver cmo se puede evitar
          este ataque con el encabezado <code> X-Frame-Options</code>{" "}
        </p>
        <iframe
          src="/"
          style={{ width: "100%", heigth: "200px", border: "1px solid black" }}
          title="Clickjacking example"
        ></iframe>
      </section>

      <p>
        Desde React no tenemos como restringir el X-Frame-Options dado que se
        hace desde el servidor
      </p>

      <section>
        <h2>Cross-Site Scripting (XSS)</h2>
        <p>Ingresa un script malicioso para ver como lo sanitizamos.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Entrada:
            <input
              type="text"
              placeholder="Escribe con malicia..."
              onChange={(e) => setOrigin(e.target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}

export default Vulnerabilities;
