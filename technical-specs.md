---
layout: page
title: "Technical Specifications | Lapis Legal AI"
description: "Detailed technical specifications and implementation details for Lapis Legal AI platform"
permalink: /technical-specs/
---

# Technical Specifications

## Backend Architecture

### Technology Stack
- **Language**: Python 3.9+
- **API Framework**: FastAPI
- **AI Model**: Anthropic Claude (Sonnet 4)
- **Database**: PostgreSQL with SQLAlchemy 2.0 (async support)
- **Task Queue**: Celery + Redis
- **Authentication**: JWT with refresh tokens
- **File Storage**: Local filesystem or S3-compatible backends

### Key Components

#### Document Extractor
```python
from lapis_legal import DocumentExtractor

extractor = DocumentExtractor(api_key)
result = extractor.extract_from_pdf(
    pdf_path="document.pdf",
    prompt_type="facts"  # 9 extraction types available
)
```

#### PDF Document Splitter
- Automatically detects document boundaries in stacked PDFs
- Analyzes headers, footers, page numbering, and formatting changes
- Outputs individual documents with metadata

#### Legal Document Pipeline
- Orchestrates complete document processing workflow
- Handles splitting, classification, and multi-type extraction
- Supports batch processing for efficiency

### Performance Specifications

#### Processing Times
- **Single Extraction**: ~84 seconds for 49-page PDF
- **Full Pipeline**: 10-15 minutes for all extraction types
- **Optimization**: Parallel processing recommended for production

#### Limits
- **File Size**: 32MB maximum
- **Page Count**: 100 pages (auto-chunking for larger documents)
- **Token Output**: 40,000 tokens (Claude Sonnet 4)

### API Endpoints

#### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - Login (returns JWT)
- `POST /api/v1/auth/refresh` - Refresh access token

#### Cases
- `GET /api/v1/cases` - List user's cases
- `POST /api/v1/cases` - Create new case
- `GET /api/v1/cases/{case_id}` - Get case details
- `PUT /api/v1/cases/{case_id}` - Update case
- `DELETE /api/v1/cases/{case_id}` - Delete case

#### Documents
- `POST /api/v1/documents/upload/{case_id}` - Upload document
- `GET /api/v1/documents/{document_id}` - Get document metadata
- `GET /api/v1/documents/{document_id}/download` - Download document
- `DELETE /api/v1/documents/{document_id}` - Delete document

#### Analysis
- `POST /api/v1/analysis/analyze/{document_id}` - Start analysis (async)
- `GET /api/v1/analysis/results/{document_id}` - Get analysis results

#### Tasks
- `GET /api/v1/tasks/{task_id}` - Check task status
- `GET /api/v1/tasks` - List user's tasks

### Security Features

#### Authentication & Authorization
- JWT tokens with configurable expiration
- Refresh token rotation
- Role-based access control (RBAC)
- Rate limiting on sensitive endpoints

#### File Security
- Comprehensive file validation using python-magic
- MIME type verification
- Path traversal prevention
- Suspicious pattern detection
- File size limits enforcement

#### Data Protection
- Bcrypt password hashing
- SQL injection protection via ORM
- XSS prevention in API responses
- Secure file storage with access controls

### Extraction Types

1. **facts** - Extract facts with entities and timeline
2. **entities** - Identify people, organizations, dates, locations
3. **timeline** - Build chronological event sequences
4. **contradictions** - Find conflicting statements
5. **assertions** - Extract legal claims and allegations
6. **evidence_gaps** - Identify missing evidence
7. **source_references** - Track document citations
8. **case_intelligence** - Strategic case analysis
9. **documents** - Classify and extract metadata

### CLI Usage

```bash
# Install the package
pip install -e .

# Split a stacked PDF
lapis split document.pdf -o ./output

# Extract facts from a document
lapis extract document.pdf -p facts -o facts.json

# Process through full pipeline
lapis process document1.pdf document2.pdf -o ./results
```

### Testing & Quality

- **Test Coverage**: 80.82%
- **Unit Tests**: Comprehensive coverage of core functionality
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full workflow validation

### Deployment Options

#### Local Development
```bash
# Install dependencies
pip install -e ".[dev]"

# Run API server
uvicorn lapis_legal.api.main:app --reload

# Run Celery worker
celery -A lapis_legal.api.tasks worker --loglevel=info
```

#### Production Deployment
- Docker containerization supported
- PostgreSQL required for production
- Redis required for Celery
- Reverse proxy (Nginx) recommended
- SSL/TLS required for JWT security

### System Requirements

#### Minimum Requirements
- Python 3.9+
- 4GB RAM
- 10GB storage
- PostgreSQL 12+
- Redis 5+

#### Recommended for Production
- Python 3.11+
- 16GB RAM
- 100GB SSD storage
- PostgreSQL 14+
- Redis 6+
- Multiple Celery workers

### Known Limitations

1. **Performance**: Large PDFs require significant processing time
2. **Concurrent Processing**: Limited by Anthropic API rate limits
3. **File Types**: Currently optimized for PDF documents only
4. **Language**: English language documents only (currently)

### Future Enhancements

- Parallel extraction processing
- Caching layer for repeated analyses
- WebSocket support for real-time updates
- Additional file format support
- Multi-language document processing