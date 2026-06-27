#!/bin/bash

echo "Starting Jesta Healthcare deployment..."

cd /var/www/jesta-healthcare || exit

echo "Pulling latest code..."
git pull origin main

echo "Installing frontend dependencies..."
cd frontend || exit
npm install

echo "Building frontend..."
npm run build

echo "Copying build files..."
sudo rm -rf /var/www/jesta-healthcare-live/*
sudo cp -r dist/* /var/www/jesta-healthcare-live/

echo "Installing backend dependencies..."
cd ../backend || exit
npm install

echo "Restarting backend..."
pm2 restart jesta-healthcare-backend || pm2 start server.js --name jesta-healthcare-backend

echo "Saving PM2 process..."
pm2 save

echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Deployment completed successfully!"