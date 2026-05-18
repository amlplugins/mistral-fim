/**
 * @amlplugins/mistral-fim
 *
 * Thin namespaced re-export of the native @mistralai/mistralai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Mistral FIM (Fill-in-the-Middle) — code completion with prefix/suffix via Codestral.
 */

import * as _sdk from "@mistralai/mistralai";
export * from "@mistralai/mistralai";
export { _sdk as sdk };
export default _sdk;
