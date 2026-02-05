# Portfolio Deployment Guide

## Docker Deployment

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)

### Quick Start

#### Option 1: Using Docker Compose (Recommended)

```bash
# Build and run the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

Your app will be available at: `http://localhost:3000`

#### Option 2: Using Docker Commands

```bash
# Build the image
docker build -t portfolio-app .

# Run the container
docker run -d -p 3000:80 --name portfolio portfolio-app

# View logs
docker logs -f portfolio

# Stop the container
docker stop portfolio

# Remove the container
docker rm portfolio
```

### Environment Variables

If you need to pass environment variables (like EmailJS keys), create a `.env.production` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the Dockerfile to copy it during build:

```dockerfile
# Add before RUN npm run build
COPY .env.production .env
```

### Deployment to Cloud Platforms

#### Deploy to AWS (EC2)

```bash
# SSH into your EC2 instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Docker
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user

# Clone your repo
git clone your-repo-url
cd portfolio

# Build and run
docker build -t portfolio-app .
docker run -d -p 80:80 --name portfolio portfolio-app
```

#### Deploy to DigitalOcean

```bash
# Create a droplet with Docker pre-installed
# SSH into droplet
ssh root@your-droplet-ip

# Clone and run
git clone your-repo-url
cd portfolio
docker-compose up -d
```

#### Deploy to Heroku

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create your-portfolio-app

# Set stack to container
heroku stack:set container

# Deploy
git push heroku main
```

#### Deploy to Vercel/Netlify (Easier Alternative)

For simpler deployment without Docker:

**Vercel:**

```bash
npm install -g vercel
vercel
```

**Netlify:**

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Production Checklist

- [ ] Update EmailJS credentials in `.env.production`
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Update contact information (email, phone, location)
- [ ] Test contact form functionality
- [ ] Optimize images in `/public` folder
- [ ] Update meta tags in `index.html` for SEO
- [ ] Test on mobile devices
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Configure custom domain

### Troubleshooting

**Container won't start:**

```bash
docker logs portfolio
```

**Port already in use:**

```bash
# Change port in docker-compose.yml
ports:
  - "8080:80"  # Use 8080 instead of 3000
```

**Build fails:**

```bash
# Clear Docker cache
docker system prune -a
docker build --no-cache -t portfolio-app .
```

### Performance Tips

1. **Enable Gzip** - Already configured in nginx.conf
2. **Optimize images** - Use WebP format, compress images
3. **CDN** - Use Cloudflare or similar for static assets
4. **Caching** - Already configured in nginx.conf

### Security

1. **SSL/TLS** - Use Let's Encrypt for free SSL
2. **Security headers** - Already configured in nginx.conf
3. **Environment variables** - Never commit `.env` files
4. **Regular updates** - Keep dependencies updated

### Monitoring

```bash
# Check container status
docker ps

# View resource usage
docker stats portfolio

# Check logs
docker logs -f portfolio
```
