# Terraform Infrastructure

Infrastructure as Code implementation for the Cloud Resume Challenge.

This directory contains the Terraform configuration used to provision and manage the AWS infrastructure for the project.

---

## 🎯 Purpose

The purpose of this Terraform configuration is to manage AWS infrastructure through code rather than relying entirely on manual configuration through the AWS Console.

The infrastructure currently includes:

- Amazon S3
- S3 Static Website Hosting
- S3 Bucket Policy
- S3 Public Access Configuration
- Amazon EC2
- EC2 Security Group
- EC2 User Data
- Terraform Outputs

---

## 🏗️ Architecture

```text
                         Terraform
                             │
                             ▼
                       AWS Provider
                             │
              ┌──────────────┴──────────────┐
              │                             │
              ▼                             ▼
        Amazon S3                       Amazon EC2
              │                             │
     ┌────────┴────────┐             ┌──────┴─────────┐
     │                 │             │                │
 Static Website   Bucket Policy   Security Group    User Data
     │                 │             │                │
     └────────┬────────┘             └──────┬─────────┘
              │                             │
              ▼                             ▼
        Resume Website                    Nginx