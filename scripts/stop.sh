#!/bin/bash
exec > >(tee /var/log/codedeploy_stop.log|logger -t codedeploy_stop -s 2>/dev/console) 2>&1
echo "애플리케이션을 중지합니다."
