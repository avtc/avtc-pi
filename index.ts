// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2026 avtc <tarasenkov@gmail.com>

/**
 * avtc-pi — the avtc-pi extension suite bundle.
 *
 * This package has no logic of its own. It exists so a single
 * `pi install avtc-pi` brings the whole suite: its `pi.extensions` lists every
 * avtc-pi extension, and each is loaded (and guarded against double-registration
 * via its own globalThis idempotency flag) when the umbrella is installed.
 *
 * Install individual extensions instead if you only want part of the suite.
 */

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function avtcPiSuite(_pi: ExtensionAPI): void {
  // No-op: every real extension is loaded via this package's pi.extensions entries.
}
