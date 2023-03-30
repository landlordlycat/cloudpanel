# cloudpanel
这个面板不适合一点linux和docker基础都没有的童鞋</br>
安装Docker</br>
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh</br>
service docker start # 如果docker没启动，可以运行这个</br>
docker创建网络</br>

docker network create cdntip_network</br>
启动mysql容器</br>

mkdir /data</br>
docker run -d -it --network cdntip_network --restart=always -v /data/mysql:/var/lib/mysql --name panel_mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=panel </br>
</br>

mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci</br>
启动 cloudpanel</br>

docker run -d -it --network cdntip_network -p 8111:80 --name panel cdntip/panel</br>
进入容器</br>

docker exec -it panel /bin/bash</br>
创建管理员</br>

python manage.py createsuperuser --username admin --email admin@admin.com</br>
添加aws镜像</br>

python manage.py aws_update_images</br>
更新程序</br>

docker stop panel # 停止当前容器</br>
docker rm panel # 删除当前容器</br>
docker pull cdntip/panel:latest # 拉取最新的镜像</br>
docker run -d -it --network cdntip_network -p 8111:80 --name panel cdntip/panel:latest # 重新创建程序容器</br>
查看日志</br>

docker logs -f panel</br>
打开浏览器，输入 ip:8111</br>

其它说明</br>

目前支持 aws、azure、linode（1.3版本）</br>
后端暂时未上传到github, 但是代码都是未加密的, 在容器中可以看到。</br>
docker 暂时只有x86平台(不支持arm平台)</br>
目前版本为预览版，有问题请到群里反馈 @cdntip</br>
常见问题</br>

重启之后面板打不开， 运行 service docker start && docker start panel_mysql && docker restart panel</br>
