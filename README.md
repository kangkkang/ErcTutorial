# ErcTutorial

## ERC-20

![alt Erc20](https://github.com/kangkkang/ErcTutorial/blob/main/erc20-1.jpeg)

Ethereum Request for Comments 20. 

Proposed by Fabian Vogelsteller in November 2015, is a Token Standard that implements an API for tokens within Smart Contracts.

Standard for Fungible token.

1 Token always equal to all other erc-20 tokens.

규약 라이브러리
https://github.com/OpenZeppelin/openzeppelin-contracts


## 개발프로세스

반복(로컬 개발 -> 이더리움EVM 로컬 환경 구축 -> 로컬 배포 -> 테스트) -> 완료

-> 이더리움 테스트넷 (Ropsten, Kovan, Rinkeby) 배포 -> 테스트 -> 완료

-> 이더리움 메인넷 배포

![alt Erc20-dev](https://github.com/kangkkang/ErcTutorial/blob/main/erc20-2.jpeg)

## 가스(Gas)

단위 : gwei (1 / 100,000,000 eth)

총 비용 = gasLimit * gasPrice (gwei)

gasLimit : 해당 트랙잭션 수행에 소비되는 총 가스 추정치 (예> 전송, 소유권 이전 수행 등등)

gasPrice : 1가스당 지불할 가격 (클수록 전송 속도가 빨라짐)

* 만약 트랙잭션 실행 중 가스를 다 쓰면 롤백되지만 이미 쓴 가스는 돌려받지 못 함.
* 개발 중 트랜잭션을 수행하기 전 가스비 측정 메소드도 제공해주니 테스트해보자.
