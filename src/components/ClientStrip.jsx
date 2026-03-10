function ClientStrip({ clients }) {
  return (
    <section className="client-strip">
      <p className="section-intro">Trusted by educators, healthcare institutions, public agencies, and enterprise teams.</p>
      <div className="client-grid">
        {clients.map((client) => (
          <div className="client-logo-wrap" key={client.name}>
            <img
              src={client.logo}
              alt={client.name}
              className={`client-logo client-logo--${client.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            />
            <span className="client-tooltip">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientStrip;