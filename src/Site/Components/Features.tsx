import { Icon } from "@iconify/react";

export default function Features() {
  return (
    <section id="features" className="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 feature-box">
            <Icon className="ico-fea" icon="solar:heart-bold" />
            <h2>Fácil de usar</h2>
            <i>
              O sistema possui uma interface muito simples e fácil de utiliazer.
            </i>
          </div>

          <div className="col-lg-4 feature-box">
            <Icon className="ico-fea" icon="ic:round-folder" />
            <h2>Organização é tudo</h2>
            <i>Tenha sua carteira de clientes sempre muito bem organizada.</i>
          </div>

          <div className="col-lg-4 feature-box">
            <Icon className="ico-fea" icon="mdi:planet" />
            <h2>Em qualquer lucas</h2>
            <i>
              Gerencie seu fluxo de negócios de foma eficiente, onde quer que
              cocê esteja.
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
