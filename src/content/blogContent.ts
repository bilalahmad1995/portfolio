// ---------------------------------------------------------------------------
// Blog post content — shared between BlogPage (index) and BlogPostPage
// ---------------------------------------------------------------------------

export interface ContentBlock {
  type: 'lead' | 'h2' | 'p' | 'quote' | 'bullets'
  text?: string
  items?: string[]
}

export interface BlogPost {
  id: number
  slug: string
  category: string
  title: string
  date: string
  readTime: string
  featured: boolean
  excerpt: string
  tags: string[]
  body: ContentBlock[]
}

export const blogPosts: BlogPost[] = [
  // ─── Post 1 ──────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'ai-agents-new-software-paradigm',
    category: 'AI & LLMs',
    title: "AI Agents Are Not a Feature — They're a New Software Paradigm",
    date: 'April 8, 2026',
    readTime: '7 min read',
    featured: true,
    excerpt:
      "We've spent the last 18 months treating AI agents like a clever plugin — tool calls, system prompts, RAG pipelines bolted onto existing apps. But the shift happening right now is more fundamental: the loop itself is changing. Code no longer runs sequentially; it plans, reflects, and iterates. That changes what building software means from the ground up. Every assumption about state, control flow, and error handling is up for rethinking.",
    tags: ['AI Agents', 'LLMs', 'Architecture'],
    body: [
      {
        type: 'lead',
        text: "We've spent the last 18 months treating AI agents like a clever plugin. Tool calls. System prompts. RAG pipelines bolted onto existing apps. They felt like upgrades — smarter autocomplete, faster search, better summaries. But the shift happening right now is more fundamental than any of those things. The loop itself is changing.",
      },
      {
        type: 'h2',
        text: 'The loop is the thing',
      },
      {
        type: 'p',
        text: 'Traditional software is deterministic. You write a function; it takes inputs; it produces outputs; it terminates. Errors are handled, state is managed, and if something breaks, there is a traceable cause. The entire discipline of software engineering — testing, logging, type systems, design patterns — has been built around making this loop predictable and auditable.',
      },
      {
        type: 'p',
        text: "Agents break that contract. An agent doesn't just run — it reasons about what to run next. It calls tools, observes results, revises its plan, and tries again. The loop is no longer a fixed execution path; it's an emergent behavior that depends on the model's interpretation of the current state. That's a categorically different kind of system to build, and the gap between understanding this intellectually and feeling it operationally is significant.",
      },
      {
        type: 'h2',
        text: 'What changes in practice',
      },
      {
        type: 'p',
        text: "When you build an agent, you are no longer the author of the control flow. You're the author of the environment — the tools, the constraints, the context the model reasons within. This shifts the engineering challenge from writing correct code to designing correct affordances. Everything downstream changes: how you handle errors (the model might retry with a different strategy), how you write tests (you're testing probabilistic behavior, not deterministic outputs), and how you monitor production (traces look like conversation logs, not call stacks).",
      },
      {
        type: 'p',
        text: 'The failure modes are different too. Traditional software fails loudly — exceptions, null pointers, failed assertions. Agents fail quietly: they hallucinate a file path, misinterpret an ambiguous instruction, make a plausible-sounding decision that is subtly wrong. Catching this requires a different kind of observability, one that the tooling ecosystem is still building.',
      },
      {
        type: 'quote',
        text: "You are no longer the author of the control flow. You're the author of the environment.",
      },
      {
        type: 'h2',
        text: 'The reliability gap',
      },
      {
        type: 'p',
        text: 'This is the central tension with agentic systems right now. The demos are impressive — multi-step research, autonomous code generation, complex workflow orchestration. But the gap between "works in a demo" and "works reliably in production" is larger for agents than for almost any software category I have built in.',
      },
      {
        type: 'p',
        text: "The reason is compounding error. In a ten-step pipeline, even if each step is 95% reliable, the overall pipeline completes successfully roughly 60% of the time. Scale that to 20 steps and you're at 36%. The practical implication is that agentic systems need fault tolerance, explicit checkpointing, and human-in-the-loop review at a level that deterministic software never required.",
      },
      {
        type: 'bullets',
        items: [
          'Design agents with explicit checkpoints between major decision steps',
          'Log every tool call and model response — treat traces as first-class engineering artifacts',
          'Build evaluation harnesses before scaling any agent pipeline',
          'Default to narrower agent scope until reliability is proven at each stage',
          'Treat "good enough in demo" as a starting point, not a shipping criterion',
        ],
      },
      {
        type: 'h2',
        text: 'What this means for the next decade',
      },
      {
        type: 'p',
        text: "None of this is an argument against agents. It's an argument for taking them seriously as a genuinely new engineering discipline with its own principles, failure modes, and design patterns. The teams that treat agents as a feature will build fragile demos. The teams that treat them as a paradigm will build systems that actually change how work gets done — reliably, at scale, in production.",
      },
      {
        type: 'p',
        text: "The applications that matter won't be apps that use AI as a component. They'll be apps that are agents — designed from the ground up for a world where control flow is emergent, failure modes are subtle, and the interface to the system is language rather than code. That's a different kind of engineering. We are genuinely early in figuring out what it looks like.",
      },
    ],
  },

  // ─── Post 2 ──────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: 'modern-data-stack-maturing',
    category: 'Data Engineering',
    title: "The Modern Data Stack Is Maturing — Here's What That Actually Means",
    date: 'March 21, 2026',
    readTime: '5 min read',
    featured: false,
    excerpt:
      "dbt, Snowflake, and the composable warehouse model aren't new anymore — they're the default. What's changing is how teams think about data contracts, semantic layers, and the increasingly blurred line between engineering and analytics. The teams winning right now aren't the ones with the best tooling. They're the ones who've made data trustworthy enough that it actually changes decisions at the pace decisions get made.",
    tags: ['dbt', 'Snowflake', 'Data Stack'],
    body: [
      {
        type: 'lead',
        text: "Three years ago, telling your team you were adopting dbt and Snowflake felt like a decision. Today it barely registers — it's table stakes. The modern data stack has crossed the chasm from early-adopter territory into default infrastructure, and that maturity is changing what the interesting problems actually are.",
      },
      {
        type: 'h2',
        text: "What 'maturing' actually looks like",
      },
      {
        type: 'p',
        text: "Maturity in a software category doesn't mean the problems are solved. It means the easy problems are solved and the hard ones are now visible. In the early days of the modern data stack, the hard problem was getting the tooling to work at all — orchestrating Fivetran, dbt, and Snowflake into something coherent took real effort. That effort is now largely abstracted away.",
      },
      {
        type: 'p',
        text: "The problems that surface next are harder because they're organizational, not technical. How do you enforce data quality across a growing transformation layer? Who owns the definition of 'active user'? When two dashboards show different numbers, which one is right, and how does someone with no data background figure that out? These questions don't have tooling answers. They have design answers.",
      },
      {
        type: 'h2',
        text: 'The semantic layer is the new battleground',
      },
      {
        type: 'p',
        text: "The biggest shift I see in mature data teams is the increasing importance of the semantic layer — the layer that sits between raw SQL transformations and the business user. MetricFlow, dbt Semantic Layer, Cube — these tools exist because the transformation layer alone doesn't answer the question of what a number means and whether it is consistent everywhere it appears.",
      },
      {
        type: 'p',
        text: 'A metric defined once, governed centrally, and consumed consistently across BI tools, data apps, and APIs is worth far more than five slightly different definitions of the same concept scattered across five dbt models. The teams that have internalized this are building semantic layers with the same rigor they once applied to their transformation models.',
      },
      {
        type: 'quote',
        text: 'The teams winning right now are not the ones with the best tooling. They are the ones who made data trustworthy enough to change decisions.',
      },
      {
        type: 'h2',
        text: 'Data contracts and the trust problem',
      },
      {
        type: 'p',
        text: "Data contracts — formal agreements between data producers and consumers about schema, freshness, and quality guarantees — are the most interesting emerging practice I've seen in the last year. The idea is simple: if a source system team changes a column name without notice, your pipeline breaks silently, your dashboard shows stale numbers, and nobody knows why. A contract makes that change visible before it propagates.",
      },
      {
        type: 'p',
        text: "The tooling is still early — dbt contracts, Soda, Great Expectations — but the concept is sound and the problem it solves is real. The root cause of most data quality incidents I've worked on isn't a transformation bug. It's an upstream schema change that nobody communicated downstream.",
      },
      {
        type: 'bullets',
        items: [
          'Start defining metrics in a semantic layer before your dashboard count exceeds ten',
          'Treat source freshness tests as load-bearing infrastructure, not optional monitoring',
          'Establish data contracts at high-traffic interfaces between systems early',
          'Measure data quality the same way you measure service uptime — with SLAs',
        ],
      },
      {
        type: 'h2',
        text: 'The engineering/analytics boundary is dissolving',
      },
      {
        type: 'p',
        text: "One of the more interesting side effects of stack maturity is that the traditional distinction between 'data engineer' and 'analytics engineer' is becoming less meaningful. dbt brought software engineering practices — version control, testing, documentation, modularity — into the analytics layer. The result is that people who understand both the data and the domain are more valuable than specialists in either.",
      },
      {
        type: 'p',
        text: "The modern data stack didn't just standardize tooling. It created a new kind of practitioner — someone who can own a data product end-to-end, from ingestion to insight. That's the role worth building toward, and the teams structured around it are consistently outperforming the ones still organized around the old data engineer / analyst divide.",
      },
    ],
  },

  // ─── Post 3 ──────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: 'transformers-time-series',
    category: 'Machine Learning',
    title: 'Attention in the Wild: Transformers Applied to Time-Series Forecasting',
    date: 'February 14, 2026',
    readTime: '6 min read',
    featured: false,
    excerpt:
      "Transformers were designed for language — sequential token prediction with learned attention patterns. But the same mechanism that connects distant semantic dependencies works surprisingly well for multi-variate temporal data. Here's what actually transfers from NLP to forecasting, what the common failure modes look like in practice, and why the architecture is rarely the bottleneck.",
    tags: ['Transformers', 'Forecasting', 'ML'],
    body: [
      {
        type: 'lead',
        text: "The attention mechanism was designed to solve a specific problem in NLP: letting a model relate words that are far apart in a sequence without the information degrading as it passes through recurrent layers. It turned out to solve a lot of other problems too. Applied to time-series forecasting, attention-based models have produced some of the most interesting results in applied ML over the last two years — and some of the most instructive failures.",
      },
      {
        type: 'h2',
        text: 'What actually transfers from NLP',
      },
      {
        type: 'p',
        text: "The core insight that transfers is this: attention lets a model weight different positions in the input sequence differently depending on the current position being predicted. For language, this means a pronoun can attend to the noun it refers to five sentences earlier. For time-series, this means a forecast at timestep T can attend to anomalous patterns from 90 days ago — patterns that a windowed model would have discarded as out-of-scope.",
      },
      {
        type: 'p',
        text: 'Multi-variate attention also transfers well. Just as a token can attend to other tokens in a sentence, a sensor reading at time T can attend to correlated readings from other sensors — even when those correlations are non-linear and change over time. This is where transformers outperform traditional methods most clearly: when the forecast depends on complex cross-variable dependencies that are hard to hand-engineer.',
      },
      {
        type: 'h2',
        text: "What doesn't transfer — and why it matters",
      },
      {
        type: 'p',
        text: "Positional encodings are the first thing to revisit. In NLP, position is largely about word order — a property that's consistent across training data. In time-series, position carries additional semantic meaning: seasonality, trend, calendar effects. Standard sinusoidal encodings often miss these. Learnable temporal embeddings or explicit time-feature encoding (hour of day, day of week, month) consistently improve performance in my experiments.",
      },
      {
        type: 'p',
        text: "The other thing that doesn't transfer cleanly is the assumption that the sequence length is manageable. Transformers have O(n²) attention complexity. For NLP, sequences of 512-2048 tokens are standard. For time-series with hourly granularity over two years, you're looking at 17,000+ timesteps. Sparse attention mechanisms (PatchTST, Informer, Autoformer) exist for exactly this reason, but they each involve different trade-offs in terms of what temporal patterns they preserve.",
      },
      {
        type: 'quote',
        text: "The architecture is rarely the bottleneck in time-series forecasting. The data representation is.",
      },
      {
        type: 'h2',
        text: 'Common failure modes in practice',
      },
      {
        type: 'p',
        text: "The most frequent failure mode I've seen is over-relying on the model's capacity to learn things that should be explicitly engineered. Seasonality is the canonical example: if your data has strong weekly and annual cycles, telling the model this explicitly (through time features or decomposition) is almost always better than hoping the attention weights discover it. Transformers are not magic; they need the right inductive biases.",
      },
      {
        type: 'bullets',
        items: [
          'Always include explicit time features (hour, day, month, is-holiday) before tuning architecture',
          'Evaluate against a simple statistical baseline (ARIMA, ETS) before claiming transformer wins',
          'Use PatchTST or iTransformer for long-horizon tasks; standard transformers degrade at long ranges',
          'Normalize per-series, not globally — time-series distributions vary dramatically across series',
          "Don't treat attention weights as interpretable without careful validation",
        ],
      },
      {
        type: 'h2',
        text: 'Where transformers genuinely win',
      },
      {
        type: 'p',
        text: "Transformers produce their clearest wins in three scenarios: long look-back windows with complex periodic dependencies, multi-variate settings where cross-series attention captures real dynamics, and transfer learning across many series with shared structure. In my thesis work applying patch-based transformers to industrial sensor data, the gains over LSTM-based models were most pronounced when the forecast horizon exceeded 48 hours and the dataset included multiple correlated sensor streams.",
      },
      {
        type: 'p',
        text: "The honest summary: transformers are a powerful tool in the time-series toolkit, not a universal upgrade. The gains are real and sometimes substantial. But the architecture alone rarely explains them. The gains almost always trace back to better data representation, carefully engineered features, and the right inductive biases baked in explicitly — with the transformer's capacity leveraged on top of that foundation, not instead of it.",
      },
    ],
  },

  // ─── Post 4 ──────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: 'why-analytics-dont-change-decisions',
    category: 'Analytics & BI',
    title: "Why Most Analytics Projects Don't Actually Change Decisions",
    date: 'January 30, 2026',
    readTime: '4 min read',
    featured: false,
    excerpt:
      "You build the dashboard. It looks great. Stakeholders nod. Six months later, the same decisions are made the same way they always were. This isn't a tooling problem — it's a design problem. It starts with asking the wrong first question. Before asking 'what should we track?' the right question is 'what would change if we knew this?' That single reframe changes everything about how you build.",
    tags: ['Analytics', 'BI', 'Decision-Making'],
    body: [
      {
        type: 'lead',
        text: "You build the dashboard. You spend two weeks on the data model, get the numbers right, make it look clean. Stakeholders attend the handoff meeting, ask a few good questions, and say it looks great. Six months later, you check in. The same decisions are being made. The same way. As if the dashboard doesn't exist.",
      },
      {
        type: 'p',
        text: "This is not a rare outcome. It is the default outcome for analytics projects that start with the wrong question. And the wrong question, asked earnestly and repeatedly across hundreds of data teams, is: what should we track?",
      },
      {
        type: 'h2',
        text: 'The wrong first question',
      },
      {
        type: 'p',
        text: "\"What should we track?\" feels like a reasonable starting point because it's data-centric, and you're on the data team. But it produces dashboards optimized for completeness rather than action. It generates metrics that are interesting rather than decision-relevant. And it creates an implicit assumption that insight is self-evidently useful — that if you show people the right numbers, the right behavior will follow.",
      },
      {
        type: 'p',
        text: "The right first question is: what would change if we knew this? Ask it of every metric before you build it. If the honest answer is 'nothing, but it's good to know,' that metric belongs in an exploratory notebook, not a production dashboard. If the answer is 'we would reallocate budget,' or 'we would escalate this,' or 'we would change the threshold on that process' — that's a metric worth building.",
      },
      {
        type: 'quote',
        text: "Before asking what to track, ask: what would change if we knew this? If the answer is 'nothing,' it doesn't belong in a dashboard.",
      },
      {
        type: 'h2',
        text: 'Decision archaeology',
      },
      {
        type: 'p',
        text: "The most useful thing I've done when starting an analytics engagement is what I call decision archaeology: mapping the decisions that actually get made in an organization, at what cadence, by whom, and with what information they currently use. This reveals two things almost immediately: where decisions are being made with no data at all (obvious opportunity), and where decisions are nominally 'data-driven' but the data is proxied, outdated, or not actually driving anything.",
      },
      {
        type: 'p',
        text: "The second category is more common and more interesting. Teams frequently have dashboards that look active but are not decision-relevant. The metric is tracked, the chart is in the meeting, but nobody has a clear protocol for what they do when it moves. Without a decision protocol attached to a metric, you have a number, not an insight.",
      },
      {
        type: 'h2',
        text: 'What good analytics design looks like',
      },
      {
        type: 'p',
        text: "Good analytics design starts with the decision, not the data. It works backward from 'what action needs to be taken?' to 'what metric would trigger that action?' to 'what data do we need to compute that metric?' This sounds obvious when stated directly. In practice, most projects run the process in the opposite direction: here is the data we have, what can we learn from it?",
      },
      {
        type: 'bullets',
        items: [
          'For every metric, document the decision it informs and who makes it',
          'Define thresholds and escalation paths at build time, not after launch',
          'Prefer fewer, decision-relevant metrics over comprehensive coverage',
          'Build in a review at 60 days: is this dashboard changing any behavior?',
          'Treat unused dashboards as technical debt — they signal a design failure worth understanding',
        ],
      },
      {
        type: 'h2',
        text: 'The insight is not enough',
      },
      {
        type: 'p',
        text: "Data teams often operate under an implicit theory of change: if we surface the insight, the organization will act on it. This is occasionally true and usually optimistic. Insights have to compete for attention with habit, political incentives, cognitive load, and the organizational friction of actually changing behavior. A dashboard that surfaces an insight does not automatically reduce that friction.",
      },
      {
        type: 'p',
        text: "The data teams that consistently change decisions don't just build better dashboards. They sit closer to the decision-making process, understand the constraints the decision-maker operates within, and design their outputs around those constraints. The insight and the action are one thought, not two. That's a harder design problem than getting the numbers right — and it's the one that actually matters.",
      },
    ],
  },
]

// Category colour config — shared across both pages
export const categoryConfig: Record<string, { bg: string; color: string }> = {
  'AI & LLMs':        { bg: 'rgba(14, 143, 131, 0.12)', color: '#0e8f83' },
  'Data Engineering': { bg: 'rgba(231, 167, 94, 0.18)',  color: '#a8620e' },
  'Machine Learning': { bg: 'rgba(108, 88, 200, 0.12)',  color: '#6c58c8' },
  'Analytics & BI':   { bg: 'rgba(52, 115, 185, 0.12)',  color: '#2860a8' },
}
