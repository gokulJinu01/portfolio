import React, { useEffect } from "react";
import "../styles/MmeCaseStudy.css";

const MmeCaseStudy = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "MME — Case Study · Gokul Jinu";
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="cs-page">
      {/* ============================ CHROME ============================ */}
      <header className="cs-chrome">
        <div className="cs-wrap cs-chrome-row">
          <div className="cs-chrome-l">
            <a className="cs-back" href="/">← BACK</a>
          </div>
          <div className="cs-chrome-r">
            <span className="cs-id">CASE&nbsp;STUDY / 01 — MME</span>
            <span className="cs-status">
              <span className="cs-dot" />OPEN BETA · v0.1.1
            </span>
          </div>
        </div>
      </header>

      {/* ============================ HERO ============================ */}
      <section className="cs-hero">
        <div className="cs-wrap">
          <div className="cs-hero-meta">
            <span>MEMORY ENGINE</span>
            <span>RAILTECH</span>
            <span>2026-04-26 → 2026-05-01</span>
            <span>SOLO BUILD</span>
          </div>

          <h1 className="cs-h1">
            Tag-graph memory<br />for agents that <em>cannot fabricate.</em>
          </h1>

          <p className="cs-hero-lead">
            A retrieval architecture for legal, medical, and financial AI —
            raw-turn preservation, abstain-by-default, and a per-result audit trail
            vector-cosine systems structurally cannot match.
          </p>

          <div className="cs-dossier">
            <div className="cs-dossier-cell">
              <div className="cs-dossier-k">CLIENT</div>
              <div className="cs-dossier-v">Railtech</div>
            </div>
            <div className="cs-dossier-cell">
              <div className="cs-dossier-k">ROLE</div>
              <div className="cs-dossier-v">Architect &amp; sole engineer</div>
            </div>
            <div className="cs-dossier-cell">
              <div className="cs-dossier-k">SCOPE</div>
              <div className="cs-dossier-v">Memory layer · benchmark harness · SDK</div>
            </div>
            <div className="cs-dossier-cell">
              <div className="cs-dossier-k">SHIPPED</div>
              <div className="cs-dossier-v cs-mono-v">railtech-mme 0.1.1 · PyPI</div>
            </div>
          </div>

          <div className="cs-hero-cta">
            <a className="cs-btn" href="https://mme.railtech.io/" target="_blank" rel="noreferrer">
              VISIT MME.RAILTECH.IO <span className="cs-arr">↗</span>
            </a>
            <a className="cs-btn cs-ghost" href="https://pypi.org/project/railtech-mme/" target="_blank" rel="noreferrer">
              PYPI <span className="cs-arr">↗</span>
            </a>
            <a className="cs-btn cs-ghost" href="https://github.com/gokulJinu01/railtech-mme-python" target="_blank" rel="noreferrer">
              GITHUB <span className="cs-arr">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================ METRICS ============================ */}
      <section className="cs-metrics">
        <div className="cs-wrap">
          <div className="cs-metrics-grid">
            <div className="cs-metric">
              <div className="cs-metric-k"><span>FIDELITY</span><span className="cs-metric-num">/01</span></div>
              <div className="cs-metric-v cs-pos">+10.85<span className="cs-unit">pp</span></div>
              <div className="cs-metric-sub">vs Mem0, p&lt;0.001<br />FPT v1.2 · n=470</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-k"><span>ABSTENTION</span><span className="cs-metric-num">/02</span></div>
              <div className="cs-metric-v cs-pos">100<span className="cs-unit">%</span></div>
              <div className="cs-metric-sub">LongMemEval-S · n=30<br />verified tagmaker</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-k"><span>AUDIT TRAIL</span><span className="cs-metric-num">/03</span></div>
              <div className="cs-metric-v cs-pos">+55<span className="cs-unit">%</span></div>
              <div className="cs-metric-sub">vs Mem0 · gpt-4o judge<br />ATF v1 · n=30</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-k"><span>TOKENS</span><span className="cs-metric-num">/04</span></div>
              <div className="cs-metric-v cs-pos">−11<span className="cs-unit">%</span></div>
              <div className="cs-metric-sub">316 vs 356 mean<br />same harness · n=470</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STORY ============================ */}
      <section className="cs-story">
        <div className="cs-wrap">
          <div className="cs-story-h">
            <span className="cs-eyebrow">/ OVERVIEW</span>
            <h2 className="cs-h2">
              A memory layer judged by what it <em>won't</em> say.
            </h2>
          </div>

          <div className="cs-story-row">
            <div className="cs-story-row-k">/01<strong>PROBLEM</strong></div>
            <p>
              AI agents for regulated work — legal, medical, financial —
              can't afford to fabricate, and their retrievals must be
              auditable. Vector memory layers extract and summarise
              (lossy), and expose a single cosine number (opaque). For
              this vertical, both are <em>unacceptable</em>.
            </p>
          </div>

          <div className="cs-story-row">
            <div className="cs-story-row-k">/02<strong>APPROACH</strong></div>
            <p>
              Tag-graph memory with raw-turn preservation. IDF + abstain
              threshold filters low-confidence items rather than always
              returning top-k. Per-item activation scores in every
              retrieval trace — every result explainable, every refusal
              intentional.
            </p>
          </div>

          <div className="cs-story-row">
            <div className="cs-story-row-k">/03<strong>MEASUREMENT</strong></div>
            <p>
              Two benchmark suites. Industrial (DMR, LongMemEval-S
              Abstention, Memory-per-Dollar) to compare against citable
              standards. Wedge (FPT, CSR, ATF) to measure the
              architectural axes directly. Pre-registered predictions,
              statistical significance reported, failures published.
            </p>
          </div>

          <div className="cs-story-row">
            <div className="cs-story-row-k">/04<strong>HONEST LOSSES</strong></div>
            <p>
              On DMR (raw recall on casual chat), MME scores 55.6% —
              below Zep's published 94–98%. On Cold-Start Recall at small
              N, MME loses to Mem0 because it abstains rather than
              fabricate. <em>Same threshold that wins fidelity loses
              coverage.</em> Reported, not hidden.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ FAILURE COMPARISON ============================ */}
      <section className="cs-compare">
        <div className="cs-wrap">
          <div className="cs-compare-h">
            <span className="cs-eyebrow">/ FAILURE MODE</span>
            <h2 className="cs-h2 cs-h2-tight">
              Why fidelity matters: a single record, two architectures.
            </h2>
            <p className="cs-compare-lead">
              From a real DMR record. The agent had been told the user's
              favourite artist mid-conversation. Asked back later about it:
            </p>
          </div>

          <div className="cs-compare-grid">
            <div className="cs-card cs-card-warn">
              <div className="cs-card-k">
                <span>MEM0 — LLM EXTRACTION</span>
                <span className="cs-card-tag">LOSSY</span>
              </div>
              <div className="cs-card-q-k">STORED</div>
              <blockquote className="cs-card-quote">"User likes country music."</blockquote>
              <div className="cs-card-foot">
                Specificity <strong>lost</strong>. Gold answer not recoverable
                from this summary at any future retrieval.
              </div>
            </div>

            <div className="cs-card cs-card-good">
              <div className="cs-card-k">
                <span>MME — RAW-TURN PRESERVATION</span>
                <span className="cs-card-tag">VERBATIM</span>
              </div>
              <div className="cs-card-q-k">STORED</div>
              <blockquote className="cs-card-quote">
                "I love country music. Taylor Swift gets to me sometimes."
              </blockquote>
              <div className="cs-card-foot">
                Specificity <strong>preserved</strong>. Correct answer
                surfaced; tag-graph indexes on entities, not summaries.
              </div>
            </div>
          </div>

          <p className="cs-compare-note">
            GOLD ANSWER — "Taylor Swift!" &nbsp;·&nbsp; Same conversation, same model-under-test, two memory architectures.
          </p>
        </div>
      </section>

      {/* ============================ RETRIEVAL TRACE ============================ */}
      <section className="cs-trace">
        <div className="cs-wrap">
          <div className="cs-compare-h">
            <span className="cs-eyebrow">/ RETRIEVAL TRACE</span>
            <h2 className="cs-h2 cs-h2-tight">
              The architectural moat: explainable retrieval.
            </h2>
            <p className="cs-compare-lead">
              Both systems asked the same regulated-content query. What
              each returns alongside the result is what a developer — or a
              compliance auditor — must inspect to debug a wrong retrieval.
            </p>
          </div>

          <div className="cs-trace-grid">
            <div className="cs-trace-col cs-trace-mme">
              <div className="cs-trace-h">
                <div className="cs-trace-h-k">MME · TAG-GRAPH</div>
                <span className="cs-trace-h-tag">EXPLAINABLE</span>
              </div>
              <pre className="cs-trace-block">
