#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo yarn install

sudo npm install

sudo systemctl reload nginx