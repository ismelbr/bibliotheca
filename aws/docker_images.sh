docker login -u AWS -p $(aws ecr get-login-password --region us-east-1) 429605438458.dkr.ecr.us-east-1.amazonaws.com

cd ../NgInx
docker build -t bibliotheca-nginx .
aws ecr create-repository --repository-name bibliotheca-nginx --region us-east-1
docker tag bibliotheca-nginx 429605438458.dkr.ecr.us-east-1.amazonaws.com/bibliotheca-nginx
docker push 429605438458.dkr.ecr.us-east-1.amazonaws.com/bibliotheca-nginx

cd ../back
docker build -t bibliotheca-back .
aws ecr create-repository --repository-name bibliotheca-back --region us-east-1
docker tag bibliotheca-back 429605438458.dkr.ecr.us-east-1.amazonaws.com/bibliotheca-back
docker push 429605438458.dkr.ecr.us-east-1.amazonaws.com/bibliotheca-back

cd ../front
docker build -t bibliotheca-front .
aws ecr create-repository --repository-name bibliotheca-front --region us-east-1
docker tag bibliotheca-front 429605438458.dkr.ecr.us-east-1.amazonaws.com/bibliotheca-front
docker push 429605438458.dkr.ecr.us-east-1.amazonaws.com/bibliotheca-front