<span className="cs-hl-com"># Total items returned: 8 · tokens: 596</span>{"\n\n"}
<span className="cs-hl-key">Item 1:</span>{"\n"}
{"  excerpt:  \"User wants to discuss financial\n"}
{"             implications of a settlement proposal...\"\n"}
{"  score:    0.502\n"}
{"  raw.tags: ["}<span className="cs-hl-tag">settlement_proposal</span>{", "}<span className="cs-hl-tag">settlement</span>{",\n"}
{"             "}<span className="cs-hl-tag">$4,800,000</span>{", "}<span className="cs-hl-tag">legal_agreement</span>{",\n"}
{"             "}<span className="cs-hl-tag">monetary_amount</span>{", ...]\n"}
{"  raw.score_activation: 0.244\n\n"}
<span className="cs-hl-key">Item 2:</span>{"\n"}
{"  raw.tags: ["}<span className="cs-hl-tag">evaluation</span>{", "}<span className="cs-hl-tag">cost_analysis</span>{",\n"}
{"             "}<span className="cs-hl-tag">risk_assessment</span>{", ...]\n"}
{"  raw.score_activation: 0.234\n\n"}
<span className="cs-hl-com">[ ... 6 more items with full breakdown ... ]</span>
              </pre>
              <div className="cs-trace-foot">
                Auditor can answer: <em>why surfaced</em>, <em>why ranked
                above another item</em>, <em>whether the right specific
                exists in the corpus</em>.
              </div>
            </div>

            <div className="cs-trace-col cs-trace-mem">
              <div className="cs-trace-h">
                <div className="cs-trace-h-k">MEM0 · VECTOR COSINE</div>
                <span className="cs-trace-h-tag">OPAQUE</span>
              </div>
              <pre className="cs-trace-block">
