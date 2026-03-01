/**
 * AiInferenceCell — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { CognitivePortOrchestrator } from "@webwaka/organelle-cognitive-port";
import { ExternalAdapterOrchestrator } from "@webwaka/organelle-external-adapter";

export { CognitivePortOrchestrator } from '@webwaka/organelle-cognitive-port';
export { ExternalAdapterOrchestrator } from '@webwaka/organelle-external-adapter';

/**
 * AiInferenceCell Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class AiInferenceCellComposition {
  private cognitivePortOrchestrator: CognitivePortOrchestrator;
  private externalAdapterOrchestrator: ExternalAdapterOrchestrator;

  constructor() {
    this.cognitivePortOrchestrator = new CognitivePortOrchestrator();
    this.externalAdapterOrchestrator = new ExternalAdapterOrchestrator();
  }
}

export * from "./types";
