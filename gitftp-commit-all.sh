#!/bin/bash
read -p "Commit description: " desc
git add . && \
git add -u && \
git commit -m "$desc" && \
git-ftp push -p - ftp://server83.web-hosting.com/public_html/site_stage
