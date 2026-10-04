import { useState } from "react";

type MiniVariant = {
  id: number;
  name: string;
  color: string;
  accent: string;
  detail: "fire" | "water" | "sprout" | "space" | "volt";
  tagline: string;
};

const minis: MiniVariant[] = [
  { id: 0, name: "Alev", color: "#FF7438", accent: "#FFC928", detail: "fire", tagline: "Enerjini yüksek tutar" },
  { id: 1, name: "Damla", color: "#22B8F2", accent: "#7CE6FF", detail: "water", tagline: "Sakin bir ritim kurar" },
  { id: 2, name: "Filiz", color: "#31BC83", accent: "#91E3A9", detail: "sprout", tagline: "Gelişimini destekler" },
  { id: 3, name: "Nova", color: "#7659E8", accent: "#D28CFF", detail: "space", tagline: "Hedeflerine odaklanır" },
  { id: 4, name: "Volt", color: "#F0B82F", accent: "#FFE573", detail: "volt", tagline: "Harekete geçmeni sağlar" },
];

const personalities = [
  { icon: "🌱", label: "Sakin" },
  { icon: "🔥", label: "Motive edici" },
  { icon: "✨", label: "Eğlenceli" },
  { icon: "🎯", label: "Direkt" },
];

const habits = [
  { icon: "💧", label: "Su içmek" },
  { icon: "📚", label: "Ders çalışmak" },
  { icon: "💻", label: "Kodlama" },
  { icon: "🏃", label: "Egzersiz" },
  { icon: "😴", label: "Uyku" },
  { icon: "📖", label: "Kitap okumak" },
];

