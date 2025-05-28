---
layout: page
title: "Developer Documentation | Lapis Legal AI"
description: "Complete developer documentation for integrating with Lapis Legal AI platform"
permalink: /developers/
---

# Developer Documentation

## Getting Started

### Installation

#### Python SDK
```bash
# Install from PyPI
pip install lapis-legal

# Install with development dependencies
pip install lapis-legal[dev]

# Install with OCR support
pip install lapis-legal[ocr]
```

#### API Access
The REST API is available at:
- Development: `http://localhost:8000/api/v1`
- Production: Contact us for production endpoint

### Authentication

All API requests require JWT authentication:

```python
import requests

# Login to get access token
response = requests.post(
    "http://localhost:8000/api/v1/auth/login",
    json={"email": "your@email.com", "password": "your_password"}
)
tokens = response.json()
access_token = tokens["access_token"]

# Use token in subsequent requests
headers = {"Authorization": f"Bearer {access_token}"}
```

## SDK Usage

### Basic Document Extraction

```python
from lapis_legal import DocumentExtractor

# Initialize extractor
extractor = DocumentExtractor(anthropic_api_key)

# Extract facts from a PDF
facts = extractor.extract_from_pdf(
    pdf_path="document.pdf",
    prompt_type="facts"
)

# Available extraction types:
# - facts: Key factual statements
# - entities: People, organizations, locations
# - timeline: Chronological events
# - contradictions: Inconsistencies
# - assertions: Legal claims
# - evidence_gaps: Missing information
# - source_references: Citations
# - case_intelligence: Strategic analysis
# - documents: Classification and metadata
```

### Document Splitting

```python
from lapis_legal import PDFDocumentSplitter

splitter = PDFDocumentSplitter(anthropic_api_key)

# Split a stacked PDF
result = splitter.analyze_and_split(
    pdf_path="stacked_documents.pdf",
    output_dir="./split_output"
)

# Result includes:
# - document_boundaries: List of page ranges
# - confidence_scores: Confidence for each boundary
# - split_documents: Paths to individual PDFs
```

### Full Pipeline Processing

```python
from lapis_legal import LegalDocumentPipeline

pipeline = LegalDocumentPipeline(anthropic_api_key)

# Process with all features
results = pipeline.process_document(
    pdf_path="case_file.pdf",
    split_stacked=True,  # Auto-split if stacked
    extract_types=["facts", "entities", "timeline", "contradictions"],
    use_cache=True  # Cache results for efficiency
)

# Batch processing
batch_results = pipeline.process_batch(
    pdf_paths=["doc1.pdf", "doc2.pdf", "doc3.pdf"],
    extract_types=["facts", "timeline"]
)
```

## REST API Reference

### Authentication Endpoints

#### Register User
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password",
  "full_name": "John Doe"
}
```

#### Login
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response:
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "token_type": "bearer"
}
```

### Case Management

#### Create Case
```http
POST /api/v1/cases
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Smith v. Acme Corp",
  "description": "Personal injury case",
  "case_number": "2025-CV-12345"
}
```

#### List Cases
```http
GET /api/v1/cases
Authorization: Bearer {token}

Response:
[
  {
    "id": "uuid",
    "name": "Smith v. Acme Corp",
    "case_number": "2025-CV-12345",
    "created_at": "2025-05-28T10:30:00Z",
    "document_count": 15
  }
]
```

### Document Operations

#### Upload Document
```http
POST /api/v1/documents/upload/{case_id}
Authorization: Bearer {token}
Content-Type: multipart/form-data

file: [binary PDF data]
```

#### Start Analysis
```http
POST /api/v1/analysis/analyze/{document_id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "extraction_types": ["facts", "entities", "timeline"]
}

Response:
{
  "task_id": "uuid",
  "status": "pending"
}
```

#### Check Task Status
```http
GET /api/v1/tasks/{task_id}
Authorization: Bearer {token}

Response:
{
  "id": "uuid",
  "status": "completed",
  "progress": 100,
  "result": {
    "facts": [...],
    "entities": [...],
    "timeline": [...]
  }
}
```

## CLI Usage

The Lapis Legal CLI provides command-line access to all features:

