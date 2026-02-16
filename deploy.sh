git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
git add .
git commit -am "Deploy V1"
git push
git tag v1.0.0
git push origin v1.0.0