function MiniCharacter({
  variant,
  size = "large",
}: {
  variant: MiniVariant;
  size?: "large" | "small";
}) {
  const id = `mini-${variant.id}-${size}`;
  return (
    <svg
      className={`mini-character mini-character--${size}`}
      viewBox="0 0 180 180"
      role="img"
      aria-label={`${variant.name} Mini görünümü`}
    >
      <defs>
        <linearGradient id={`${id}-body`} x1="36" y1="35" x2="143" y2="155">
          <stop offset="0" stopColor={variant.accent} />
          <stop offset="0.72" stopColor={variant.color} />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="55" y1="55" x2="126" y2="120">
          <stop stopColor="#FFF7DA" />
          <stop offset="1" stopColor="#F5D5B5" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor={variant.color} floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter={`url(#${id}-shadow)`}>
        {variant.detail === "fire" && (
          <>
            <path d="M65 48c-7-21 10-22 6-39 17 8 15 22 15 22 7-5 11-13 9-21 24 19 20 35 10 45Z" fill={`url(#${id}-body)`} />
            <path d="M80 44c-3-10 4-15 3-23 11 8 14 17 9 27Z" fill="#FFF06A" />
            <path d="M60 124 48 139l8 8 14-10M120 124l12 15-8 8-14-10" fill="none" stroke="#E8B98B" strokeWidth="13" strokeLinecap="round" />
            <path d="M70 121h40l8 38H98l-3-21H85l-3 21H62Z" fill="#EAC99E" />
            <rect x="38" y="47" width="104" height="83" rx="28" fill={`url(#${id}-body)`} />
            <rect x="48" y="58" width="84" height="61" rx="21" fill={`url(#${id}-face)`} />
            <circle cx="90" cy="137" r="11" fill={variant.color} />
            <path d="M86 129v16M94 129v16" stroke="#241D34" strokeWidth="3" />
          </>
        )}
        {variant.detail === "water" && (
          <>
            <path d="M90 13c10 21 35 42 35 67 0 25-15 43-35 43S55 105 55 80c0-25 25-46 35-67Z" fill={`url(#${id}-body)`} />
            <path d="M66 122 55 143M114 122l11 21" stroke={variant.color} strokeWidth="13" strokeLinecap="round" />
            <path d="M74 118h32l7 39H97l-3-23h-8l-3 23H67Z" fill="#D9F7FF" />
            <path d="M69 67c7-14 34-20 46 1 9 16 0 42-25 42S59 86 69 67Z" fill="#EAFBFF" />
            <path d="M68 59c7-11 16-16 25-21" fill="none" stroke="#B8F3FF" strokeWidth="7" strokeLinecap="round" />
          </>
        )}
        {variant.detail === "sprout" && (
          <>
            <path d="M90 48c0-19 11-31 31-32-1 17-11 29-31 32Z" fill={variant.color} />
            <path d="M88 49C84 35 74 28 59 31c5 14 14 20 29 18Z" fill={variant.accent} />
            <path d="M89 55V35" stroke="#207A59" strokeWidth="5" strokeLinecap="round" />
            <path d="M62 123 49 142M118 123l13 19" stroke="#9DE1B3" strokeWidth="13" strokeLinecap="round" />
            <path d="M70 119h40l8 38H98l-3-22H85l-3 22H62Z" fill="#B9EAC7" />
            <rect x="41" y="49" width="98" height="80" rx="38" fill={`url(#${id}-body)`} />
            <rect x="51" y="60" width="78" height="58" rx="27" fill="#E5FAE8" />
            <path d="M73 122h34v23H73Z" fill={variant.color} opacity="0.8" />
          </>
        )}
        {variant.detail === "space" && (
          <>
            <ellipse cx="90" cy="78" rx="66" ry="24" fill="none" stroke={variant.accent} strokeWidth="5" opacity="0.75" transform="rotate(-14 90 78)" />
            <circle cx="137" cy="61" r="7" fill="#FFCB57" />
            <path d="M61 121 49 143M119 121l12 22" stroke="#5A46B8" strokeWidth="13" strokeLinecap="round" />
            <path d="M70 116h40l8 41H98l-3-23H85l-3 23H62Z" fill="#30284F" />
            <rect x="40" y="43" width="100" height="87" rx="44" fill="#29233E" stroke={variant.color} strokeWidth="5" />
            <rect x="51" y="57" width="78" height="58" rx="28" fill={`url(#${id}-body)`} opacity="0.88" />
          </>
        )}
        {variant.detail === "volt" && (
          <>
            <path d="m94 7-20 32h16l-8 25 28-37H94Z" fill={variant.accent} stroke={variant.color} strokeWidth="3" strokeLinejoin="round" />
            <path d="M61 122 49 141M119 122l12 19" stroke="#F5D178" strokeWidth="13" strokeLinecap="round" />
            <path d="M70 118h40l8 39H98l-3-22H85l-3 22H62Z" fill="#3B3442" />
            <circle cx="90" cy="85" r="47" fill={`url(#${id}-body)`} />
            <rect x="54" y="60" width="72" height="55" rx="25" fill="#FFF5C9" />
            <path d="m85 122 9 9-8 9 10 11" fill="none" stroke={variant.accent} strokeWidth="5" strokeLinecap="round" />
          </>
        )}

        <ellipse cx="72" cy="86" rx="5.5" ry="7" fill="#241D34" />
        <ellipse cx="108" cy="86" rx="5.5" ry="7" fill="#241D34" />
        <circle cx="74" cy="83.5" r="1.6" fill="#FFFFFF" />
        <circle cx="110" cy="83.5" r="1.6" fill="#FFFFFF" />
        <path d="M84 104c4 3 8 3 12 0" fill="none" stroke="#6B3D43" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="62" cy="101" rx="6" ry="3" fill="#F18D82" opacity="0.48" />
        <ellipse cx="118" cy="101" rx="6" ry="3" fill="#F18D82" opacity="0.48" />
      </g>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4 8.2 2.5 2.5L12 5.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.6 5.6 3.5 8.5 9 9-5.5.6-8.4 3.5-9 9-.6-5.5-3.5-8.4-9-9 5.5-.5 8.4-3.4 9-9Z" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const [name, setName] = useState("Mimi");
  const [selectedMini, setSelectedMini] = useState(0);
  const [personality, setPersonality] = useState("Sakin");
  const [selectedHabits, setSelectedHabits] = useState(["Kodlama", "Su içmek"]);
  const [learning, setLearning] = useState(true);
  const [created, setCreated] = useState(false);

  const toggleHabit = (habit: string) => {
    setSelectedHabits((current) =>
      current.includes(habit) ? current.filter((item) => item !== habit) : [...current, habit],
    );
  };

  const handleCreate = () => {
    setCreated(true);
    window.setTimeout(() => setCreated(false), 2400);
  };

  return (
    <main className="app-shell">
      <div className="mobile-screen">
        <header className="topbar">
          <button className="icon-button" type="button" aria-label="Geri dön">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div>
            <p className="eyebrow">D-PLAN AI</p>
            <h1>Mini’ni Kişiselleştir</h1>
          </div>
          <span className="header-mark" aria-hidden="true">
            <SparkleIcon />
          </span>
        </header>

        <div className="content">
          <section className="hero" aria-label="Mini önizlemesi">
            <div className="hero-glow" />
            <div className="status-pill">
              <span />
              Kişisel AI yardımcın
            </div>
            <MiniCharacter variant={minis[selectedMini]} />
            <div className="speech-bubble">
              <span className="speech-sparkle"><SparkleIcon /></span>
              <p><strong>Merhaba! Ben {name || "Mini"}.</strong><br />Alışkanlıklarını birlikte takip edelim. 🌱</p>
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <span className="step-number">01</span>
              <div>
                <h2>Mini’nin adı</h2>
                <p>Sana nasıl eşlik etsin?</p>
              </div>
            </div>
            <label className="name-field">
              <span>Mini’nin adı</span>
              <input
                type="text"
                value={name}
                maxLength={18}
                onChange={(event) => setName(event.target.value)}
                placeholder="Bir isim yaz"
              />
              <span className="character-count">{name.length}/18</span>
            </label>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <span className="step-number">02</span>
              <div>
                <h2>Mini’nin görünümünü seç</h2>
                <p>Sana en yakın gelen Mini’yi bul.</p>
              </div>
            </div>
            <div className="mini-options" role="radiogroup" aria-label="Mini görünümü">
              {minis.map((mini) => (
                <button
                  className={`mini-option ${selectedMini === mini.id ? "is-selected" : ""}`}
                  type="button"
                  role="radio"
                  aria-checked={selectedMini === mini.id}
                  aria-label={`${mini.name} görünümünü seç`}
                  onClick={() => setSelectedMini(mini.id)}
                  key={mini.id}
                >
                  <MiniCharacter variant={mini} size="small" />
                  <span className="mini-option-name">{mini.name}</span>
                  {selectedMini === mini.id && <span className="check"><CheckIcon /></span>}
                </button>
              ))}
            </div>
            <div className="selection-note">
              <span><SparkleIcon /></span>
              <p><strong>{minis[selectedMini].name}</strong> sana öneriliyor · {minis[selectedMini].tagline}</p>
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <span className="step-number">03</span>
              <div>
                <h2>Mini nasıl konuşsun?</h2>
                <p>Mesajlarının tonunu seç.</p>
              </div>
            </div>
            <div className="personality-grid" role="radiogroup" aria-label="Mini kişiliği">
              {personalities.map((item) => (
                <button
                  type="button"
                  role="radio"
                  aria-checked={personality === item.label}
                  className={`choice-card ${personality === item.label ? "is-selected" : ""}`}
                  onClick={() => setPersonality(item.label)}
                  key={item.label}
                >
                  <span className="choice-icon">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="choice-check"><CheckIcon /></span>
                </button>
              ))}
            </div>
          </section>

          <section className="form-section">
            <div className="section-heading">
              <span className="step-number">04</span>
              <div>
                <h2>Mini neleri takip etsin?</h2>
                <p>Birden fazla alışkanlık seçebilirsin.</p>
              </div>
            </div>
            <div className="habit-grid">
              {habits.map((habit) => {
                const isSelected = selectedHabits.includes(habit.label);
                return (
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    className={`habit-chip ${isSelected ? "is-selected" : ""}`}
                    onClick={() => toggleHabit(habit.label)}
                    key={habit.label}
                  >
                    <span>{habit.icon}</span>
                    {habit.label}
                    {isSelected && <span className="habit-check"><CheckIcon /></span>}
                  </button>
                );
              })}
            </div>
          </section>

          <section className={`learning-card ${learning ? "is-active" : ""}`}>
            <div className="learning-topline">
              <span className="learning-icon">
                <SparkleIcon />
              </span>
              <div className="learning-copy">
                <h2>Mini seni tanısın</h2>
                <p>Tamamladığın alışkanlıkları ve rutinlerini öğrenerek sana daha kişisel hatırlatmalar gönderebilir.</p>
              </div>
              <button
                className="toggle"
                type="button"
                role="switch"
                aria-checked={learning}
                aria-label="Mini’nin öğrenme özelliği"
                onClick={() => setLearning((current) => !current)}
              >
                <span />
              </button>
            </div>
            {learning && (
              <div className="insight">
                <div className="insight-chart" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div>
                  <p>Son 7 günde kodlamayı çoğunlukla <strong>21.00’de</strong> tamamladın.</p>
                  <span>Bunu hatırlayayım mı?</span>
                </div>
              </div>
            )}
            <p className="privacy-note">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <rect x="3" y="7" width="10" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Verilerin yalnızca deneyimini kişiselleştirmek için kullanılır.
            </p>
          </section>
        </div>

        <footer className="sticky-footer">
          <button className={`create-button ${created ? "is-done" : ""}`} type="button" onClick={handleCreate}>
            {created ? (
              <>
                <span className="button-check"><CheckIcon /></span>
                Mini’n hazır!
              </>
            ) : (
              <>
                Mini’yi oluştur
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="m7.5 5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </footer>
      </div>
    </main>
  );
}
