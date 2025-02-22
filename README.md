# Telex System Integration - Disk Space Monitoring

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

A robust system integration solution for monitoring and managing infrastructure metrics through RESTful APIs.

## 📋 Table of Contents
- [Features](#-features)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [License](#-license)

## 🚀 Features
- Real-time system monitoring via [/tick](#tick-endpoint) endpoint
- Type-safe TypeScript implementation
- Automated build pipeline with Vercel
- Comprehensive input validation
- Error handling middleware

## 💻 Technologies
- **TypeScript** (v4.9+)
- **Express** (v4.18+)
- **Vercel** Serverless Functions
- **Jest** (Testing Framework)
- **diskusage** (v1.1+)

## 📥 Installation
```bash
# Clone repository
git clone https://github.com/your-username/hngx-stage3-build-telex-integrations.git

# Install dependencies
npm install

# Build project
npm run build

# Start development server
npm run dev

# Run production build
npm start
```

## 📁 Project Structure
```
hngx-stage3-build-telex-integrations/
├── .vercel/            # Vercel deployment configuration
├── dist/               # Compiled JavaScript output
├── node_modules/       # NPM dependencies
├── src/
│   ├── app.ts          # Main application entry point
│   └── integrationSpec.ts  # Integration tests
├── .gitignore          # Version control exclusion rules
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact dependency tree
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment rules
```

## 🌐 API Endpoints

### POST /tick
**Trigger System Monitoring Check**
```http
POST https://https://hngx-stage3-build-telex-integrations.vercel.app/tick
Content-Type: application/json

{
  "system_id": "SRV-001",
  "metrics": {
    "cpu_load": 0.75,
    "memory_usage": 65.2
  }
}
```

**Success Response:**
```json
{
  "status": "success",
  "message": "Data received and processed"
}
```

**Error Handling:**
```json
{
  "status": "error",
  "code": 400,
  "message": "Invalid format"
}
```

```json
{
  "status": "error",
  "code": 400,
  "message": "Missing fields"
}
```

## 🚀 Deployment

### Vercel Configuration
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel deploy --prod
   ```

## 🧪 Testing
```bash
# Run integration tests
npm test

# Manual test with curl
curl -X POST http://localhost:3000/tick \
  -H "Content-Type: application/json" \
  -d '{"system_id":"TEST-001","metrics":{"cpu_load":0.5}}'

# Load testing (install artillery first)
npx artillery run load-test.yml
```

**Sample Test Case** (`integrationSpec.ts`):
```typescript
describe('POST /tick', () => {
  it('should validate metric inputs', async () => {
    const response = await request(app)
      .post('/tick')
      .send({ invalid_payload: true });
    
    expect(response.statusCode).toBe(400);
  });
});
```

## 📜 License
MIT License 