<span className="cs-hl-com"># Total items returned: 1 · tokens: 712</span>{"\n\n"}
<span className="cs-hl-key">Item 1:</span>{"\n"}
{"  excerpt:  \"User loves hiking with their\n"}
{"             black Labrador named Trooper...\"\n"}
{"  score:           "}<span className="cs-hl-num">1.0</span>{"\n"}
{"  raw.score:       "}<span className="cs-hl-num">1.0</span>{"\n"}
{"  raw.user_id:     ...\n"}
{"  raw.metadata:    "}<span className="cs-hl-num">None</span>{"\n\n"}
<span className="cs-hl-com"># No further explanation available.</span>{"\n"}
<span className="cs-hl-com"># The algorithm computes a single number.</span>
              </pre>
              <div className="cs-trace-foot">
                Auditor can answer: <em>cosine = 1.0.</em> That's it. No
                semantic explanation — the algorithm only computes one
                number.
              </div>
            </div>
          </div>

          <p className="cs-trace-note">
            ATF JUDGE (gpt-4o, n=30, 3 axes) &nbsp;—&nbsp; MME 3.81/5 vs Mem0 2.46/5.
            Vector-only systems structurally cannot match without re-architecting.
          </p>
        </div>
      </section>

      {/* ============================ USAGE ============================ */}
      <section className="cs-usage">
        <div className="cs-wrap">
          <div className="cs-story-h">
            <span className="cs-eyebrow">/ USAGE</span>
            <h2 className="cs-h2">Five lines to a regulated-grade memory.</h2>
          </div>

          <div className="cs-usage-row">
            <div>
              <p className="cs-usage-lead">
                Published Python SDK · 0.1.1 on PyPI · open beta. Drops into
                any LangChain or MCP-aware agent.
              </p>
              <ul className="cs-usage-meta">
                <li>Async client</li>
                <li>LangChain adapter</li>
                <li>Native MCP server (Claude &amp; Cursor)</li>
                <li>Hosted endpoint · self-host via Docker compose</li>
              </ul>
            </div>

            <div>
              <div className="cs-code-h">
                <span>railtech_mme · quickstart.py</span>
                <span>python 3.11+</span>
              </div>
              <pre className="cs-code">
