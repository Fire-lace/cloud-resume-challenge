
output "bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.resume_bucket.bucket
}

output "Bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = aws_s3_bucket.resume_bucket.arn
}

output "website_endpoint" {
  description = "Website endpoint of the S3 bucket"
  value       = aws_s3_bucket_website_configuration.website.website_endpoint
}
/*
output "ipv4_address" {
  description = "IPv4 address of the EC2 instance"
  value       = aws_instance.resume_instance.public_ip
}
*/

output "nginx_public_ip" {
  value       = aws_instance.resume_instance.public_ip
  description = "The public IP address of the Nginx web server"
}