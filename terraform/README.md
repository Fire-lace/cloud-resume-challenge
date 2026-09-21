# Terraform Infrastructure

Infrastructure as Code implementation for the **Cloud Resume Challenge** using Terraform and AWS.

This directory contains the Terraform configuration used to provision, configure, and manage the AWS infrastructure for the project.

---

## 🎯 Purpose

The purpose of this Terraform configuration is to manage AWS infrastructure through code rather than relying entirely on manual configuration through the AWS Console.

The infrastructure currently includes:

* Amazon S3
* S3 Static Website Hosting
* S3 Bucket Policy
* S3 Public Access Configuration
* Amazon VPC
* Public Subnet
* Internet Gateway
* Route Table
* Route Table Association
* Amazon EC2
* EC2 Security Group
* EC2 User Data
* Nginx
* Terraform Outputs

---

# 🏗️ Architecture

```text
                         AWS Region
                          us-east-1
                              │
                              ▼
                    ┌───────────────────┐
                    │       VPC         │
                    │   10.0.0.0/16     │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   Public Subnet   │
                    │   10.0.0.0/24     │
                    │    us-east-1a     │
                    └─────────┬─────────┘
                              │
              ┌───────────────┼────────────────┐
              │               │                │
              ▼               ▼                ▼
       Internet Gateway   Route Table    Security Group
                              │           HTTP :80
                        0.0.0.0/0 → IGW   SSH :22
                              │
                              ▼
                    ┌───────────────────┐
                    │   EC2 Instance    │
                    │  Nginx Web Server  │
                    │   10.0.0.87       │
                    └───────────────────┘


                    ┌───────────────────┐
                    │     Amazon S3     │
                    │ firelace-cloud-   │
                    │      resume       │
                    └─────────┬─────────┘
                              │
                              ▼
                       Static Website
```

---

# ☁️ AWS Resources

## VPC

Terraform creates a dedicated VPC for the Cloud Resume Challenge.

```text
CIDR: 10.0.0.0/16
```

DNS support and DNS hostnames are enabled to support resources within the VPC.

---

## Public Subnet

The project uses a public subnet:

```text
CIDR: 10.0.0.0/24
Availability Zone: dynamically selected from available AZs
```

The subnet has:

```hcl
map_public_ip_on_launch = true
```

This allows EC2 instances launched into the subnet to receive public IPv4 addresses.

The subnet CIDR is generated using Terraform's `cidrsubnet()` function:

```hcl
cidrsubnet(var.vpc_cidr, 8, 0)
```

With:

```text
vpc_cidr = 10.0.0.0/16
```

Terraform produces:

```text
10.0.0.0/24
```

---

## Internet Gateway

An Internet Gateway is attached to the custom VPC.

The Internet Gateway provides the VPC with a path to the public internet.

---

## Route Table

The public subnet is associated with a custom route table containing:

```text
0.0.0.0/0 → Internet Gateway
```

This route allows traffic from the public subnet to reach destinations outside the VPC.

The route table is explicitly associated with the public subnet using:

```hcl
aws_route_table_association
```

---

# 🔐 Security Group

A custom security group is attached to the EC2 instance.

### Inbound Rules

| Port | Protocol | Source           | Purpose      |
| ---- | -------- | ---------------- | ------------ |
| 80   | TCP      | `0.0.0.0/0`      | HTTP / Nginx |
| 22   | TCP      | Administrator IP | SSH access   |

SSH access is restricted to the administrator's public IP rather than exposing port 22 to the entire internet.

### Outbound Rules

All outbound traffic is currently allowed:

```text
0.0.0.0/0
```

---

# 🖥️ EC2 Instance

The EC2 instance runs inside the custom VPC public subnet.

Terraform configures:

```text
Instance Name: firelace-nginx-server
Instance Type: t3.micro
Region: us-east-1
```

The instance is connected to:

```text
VPC: 10.0.0.0/16
Subnet: 10.0.0.0/24
```

Terraform also assigns the custom VPC security group to the instance.

---

# 🌐 Nginx

Nginx is installed automatically using EC2 `user_data`.

Terraform provisions the instance with:

```bash
#!/bin/bash
apt update -y
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

This means the web server is configured automatically when the EC2 instance is created.

No manual Nginx installation is required.

---

# 🪣 Amazon S3

The project also uses Amazon S3 for static website hosting.

Current bucket:

```text
firelace-cloud-resume
```

The bucket is configured with:

* Static website hosting
* `portfolio.html` as the index document
* `error.html` as the error document
* Public read access through an S3 bucket policy
* Public access block settings configured for static website hosting

---

# 🔧 Terraform Configuration

### Main Resources

The primary Terraform resources are:

```text
aws_vpc.resume_vpc
aws_subnet.resume_subnet
aws_internet_gateway.gw
aws_route_table.resume_route_table
aws_route_table_association.resume_route_table_association
aws_security_group.custom_vpc_sg
aws_instance.resume_instance

