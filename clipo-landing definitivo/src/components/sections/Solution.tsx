import { AFTER_LIST, BEFORE_LIST, SOLUTION_STEPS } from '../../data/content';
import CtaLink from '../ui/CtaLink';
import Icon from '../ui/Icon';

/** 3. A solução: processo em 4 passos + comparação manual x Clipo. */
export default function Solution() {
  return (
    <section id="solucao" aria-labelledby="h-sol">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">A solução</span>
          <h2 id="h-sol">Clipo: o caminho mais curto entre o vídeo longo e o conteúdo pronto.</h2>
          <p className="lead">
            Você grava uma vez. O Clipo ajuda a transformar essa gravação em cortes curtos, legendados e preparados para
            publicar, tudo no mesmo lugar.
          </p>
        </div>

        <div className="steps-row">
          {SOLUTION_STEPS.map((s, i) => (
            <div className="s-step reveal" key={s.title}>
              <div className="s-ico">
                <Icon name={s.icon} />
                <em>{i + 1}</em>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <div className="vs">
          <div className="vs-col old reveal">
            <h3>
              <Icon name="clock" /> Do jeito manual
            </h3>
            <ul>
              {BEFORE_LIST.map((t) => (
                <li key={t}>
                  <Icon name="x" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="vs-col new reveal">
            <h3>
              <Icon name="spark" style={{ color: 'var(--yellow)' }} /> Com o Clipo
            </h3>
            <ul>
              {AFTER_LIST.map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="center-cta">
          <CtaLink type="signup" where="solucao" className="btn btn-primary btn-lg">
            Transformar meus vídeos
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
