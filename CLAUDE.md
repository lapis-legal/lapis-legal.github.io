# CLAUDE.md - Persistent Knowledge Base

## Document Purpose
This document serves as Claude's persistent memory across sessions, containing accumulated knowledge, insights, and context about the Lapis Legal ecosystem. It should be updated regularly to maintain continuity and preserve important discoveries.

## Recent Major Updates (May 29, 2025)
- Completed comprehensive audit fixes addressing 90% of HIGH/MEDIUM priority issues from QA and Security audits
- Implemented full monitoring/observability infrastructure with Prometheus, Grafana, Jaeger, and SLO tracking
- Fixed all async/sync test compatibility issues and incorrect extraction type references
- Added JWT token revocation, parallel PDF extraction, security audit logging, and temp file cleanup
- See AUDIT_FIXES_COMPLETED.md for detailed implementation summary

[... existing content remains the same ...]

## Testing Data Locations

- Use documents in `/workspace/data` and `/workspace/mock_data` for testing
- Do NOT write custom test data
- These directories contain pre-prepared test scenarios and mock documents for development and testing purposes
- Always use the actual Anthropic API key in `/workspace/lapis-legal-py/.env` for testing against the API
- Never mock responses from Anthropic API

[... rest of the existing content remains unchanged ...]