aws_s3_bucket.resume_bucket
aws_s3_bucket_website_configuration.website
aws_s3_bucket_public_access_block.public_access_block
aws_s3_bucket_policy.bucket_policy
```

Terraform also uses the AWS Availability Zone data source:

```text
data.aws_availability_zones.available
```

---

# 📤 Terraform Outputs

The configuration exposes the following outputs:

```text
bucket_name
Bucket_arn
website_endpoint
nginx_public_ip
```

Example:

```text
nginx_public_ip = 100.62.22.106
```

The public IP can therefore be retrieved without manually checking the AWS Console:

```powershell
terraform output nginx_public_ip
```

---

# 🧪 Validation

After provisioning the infrastructure, the following validation steps were performed.

### Terraform Validation

```powershell
terraform fmt
terraform validate
terraform plan
```

Final result:

```text
No changes. Your infrastructure matches the configuration.
```

This confirms that the Terraform configuration matches the deployed infrastructure.

### Terraform State

The final Terraform state contains the expected infrastructure resources:

```text
data.aws_availability_zones.available
aws_instance.resume_instance
aws_internet_gateway.gw
aws_route_table.resume_route_table
aws_route_table_association.resume_route_table_association
aws_s3_bucket.resume_bucket
aws_s3_bucket_policy.bucket_policy
aws_s3_bucket_public_access_block.public_access_block
aws_s3_bucket_website_configuration.website
aws_security_group.custom_vpc_sg
aws_subnet.resume_subnet
aws_vpc.resume_vpc
```

### SSH Validation

SSH access to the migrated EC2 instance was successfully tested.

```bash
ssh -i "phalanx-key.pem" ubuntu@<EC2_PUBLIC_IP>
```

### Nginx Validation

Nginx was confirmed to be running:

```bash
sudo systemctl status nginx
```

Result:

```text
Active: active (running)
```

The local web server was also tested:

```bash
curl http://localhost
```

The request returned the default Nginx welcome page.

---

# 🔄 EC2 Migration

During Sprint 5, the existing EC2 instance was migrated from the default AWS VPC into the custom Terraform-managed VPC.

The migration involved changing the EC2 configuration to use:

```hcl
subnet_id              = aws_subnet.resume_subnet.id
vpc_security_group_ids = [aws_security_group.custom_vpc_sg.id]
```

Terraform identified that the networking changes required the existing instance to be replaced.

The old instance was destroyed and a new instance was created inside the custom VPC.

Final networking:

```text
VPC:         10.0.0.0/16
Subnet:      10.0.0.0/24
Private IP:  10.0.0.87
Public IP:   100.62.22.106
```

---

# 🧹 Infrastructure Cleanup

After confirming that the new EC2 instance was functioning correctly, the obsolete security group from the default VPC was removed from the Terraform configuration.

Terraform then planned:

```text
Plan: 0 to add, 0 to change, 1 to destroy.
```

The old security group was successfully destroyed.

A final:

```powershell
terraform plan
```

returned:

```text
No changes. Your infrastructure matches the configuration.
```

This confirmed that the Terraform state and deployed AWS infrastructure were synchronized.

---

# 🧠 Key Lessons

### 1. VPCs are regional

A VPC is created within an AWS Region, while subnets exist inside individual Availability Zones.

```text
Region
 └── VPC
      └── Subnet
           └── Availability Zone
```

### 2. A subnet is not automatically public

A subnet becomes publicly routable through the combination of:

```text
Subnet
   +
Route Table
   +
0.0.0.0/0 → Internet Gateway
```

### 3. Security Groups are VPC-specific

A security group belongs to a particular VPC and cannot simply be reused across different VPCs.

The EC2 migration therefore required a new security group for the custom VPC.

### 4. Terraform can replace resources

Changing certain EC2 networking attributes can require Terraform to destroy and recreate an instance.

Terraform clearly indicated this behavior in the plan before applying the change.

### 5. SSH security should be restricted

SSH access was restricted to a specific administrator IP rather than allowing:

```text
0.0.0.0/0
```

This reduces unnecessary exposure of port 22.

### 6. `terraform plan` is an important safety mechanism

Before applying infrastructure changes, Terraform provides a preview of what will happen.

The final clean plan confirmed:

```text
Infrastructure = Configuration
```

---

# 🛠️ Useful AWS CLI Commands

### List Availability Zones

```powershell
aws ec2 describe-availability-zones --filters Name=zone-type,Values=availability-zone --region us-east-1 --query AvailabilityZones[].ZoneName
```

### Check EC2 Networking

```powershell
aws ec2 describe-instances --instance-ids <INSTANCE_ID> --query "Reservations[0].Instances[0].[InstanceId,VpcId,SubnetId,PrivateIpAddress,PublicIpAddress,SecurityGroups[0].GroupId,State.Name]" --output table
```

### Check Current Public IP

```powershell
(Invoke-RestMethod -Uri "https://checkip.amazonaws.com").Trim()
```

---

# 📁 Terraform Workflow

Typical workflow used during the project:

```powershell
terraform fmt
terraform validate
terraform plan
terraform apply
```

After making infrastructure changes:

```powershell
terraform plan
terraform state list
```

---

# 📌 Current Status

**Sprint 5: COMPLETE ✅**

The project now has a Terraform-managed custom AWS networking layer with:

```text
VPC
 ↓
Public Subnet
 ↓
Route Table
 ↓
Internet Gateway
 ↓
Security Group
 ↓
EC2
 ↓
Nginx
```

The infrastructure has been validated, the obsolete default-VPC security group has been removed, and Terraform reports no configuration drift.

---

## Git History

Sprint 5 networking work was committed in stages.

```text
eef48e6  feat: build custom VPC networking foundation
5da14ae  feat: complete EC2 migration to custom VPC
```

Both commits were pushed to the project's GitHub repository.

---

## Next Phase

The next stage of the Cloud Resume Challenge will focus on **containerization with Docker**, building on the AWS and Terraform foundation established during this sprint.
