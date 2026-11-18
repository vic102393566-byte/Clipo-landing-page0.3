import { PLANS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

/** 7. Oferta e planos. Preencha os dados em src/data/content.ts (PLANS). */
export default function Plans() {
  return (
    <section id="planos" aria-labelledby="h-plans">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Planos</span>
          <h2 id="h-plans">Escolha o plano que acompanha o seu ritmo.</h2>
          <p className="lead">
            Do primeiro vídeo curto à operação com vários projetos, existe um plano para o momento em que você está.
          </p>
        </div>
        <div className="plans">
          {PLANS.map((p) => (
            <article className={`plan reveal${p.featured ? ' featured' : ''}`} key={p.id} data-plan={p.id}>
              {p.flag && <span className="flag">{p.flag}</span>}
              <span className="for">{p.audience}</span>
              <h3>{p.name}</h3>
              <p className="desc">{p.description}</p>
              <div className="price">
                <strong>{p.price}</strong>
                <span>{p.period}</span>
              </div>
              <ul>
                {p.benefits.map((b, i) => (
                  <li key={i}>
                    <Icon name="check" /> {b}
                  </li>
                ))}
              </ul>
              <CtaLink
                type="checkout"
                plan={p.id}
                where={`plano-${p.id}`}
                className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-block`}
              >
                Escolher meu plano
              </CtaLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
