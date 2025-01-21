import { Icon } from "@iconify/react";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <section id="footer" className="footer">
      <ul>
        <a href="">
          <Icon icon="ic:baseline-facebook" />
        </a>
        <a href="">
          <Icon icon="ri:instagram-fill" />
        </a>
        <a href="">
          <Icon icon="formkit:whatsapp" />
        </a>
        <a href="">
          <Icon icon="mdi:github" />
        </a>
      </ul>

      <div className="info">
        <a href="">contato@webdev.com.br.com</a>

        <i>Desenvolvido pela Web.Dev - {ano}</i>
      </div>
    </section>
  );
}
