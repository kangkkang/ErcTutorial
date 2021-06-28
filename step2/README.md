# 토큰 만들기

## ERC 환경구성

#### Erc20 배포 환경 세팅
```
$ ./node_modules/.bin/truffle init
```

## [배포] ERC dev
#### 터미널1
```
// 로컬에 가상 이더리움 배포 서버를 임시로 만들어 준다
$ ./node_modules/.bin/ganache-cli -d
```

#### 터미널2 - 토큰 Erc Local 배포
```
$ ./node_modules/.bin/truffle compile
// 사전에 final-migrations 폴더안에 있는 migrations 폴더에 2_deploy_contract.js를 붙여넣는다.
$ ./node_modules/.bin/truffle migrate
```

## [배포] ERC ropsten 테스트넷
```
$ ./node_modules/.bin/truffle compile
$ ./node_modules/.bin/truffle migrate --network ropsten --reset
```
