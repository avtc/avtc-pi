# avtc-pi

An extension suite — deterministic feature development, subagent delegation, working-memory, behavioral learning, parallel-work guardrails, durable decisions, notifications, and more.

This is a **bundle package with no logic of its own**. Installing it brings the entire suite in one step: its `pi.extensions` lists every avtc-pi extension, and each loads (guarded against double-registration via its own idempotency flag) so the bundle coexists safely with any extensions you also installed standalone.

## What's in the suite

| Extension | What it does |
|---|---|
| [avtc-pi-feature-flow](https://github.com/avtc/avtc-pi-feature-flow) | Predictable, deterministic feature development — deep upfront design, configurable review and verification rigor, and auto-agents draining a backlog |
| [avtc-pi-subagent](https://github.com/avtc/avtc-pi-subagent) | A subagent tool supporting context compaction and nested subagents — user-customizable models (with round-robin) and tool policies |
| [avtc-pi-todo](https://github.com/avtc/avtc-pi-todo) | A working-memory plan the agent manages — breaks multi-stage work into items when needed |
| [avtc-pi-portrait](https://github.com/avtc/avtc-pi-portrait) | Builds a behavioral portrait from your session history — learns your corrections and injects them into the system prompt |
| [avtc-pi-parallel-work-guardrail](https://github.com/avtc/avtc-pi-parallel-work-guardrail) | Lets you block or approve agent-called git operations that disrupt parallel work |
| [avtc-pi-user-decisions](https://github.com/avtc/avtc-pi-user-decisions) | Captures user decisions and re-injects them into the system prompt after compaction and into subagents |
| [avtc-pi-settings-ui](https://github.com/avtc/avtc-pi-settings-ui) | A schema-driven settings UI — define your settings, get a tabbed modal, a `/<name>:settings` command, and layered persistence |
| [avtc-pi-ui-components](https://github.com/avtc/avtc-pi-ui-components) | A dialog coordinator preventing dialogs from rendering over each other, plus a select-with-note component |
| [avtc-pi-subagent-ui-bridge](https://github.com/avtc/avtc-pi-subagent-ui-bridge) | Lets extensions' dialogs from nested subagents render in the root session |
| [avtc-pi-unstuck](https://github.com/avtc/avtc-pi-unstuck) | Auto-continue on empty model responses + configurable timeouts for bash and search tools |
| [avtc-pi-zai-continue](https://github.com/avtc/avtc-pi-zai-continue) | Auto-continue after Z.ai usage-limit resets, with a live countdown and retry suppression |
| [avtc-pi-ask-user-question](https://github.com/avtc/avtc-pi-ask-user-question) | A question tool for the agent — single/multi-select or free-text, with subagent forwarding and attention alerts |
| [avtc-pi-notification](https://github.com/avtc/avtc-pi-notification) | Bell and Telegram notifications on agent completion, errors, or attention needed — only fires when you're away |
| [avtc-pi-logger](https://github.com/avtc/avtc-pi-logger) | File-based logging library for pi extensions — date-partitioned with rotation |

## Installation

```bash
pi install git:github.com/avtc/avtc-pi
```

This installs the whole suite. Each extension can also be installed individually (`pi install npm:avtc-pi-feature-flow`, etc.) if you only want part of it.

## Configuration

Each extension has its own settings, edited via its own `/<name>:settings` command (e.g. `/ff:settings`, `/todo:settings`). See each extension's repo for its configuration reference.

> Developed with [Z.ai](https://z.ai/subscribe?ic=N5IV4LLOOV) — get 10% off your subscription via this referral link.

## License

MIT
