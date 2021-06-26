# 환경설정

## 개발언어 및 툴
Node
Visual Studio Code
Solidity

## ERC 환경구성

#### 오픈제플린 설치
```
$ yarn add @openzeppelin/contracts
```

#### 트러플 설치
```
$ yarn add truffle
```

#### 가니쉬 설치
https://github.com/trufflesuite/ganache-cli
```
$ yarn add ganache-cli
```

#### 이더월렛 프로바이더 설치
```
$ yarn add @truffle/hdwallet-provider
```

## [배포] ERC dev
#### 터미널1
```
// 로컬에 가상 이더리움 배포 서버를 임시로 만들어 준다
$ ganache-cli
```


#### 터미널2
```
$ truffle compile
$ truffle migrate
```

## [배포] ERC ropsten 테스트넷
```
$ truffle compile
$ truffle migrate --network ropsten --reset
```

## [테스트] ERC 환경구성 및 실행

#### Chai 설치 for Unit Test
```
$ npm install --save-dev chai
```
#### 그 밖 세부 기본 테스트 도구 모음
```
$ npm install --save-dev @openzeppelin/test-helpers
```
