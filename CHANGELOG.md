07/07/2026
[
## Architecture

Current architecture:

User
 ↓
Amazon CloudFront
 ↓
Amazon S3 Static Website Hosting


## AWS Services Used

- Amazon S3
  - Stores static website files
  - Hosts HTML/CSS/JS assets

- Amazon CloudFront
  - CDN distribution
  - HTTPS delivery
  - Global caching

  ## Screenshots

CloudFront Distribution:
Pending AWS account verification
]



07/08/2026
[
# Cloud Resume Challenge – Terraform Infrastructure

## Overview

This project is the Infrastructure as Code (IaC) implementation of my Cloud Resume Challenge. The infrastructure was migrated from manually created AWS resources to Terraform, allowing the entire environment to be managed, version controlled, and reproduced from code.

The project provisions and manages an AWS S3 Static Website, including website hosting configuration, bucket policies, public access settings, and infrastructure metadata through Terraform.

This project demonstrates practical experience with Infrastructure as Code, Terraform state management, resource importing, and infrastructure reconciliation.

---

## Project Objectives

- Manage AWS infrastructure using Terraform
- Migrate manually created AWS resources into Terraform State
- Eliminate manual infrastructure management
- Create reusable and maintainable Infrastructure as Code
- Produce a portfolio-quality Terraform project

---

## Architecture

```
Terraform
     │
     ▼
AWS Provider
     │
     ▼
Amazon S3 Bucket
     ├── Static Website Hosting
     ├── Bucket Policy
     ├── Public Access Configuration
     └── Resource Tags
```

---

## Technologies Used

- Terraform v1.15.x
- AWS Provider v6.x
- Amazon S3
- AWS IAM
- AWS CLI
- Git
- GitHub

---

## Project Structure

```
terraform/
├── versions.tf
├── providers.tf
├── variables.tf
├── main.tf
├── outputs.tf
├── terraform.tfvars
├── .terraform.lock.hcl
├── .gitignore
└── README.md
```

---

## Infrastructure Managed

Terraform currently manages:

- S3 Bucket
- Static Website Configuration
- Bucket Policy
- Public Access Block
- Resource Tags
- Terraform Outputs

---

## Terraform Workflow

### Initialize Terraform

```bash
terraform init
```

### Validate Configuration

```bash
terraform validate
```

### Preview Infrastructure Changes

```bash
terraform plan
```

### Apply Changes

```bash
terraform apply
```

### Verify Infrastructure

```bash
terraform plan
```

Expected output:

```
No changes.
Your infrastructure matches the configuration.
```

---

## Existing Infrastructure Migration

Rather than recreating existing AWS resources, the infrastructure was imported into Terraform State using:

```bash
terraform import
```

Imported resources include:

- S3 Bucket
- Bucket Policy
- Website Configuration
- Public Access Block

After importing, Terraform detected configuration drift and reconciled the infrastructure with the Terraform configuration.

---

## Terraform Outputs

The project exposes useful infrastructure information using Terraform Outputs.

Current outputs include:

- Bucket Name
- Bucket ARN
- Website Endpoint

Outputs can be viewed with:

```bash
terraform output
```

---

## Key Concepts Demonstrated

- Infrastructure as Code (IaC)
- Terraform Providers
- Variables
- Outputs
- Resource Tags
- Terraform State
- Resource Importing
- Configuration Drift Detection
- Infrastructure Reconciliation

---

## Lessons Learned

During this project I learned how to:

- Structure Terraform projects
- Configure AWS providers
- Manage infrastructure using Terraform State
- Import existing AWS resources into Terraform
- Detect and resolve configuration drift
- Validate infrastructure before deployment
- Safely update existing cloud infrastructure without recreating resources

---

## Future Improvements

- Configure a Remote Backend (Amazon S3)
- Add DynamoDB State Locking
- Deploy infrastructure through GitHub Actions
- Provision additional AWS services using Terraform
- Expand the project into a complete Cloud Resume Challenge deployment

---

## Skills Demonstrated

- Terraform
- Infrastructure as Code
- AWS S3
- AWS IAM
- AWS CLI
- Git
- GitHub
- Cloud Infrastructure
- State Management
- DevOps Fundamentals

---

## Author

**Fire Lace**

Aspiring DevOps & Cloud Engineer

GitHub: https://github.com/Fire-lace

---

## Sprint 3 Summary

✅ Migrated manually created AWS infrastructure into Terraform

✅ Imported existing AWS resources into Terraform State

✅ Managed S3 Website Hosting through Infrastructure as Code

✅ Implemented Bucket Policies and Public Access Configuration

✅ Detected and resolved Configuration Drift

✅ Successfully achieved a clean Terraform plan:

```
No changes.
Your infrastructure matches the configuration.
```

This project represents Sprint 3 of my DevOps Bootcamp journey toward becoming a Junior DevOps / Cloud Engineer.

]