```bash
# Configure API key
export ANTHROPIC_API_KEY=your_key

# Or use a config file
echo "ANTHROPIC_API_KEY=your_key" > .env

# Split a PDF
lapis split stacked_document.pdf -o ./output

# Extract specific information
lapis extract document.pdf -p facts -o facts.json
lapis extract document.pdf -p entities -o entities.json

# Full pipeline processing
lapis process case_documents.pdf -o ./analysis

# Batch processing
lapis process *.pdf -o ./batch_results
```

## Error Handling

### Common Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| 400 | Bad Request | Check request format and parameters |
| 401 | Unauthorized | Refresh authentication token |
| 403 | Forbidden | Check user permissions |
| 404 | Not Found | Verify resource ID |
| 413 | File Too Large | Maximum 32MB per file |
| 422 | Validation Error | Check input data |
| 429 | Rate Limited | Implement exponential backoff |
| 500 | Server Error | Contact support |

### Error Response Format
```json
{
  "detail": "Error description",
  "code": "ERROR_CODE",
  "timestamp": "2025-05-28T10:30:00Z"
}
```

## Best Practices

### Performance Optimization
1. **Use Batch Processing**: Process multiple documents together
2. **Enable Caching**: Reuse results for repeated analyses
3. **Parallel Extraction**: Run different extraction types concurrently
4. **Chunk Large Files**: PDFs over 100 pages are automatically chunked

### Security
1. **Rotate API Keys**: Regular key rotation for security
2. **Use HTTPS**: Always use HTTPS in production
3. **Validate Files**: The API validates all uploads automatically
4. **Token Storage**: Store tokens securely, never in code

### Rate Limiting
- Default: 100 requests per minute
- Document upload: 10 per minute
- Analysis requests: 20 per minute
- Implement exponential backoff for 429 responses

## Code Examples

### Complete Integration Example

```python
import os
from lapis_legal import DocumentExtractor, LegalDocumentPipeline
import requests

class LapisLegalClient:
    def __init__(self, api_url, email, password, anthropic_key):
        self.api_url = api_url
        self.anthropic_key = anthropic_key
        self.token = self._authenticate(email, password)
        self.headers = {"Authorization": f"Bearer {self.token}"}
        
    def _authenticate(self, email, password):
        response = requests.post(
            f"{self.api_url}/auth/login",
            json={"email": email, "password": password}
        )
        response.raise_for_status()
        return response.json()["access_token"]
    
    def create_case(self, name, description):
        response = requests.post(
            f"{self.api_url}/cases",
            headers=self.headers,
            json={"name": name, "description": description}
        )
        response.raise_for_status()
        return response.json()["id"]
    
    def analyze_document(self, pdf_path, case_id):
        # Upload document
        with open(pdf_path, "rb") as f:
            response = requests.post(
                f"{self.api_url}/documents/upload/{case_id}",
                headers=self.headers,
                files={"file": f}
            )
        doc_id = response.json()["id"]
        
        # Start analysis
        response = requests.post(
            f"{self.api_url}/analysis/analyze/{doc_id}",
            headers=self.headers,
            json={"extraction_types": ["facts", "entities", "timeline"]}
        )
        task_id = response.json()["task_id"]
        
        # Wait for completion
        import time
        while True:
            response = requests.get(
                f"{self.api_url}/tasks/{task_id}",
                headers=self.headers
            )
            status = response.json()["status"]
            if status == "completed":
                return response.json()["result"]
            elif status == "failed":
                raise Exception("Analysis failed")
            time.sleep(5)

# Usage
client = LapisLegalClient(
    "http://localhost:8000/api/v1",
    "user@example.com",
    "password",
    os.getenv("ANTHROPIC_API_KEY")
)

case_id = client.create_case("Smith v. Acme", "Personal injury")
results = client.analyze_document("deposition.pdf", case_id)
print(f"Found {len(results['facts'])} facts")
```

## Support

- **Documentation**: [https://docs.lapislegal.com](https://docs.lapislegal.com)
- **API Status**: [https://status.lapislegal.com](https://status.lapislegal.com)
- **GitHub**: [https://github.com/lapis-legal/lapis-legal-py](https://github.com/lapis-legal/lapis-legal-py)
- **Email**: developers@lapislegal.com

## Changelog

### v0.1.0 (May 2025)
- Initial release with 9 extraction types
- Native PDF processing
- Document splitting
- REST API with JWT auth
- CLI tools
- 80.82% test coverage