#!/bin/bash
REPOSITORY=/home/ubuntu/git/deploy

cd $REPOSITORY

sudo yarn install

sudo systemctl reload nginx || sudo systemctl start nginx