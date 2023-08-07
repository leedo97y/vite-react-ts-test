#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo yarn install

sudo yarn build

sudo systemctl reload nginx