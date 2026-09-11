data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_vpc" "resume_vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name    = "Cloud Resume Challenge VPC"
    Project = "Cloud Resume Challenge"
    Managed = "Terraform"
  }
}

resource "aws_security_group" "custom_vpc_sg" {
  name        = "cloud-resume-custom-vpc-sg"
  description = "Security group for Cloud Resume Challenge"
  vpc_id      = aws_vpc.resume_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.allowed_ip]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.resume_vpc.id

  tags = {
    Name    = "Cloud Resume Challenge IGW"
    Project = "Cloud Resume Challenge"
    Managed = "Terraform"
  }
}

resource "aws_subnet" "resume_subnet" {
  vpc_id                  = aws_vpc.resume_vpc.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, 0)
  map_public_ip_on_launch = true
  availability_zone       = data.aws_availability_zones.available.names[0]

  tags = {
    Name    = "Cloud Resume Challenge Subnet"
    Project = "Cloud Resume Challenge"
    Managed = "Terraform"
  }
}

resource "aws_route_table" "resume_route_table" {
  vpc_id = aws_vpc.resume_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    Name    = "Cloud Resume Challenge route table"
    Project = "Cloud Resume Challenge"
    Managed = "Terraform"
  }
}

resource "aws_route_table_association" "resume_route_table_association" {
  subnet_id      = aws_subnet.resume_subnet.id
  route_table_id = aws_route_table.resume_route_table.id
}

resource "aws_s3_bucket" "resume_bucket" {
  bucket = var.bucket_name

  tags = {
    Name    = "Cloud Resume Challenge S3 Bucket"
    Project = "Cloud Resume Challenge"
    Managed = "Terraform"
  }
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.resume_bucket.id

  index_document {
    suffix = "portfolio.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket = aws_s3_bucket.resume_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.resume_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid : "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.resume_bucket.arn}/*"
      }
    ]
  })
}

resource "aws_instance" "resume_instance" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.resume_sg.id]
  user_data              = <<-EOF
              #!/bin/bash
              apt update -y
              apt install -y nginx
              systemctl enable nginx
              systemctl start nginx
              EOF

  tags = {
    Name    = var.instance_name
    Project = "Cloud Resume Challenge"
    Managed = "Terraform"
  }
}

resource "aws_security_group" "resume_sg" {
  name        = "resume_sg"
  description = "Security group for Cloud Resume Challenge"


  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.allowed_ip]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}