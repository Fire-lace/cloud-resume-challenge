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

``## 🏗️ Current Architecture

The project is being built incrementally, with each sprint introducing additional cloud and DevOps infrastructure.

### Current Infrastructure

```
                              ┌─────────────────────┐
                              │        User         │
                              │     Web Browser     │
                              └──────────┬──────────┘
                                         │
                                         │
                              ┌──────────▼──────────┐
                              │      Amazon S3       │
                              │   Static Website     │
                              └──────────────────────┘


                              ┌─────────────────────┐
                              │        User         │
                              │     Web Browser     │
                              └──────────┬──────────┘
                                         │
                                      HTTP :80
                                         │
                              ┌──────────▼──────────┐
                              │    EC2 Instance      │
                              │    Ubuntu 24.04      │
                              │       Nginx          │
                              └──────────┬──────────┘
                                         │
                              ┌──────────▼──────────┐
                              │   Security Group     │
                              │   HTTP / SSH Rules   │
                              └──────────────────────┘

                         ┌─────────────────────────────┐
                         │          Terraform          │
                         │                             │
                         │  S3 │ EC2 │ Security Group │
                         │       │ Outputs             │
                         └─────────────────────────────┘
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
| EC2 Infrastructure | ✅ Completed |
| EC2 Security Group | ✅ Completed |
| Configurable SSH Access | ✅ Completed |
| EC2 User Data | ✅ Completed |
| Nginx Deployment | ✅ Completed |
| SSH Verification | ✅ Completed |
| HTTP Verification | ✅ Completed |
| VPC / Networking | 🚧 Planned |
| GitHub Actions CI/CD | 🚧 Planned |
| Lambda | 🚧 Planned |
| API Gateway | 🚧 Planned |
| DynamoDB Visitor Counter | 🚧 Planned |
| Monitoring / Observability | 🚧 Planned |
| CloudFront | ⏸️ Blocked by AWS Account Restriction |
---

# 🛠️ Technologies

# 🛠️ Technologies

## ☁️ Cloud

- Amazon Web Services (AWS)
- Amazon S3
- Amazon EC2
- AWS IAM
- AWS Security Groups
- AWS Lambda
- API Gateway
- DynamoDB
- CloudFront
- Route 53

## ⚙️ Infrastructure & DevOps

- Terraform
- Git
- GitHub
- GitHub Actions
- Docker
- Linux
- Nginx

## 💻 Development

- HTML
- CSS
- JavaScript

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

Terraform currently manages:

- Amazon S3
- S3 static website configuration
- S3 bucket policy
- S3 public access configuration
- Amazon EC2
- EC2 Security Group
- EC2 User Data
- Resource tags
- Terraform outputs

Existing AWS resources were imported into Terraform State rather than unnecessarily recreated.

The project has also been used to practice:

- Terraform State management
- Resource importing
- Configuration drift detection
- Infrastructure reconciliation
- Infrastructure planning
- Infrastructure deployment
- Infrastructure verification

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
- Infrastructure reconciliation
- AWS S3 static hosting
- AWS EC2
- Security Groups
- CIDR-based access control
- Linux server administration
- SSH
- EC2 User Data
- Cloud-init
- Nginx
- HTTP networking

Future stages will introduce:

- VPC networking
- Docker
- CI/CD
- GitHub Actions
- Serverless architecture
- API Gateway
- Lambda
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

Completed:

- EC2 provisioning with Terraform
- Security Group configuration
- HTTP and SSH access
- Configurable SSH CIDR
- EC2 User Data
- Automated Nginx installation
- Cloud-init verification
- SSH verification
- HTTP verification
- Terraform infrastructure verification

---

# 👨‍💻 About

This project is part of my journey toward becoming a **Junior DevOps / Cloud Engineer**.

Rather than building isolated tutorial projects, I'm using this repository to document the progression from a simple cloud-hosted website toward a more complete, automated cloud architecture.

---

## ⭐ Project Status

**Active Development 🚧**

The project is functional, but the architecture is intentionally evolving as new DevOps and cloud engineering concepts are implemented.

---
# 🧠 Engineering Highlights

This project demonstrates practical experience with:

- Managing AWS infrastructure through Terraform
- Importing existing AWS resources into Terraform State
- Detecting and resolving infrastructure drift
- Provisioning EC2 instances using Infrastructure as Code
- Configuring Security Groups and network access rules
- Restricting SSH access using configurable CIDR variables
- Automating Linux server configuration with EC2 User Data
- Installing and managing Nginx through cloud-init
- Verifying infrastructure through Terraform plan
- Troubleshooting SSH connectivity and private key permissions
- Testing HTTP services from both inside and outside the EC2 instance
---

# 🧭 Explore the Project

- **[`terraform/`](./terraform/)** - Infrastructure as Code implementation
- **[`terraform/README.md`](./terraform/README.md)** - Terraform architecture and implementation details
- **[`changelog.md`](./changelog.md)** - Development and sprint history
- **`website/`** - Resume website source files

---

> **Build it. Automate it. Break it. Understand it. Improve it.**