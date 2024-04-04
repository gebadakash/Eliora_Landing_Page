import "./CounterSection.css";


const CounterSection = () => {
  const counters = [
    { id: 1, stat: "3+", label: "Years Of Experience" },
    { id: 2, stat: "15+", label: "Professional Experts" },
    { id: 3, stat: "135+", label: "Satisfied Clients" },
    { id: 4, stat: "103+", label: "Custom Software & App Built" }
  ];

  return (
    <section className="section counter">
      <div className="container">
        <div className="row">
          {counters.map(counter => (
            <div key={counter.id} className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h3 className="mb-0"><span className="counter-stat font-weight-bold">{counter.stat}</span></h3>
                <p className="text-muted">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
