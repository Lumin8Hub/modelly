const steps = ["Collect & Consolidate", "Control & Configure", "Cleanse & Convert", "Check & Correct", "Consume & Circulate"];

export function ProcessFlow() {
  return <svg viewBox="0 0 1000 190" className="w-full" role="img" aria-label={steps.join(" to ")}>
    <line x1="95" y1="72" x2="905" y2="72" stroke="#0A0B0D" strokeWidth="2" opacity=".2" />
    {steps.map((step, index) => {
      const x = 100 + index * 200;
      return <g key={step}><rect x={x - 34} y="38" width="68" height="68" rx="14" fill={["#5DB5AE", "#F4C04E", "#E5546B", "#5B7DB1", "#0A0B0D"][index]} /><text x={x} y="80" textAnchor="middle" fill={index === 4 ? "#fff" : "#0A0B0D"} fontFamily="JetBrains Mono" fontSize="13">C{index + 1}</text><text x={x} y="140" textAnchor="middle" fill="#6B6B66" fontFamily="Plus Jakarta Sans" fontSize="13">{step}</text></g>;
    })}
  </svg>;
}
