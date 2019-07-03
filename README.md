# docker



o container node 
adicionei um expose para 27017

no container mongo adicionei a porta expose 27017
e peguei o ip do container rodando:

https://stackoverflow.com/questions/17157721/how-to-get-a-docker-containers-ip-address-from-the-host

docker ps
docker inspect <container ID>
docker inspect <container id> | grep "IPAddress"


dar o build no docker:

docker build -t fred/test1 .

run:

docker run -p 8080:8080 -d fred/test1


tentei esse --hostname e não deu certo:
https://www.digitalocean.com/community/tutorials/naming-docker-containers-3-tips-for-beginners


https://docs.docker.com/develop/develop-images/multistage-build/
