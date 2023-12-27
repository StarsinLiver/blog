#!/bin/bash

# 이 스크립트는 애플리케이션을 시작하는 데 사용됩니다.
# 필요한 시작 작업을 여기에 추가하세요.
exec > >(tee /var/log/codedeploy_start.log|logger -t codedeploy_start -s 2>/dev/console) 2>&1
echo "애플리케이션을 시작합니다."
# 여기에 애플리케이션 시작 명령어 또는 작업을 추가하세요.

