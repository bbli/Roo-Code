import { ApiHandlerOptions } from "../../../shared/api" // Adjust path if needed
import { EmbedderProvider } from "./manager"

/**
 * Configuration state for the code indexing feature
 */
export interface CodeIndexConfig {
	isEnabled: boolean
	isConfigured: boolean
	embedderProvider: EmbedderProvider
	modelId?: string
	openAiOptions?: ApiHandlerOptions
	ollamaOptions?: ApiHandlerOptions
	openAiCompatibleOptions?: { baseUrl: string; apiKey: string; modelDimension?: number }
	qdrantUrl?: string
	qdrantApiKey?: string
	searchMinScore?: number
	indexRoot?: string // NEW: user-editable index root
}

/**
 * Snapshot of previous configuration used to determine if a restart is required
 */
export type PreviousConfigSnapshot = {
	enabled: boolean
	configured: boolean
	embedderProvider: EmbedderProvider
	modelId?: string
	openAiKey?: string
	ollamaBaseUrl?: string
	openAiCompatibleBaseUrl?: string
	openAiCompatibleApiKey?: string
	openAiCompatibleModelDimension?: number
	qdrantUrl?: string
	qdrantApiKey?: string
	indexRoot?: string // NEW: index root for restart detection
}