<span className="cs-cc">$</span>{" pip install railtech-mme\n\n"}
<span className="cs-ck">from</span>{" railtech_mme "}<span className="cs-ck">import</span>{" MME\n\n"}
{"mme = "}<span className="cs-cf">MME</span>{"(api_key="}<span className="cs-cs">"mme_live_..."</span>{")\n"}
{"mme."}<span className="cs-cf">save</span>{"("}<span className="cs-cs">"Settlement amount is $4,800,000."</span>{")\n\n"}
{"pack = mme."}<span className="cs-cf">inject</span>{"("}<span className="cs-cs">"What's the settlement we discussed?"</span>{")\n"}
<span className="cs-cf">print</span>{"(pack.items[0].excerpt)\n"}
<span className="cs-cc"># → "Settlement amount is $4,800,000."</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ RESULTS ============================ */}
      <section className="cs-results">
        <div className="cs-wrap">
          <div className="cs-story-h">
            <span className="cs-eyebrow">/ RESULTS</span>
            <h2 className="cs-h2">Wins reported with confidence intervals. Losses reported at all.</h2>
          </div>

          <div className="cs-results-sub-h">
            <span className="cs-eyebrow">↳ WINS</span>
            <span className="cs-results-meta">4 OF 4 PRE-REGISTERED</span>
          </div>
          <table className="cs-tbl">
            <thead>
              <tr>
                <th>BENCHMARK</th>
                <th>WHAT IT MEASURES</th>
                <th className="cs-th-r">RESULT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cs-col-k">FPT v1.2</td>
                <td className="cs-col-t">Fidelity preservation on regulated content</td>
                <td className="cs-col-v">77.7% vs 66.8% &nbsp;·&nbsp; +10.85pp &nbsp;·&nbsp; p&lt;0.001</td>
              </tr>
              <tr>
                <td className="cs-col-k">ATF v1</td>
                <td className="cs-col-t">Audit-trail fidelity (LLM judge, 3 axes)</td>
                <td className="cs-col-v">3.81 vs 2.46 &nbsp;·&nbsp; +55% &nbsp;·&nbsp; n=30</td>
              </tr>
              <tr>
                <td className="cs-col-k">LongMemEval-S</td>
                <td className="cs-col-t">Hallucination refusal under missing info</td>
                <td className="cs-col-v">30 / 30 &nbsp;·&nbsp; 95% CI ≥ 88%</td>
              </tr>
              <tr>
                <td className="cs-col-k">Token cost</td>
                <td className="cs-col-t">Mean model-input tokens, same harness</td>
                <td className="cs-col-v">316 vs 356 &nbsp;·&nbsp; −11%</td>
              </tr>
            </tbody>
          </table>

          <div className="cs-results-sub-h">
            <span className="cs-eyebrow">↳ HONEST LOSSES</span>
            <span className="cs-results-meta">3 PUBLISHED FAILURES</span>
          </div>
          <table className="cs-tbl cs-tbl-losses">
            <thead>
              <tr>
                <th>BENCHMARK</th>
                <th>WHAT HAPPENED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cs-col-k">DMR (n=500)</td>
                <td className="cs-col-t">55.6% — below Zep 94–98% (different harness, different model-under-test).</td>
              </tr>
              <tr>
                <td className="cs-col-k">CSR at N ≤ 8</td>
                <td className="cs-col-t">5–30% vs Mem0 35–45% — threshold filters too aggressively at low corpus.</td>
              </tr>
              <tr>
                <td className="cs-col-k">MPD bounded-variance thesis</td>
                <td className="cs-col-t">Falsified at n=8 — all three systems tightly bounded. Hypothesis wrong.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================ STACK ============================ */}
      <section className="cs-stack">
        <div className="cs-wrap">
          <div className="cs-story-h">
            <span className="cs-eyebrow">/ STACK</span>
            <h2 className="cs-h2">Six pieces, no exotic dependencies.</h2>
          </div>
          <div className="cs-stack-grid">
            <div className="cs-stack-cell">
              <span className="cs-stack-num">/01</span>
              <span className="cs-stack-name">Go</span>
              <span className="cs-stack-cat">tagging service</span>
            </div>
            <div className="cs-stack-cell">
              <span className="cs-stack-num">/02</span>
              <span className="cs-stack-name">Python · FastAPI</span>
              <span className="cs-stack-cat">orchestration</span>
            </div>
            <div className="cs-stack-cell">
              <span className="cs-stack-num">/03</span>
              <span className="cs-stack-name">MongoDB + pgvector</span>
              <span className="cs-stack-cat">hybrid store</span>
            </div>
            <div className="cs-stack-cell">
              <span className="cs-stack-num">/04</span>
              <span className="cs-stack-name">Docker · Traefik</span>
              <span className="cs-stack-cat">infrastructure</span>
            </div>
            <div className="cs-stack-cell">
              <span className="cs-stack-num">/05</span>
              <span className="cs-stack-name">MCP server</span>
              <span className="cs-stack-cat">integration</span>
            </div>
            <div className="cs-stack-cell">
              <span className="cs-stack-num">/06</span>
              <span className="cs-stack-name">PyPI: railtech-mme</span>
              <span className="cs-stack-cat">distribution</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="cs-foot">
        <div className="cs-wrap">
          <div className="cs-foot-grid">
            <div>
              <span className="cs-eyebrow">/ COLOPHON</span>
              <h3 className="cs-foot-h">Built solo. Measured publicly.</h3>
              <p>
                Run dates 2026-04-26 → 2026-05-01 &nbsp;·&nbsp;
                ~$91 in API credits &nbsp;·&nbsp;
                Pre-registered predictions &nbsp;·&nbsp;
                Reproducible harness &nbsp;·&nbsp;
                Cross-family judging (Anthropic MUT, OpenAI judge)
              </p>
            </div>
            <div className="cs-foot-cta">
              <a className="cs-btn cs-ghost" href="/">← BACK TO PORTFOLIO</a>
              <a className="cs-btn" href="/#contact">GET IN TOUCH →</a>
            </div>
          </div>

          <div className="cs-stamp">
            <span>GOKUL JINU · CASE STUDY 01 · MME</span>
            <span>© 2026 · LAST UPDATED 2026-05-22</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MmeCaseStudy;
