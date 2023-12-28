#!/bin/bash

# 이 스크립트는 애플리케이션을 중지하는 데 사용됩니다.
# 필요한 중지 작업을 여기에 추가하세요.
# exec > >(tee /var/log/codedeploy_stop.log|logger -t codedeploy_stop -s 2>/dev/console) 2>&1
echo "애플리케이션을 중지합니다."
# 여기에 애플리케이션 중지 명령어 또는 작업을 추가하세요.
sudo systemctl stop nginx
