import { assetPath } from '../utils/assetPath';

function PageHero({ eyebrow, title, body, image }) {
  return (
    <section className={`page-hero${image ? ' has-image' : ''}`}>
      {image && (
        <div className="page-hero-media" aria-hidden="true">
          <img src={assetPath(image)} alt="" />
        </div>
      )}
      {image && <div className="page-hero-scrim" aria-hidden="true" />}
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}

export default PageHero;