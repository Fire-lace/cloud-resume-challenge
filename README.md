# ☁️ Cloud Resume Challenge

A cloud-hosted resume and portfolio project built to demonstrate practical **AWS, DevOps, Infrastructure as Code, and CI/CD skills**.

This project is being developed incrementally through a series of DevOps sprints, starting with a static resume website hosted on Amazon S3 and evolving toward a more complete cloud architecture managed through Terraform and automated with GitHub Actions.

---

## 🎯 Project Goal

Build and deploy a production-oriented cloud resume application while gaining hands-on experience with:

- Cloud infrastructure
- Infrastructure as Code
- CI/CD
- AWS services
- Linux and networking
- Monitoring and observability
- Automation
- DevOps engineering practices

The ultimate goal is to transform a simple static resume into a portfolio project that demonstrates how I design, deploy, automate, and manage cloud infrastructure.

---

## 🏗️ Current Architecture

The project is being built in stages.

### Current Infrastructure

```text
                    ┌─────────────────────┐
                    │       User          │
                    │     Web Browser     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Amazon S3       │
                    │   Static Website    │
                    └──────────┬──────────┘
                               │
                               │
                    Managed by Terraform
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Terraform / AWS   │
                    │      Provider       │
                    └─────────────────────┘
```

> **Note:** CloudFront is planned for the architecture but is currently unavailable due to an AWS account-level restriction. The project is continuing without it.

---

## 🚀 Project Progress

| Component | Status |
|---|---|
| Resume Website | ✅ Completed |
| Amazon S3 Static Hosting | ✅ Completed |
| S3 Bucket Policy | ✅ Completed |
| S3 Public Access Configuration | ✅ Completed |
| Terraform Infrastructure | ✅ Completed |
| Terraform State Import | ✅ Completed |
| Configuration Drift Detection | ✅ Completed |
| Terraform Outputs | ✅ Completed |
| EC2 Infrastructure | 🚧 In Progress |
| Nginx Deployment | 🚧 Planned |
| VPC / Networking | 🚧 Planned |
| GitHub Actions CI/CD | 🚧 Planned |
| Lambda | 🚧 Planned |
| API Gateway | 🚧 Planned |
| DynamoDB Visitor Counter | 🚧 Planned |
| Monitoring / Observability | 🚧 Planned |
| CloudFront | ⏸️ Blocked by AWS Account Restriction |

---

# 🛠️ Technologies

## Cloud

- Amazon Web Services (AWS)
- Amazon S3
- Amazon EC2
- AWS IAM
- AWS Lambda
- API Gateway
- DynamoDB
- CloudFront
- Route 53

## DevOps & Infrastructure

- Terraform
- Git
- GitHub
- GitHub Actions
- Docker
- Linux
- Nginx

---

# 📁 Repository Structure

```text
cloud-resume-challenge/
│
├── terraform/
│   ├── versions.tf
│   ├── providers.tf
│   ├── variables.tf
│   ├── main.tf
│   ├── outputs.tf
│   ├── terraform.tfvars
│   ├── .terraform.lock.hcl
│   └── README.md
│
├── changelog.md
│
├── README.md
│
└── website/
    ├── HTML
    ├── CSS
    ├── JavaScript
    └── assets
```

> The repository structure will evolve as additional infrastructure and automation are introduced.

---

# 🧱 Infrastructure as Code

Terraform is used to manage the AWS infrastructure instead of relying exclusively on manual configuration through the AWS Console.

The Terraform implementation currently manages:

- S3 bucket
- S3 static website configuration
- S3 bucket policy
- S3 public access configuration
- Resource tags
- Terraform outputs

Existing AWS resources were imported into Terraform State rather than unnecessarily recreated.

This provided practical experience with:

- Terraform State
- Resource importing
- Configuration drift
- Infrastructure reconciliation
- Terraform planning and execution

---

# ⚙️ Terraform Workflow

From the Terraform directory:

### Initialize Terraform

```bash
terraform init
```

### Validate the configuration

```bash
terraform validate
```

### Preview infrastructure changes

```bash
terraform plan
```

### Apply infrastructure changes

```bash
terraform apply
```

### View outputs

```bash
terraform output
```

### Verify infrastructure state

```bash
terraform plan
```

A clean configuration should return:

```text
No changes.
Your infrastructure matches the configuration.
```

---

# 🔐 Security & State Management

Terraform state and environment-specific configuration are intentionally excluded from version control.

Ignored files include:

```text
.terraform/
*.tfstate
*.tfstate.*
terraform.tfvars
```

The Terraform provider lock file is committed:

```text
.terraform.lock.hcl
```

This allows Terraform to consistently use the selected provider versions across environments.

AWS credentials are also kept outside the repository and are never stored in Terraform configuration files.

---

# 📸 Screenshots

Screenshots documenting the project will be added here as the architecture develops.

Planned examples include:

- Resume website
- AWS S3 infrastructure
- Terraform plan
- Terraform apply
- EC2 instance
- Nginx deployment
- CI/CD pipeline
- AWS architecture

---

# 🧠 What I'm Learning

This project is designed around hands-on implementation rather than simply following tutorials.

Key concepts demonstrated so far include:

- Infrastructure as Code
- Terraform providers
- Terraform resources
- Variables
- Outputs
- Resource tags
- Terraform State
- Resource importing
- Configuration drift
- AWS S3 static hosting
- IAM authentication
- Git and GitHub workflows

Future stages will introduce:

- EC2
- VPC networking
- Security Groups
- Linux server administration
- Nginx
- Docker
- CI/CD
- Serverless architecture
- DynamoDB
- Monitoring and observability

---

# 📚 Project Documentation

Detailed development progress is recorded separately in:

- [`changelog.md`](./changelog.md)
- [`terraform/README.md`](./terraform/README.md)

The changelog documents the project's development history, while the Terraform README focuses specifically on the Infrastructure as Code implementation.

---

# 🔮 Future Improvements

The project will continue evolving toward a more complete cloud-native architecture.

Planned improvements include:

1. Provision EC2 infrastructure with Terraform
2. Automate Nginx installation
3. Introduce VPC and networking concepts
4. Containerize applications with Docker
5. Build CI/CD pipelines with GitHub Actions
6. Implement a serverless visitor counter
7. Store visitor data with DynamoDB
8. Connect the frontend to backend services through API Gateway
9. Add Lambda-based backend logic
10. Introduce monitoring and observability
11. Improve security and IAM practices
12. Revisit CloudFront when the AWS account restriction is resolved

---

# 🎓 DevOps Sprint Journey

This project is being developed as a series of practical engineering sprints.

### Sprint 1
Cloud Resume Challenge foundation and project setup.

### Sprint 2
AWS deployment and supporting cloud infrastructure.

### Sprint 3
**Terraform takes control of AWS infrastructure.**

Completed:

- Terraform project structure
- AWS provider configuration
- S3 Infrastructure as Code
- Existing resource imports
- Terraform State management
- Configuration drift detection
- Terraform outputs

### Sprint 4
**Terraform EC2 + Nginx**

Coming next.

---

# 👨‍💻 About

This project is part of my journey toward becoming a **Junior DevOps / Cloud Engineer**.

Rather than building isolated tutorial projects, I'm using this repository to document the progression from a simple cloud-hosted website toward a more complete, automated cloud architecture.

---

## ⭐ Project Status

**Active Development 🚧**

The project is functional, but the architecture is intentionally evolving as new DevOps and cloud engineering concepts are implemented.

---

> **Build it. Automate it. Break it. Understand it. Improve it.**