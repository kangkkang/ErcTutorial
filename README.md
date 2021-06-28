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

## 가스비 관련 코딩 팁
```
- 컨트랙트를 올리는 비용은 크다. (코드 저장비용이 들어가니깐) 컨트랙트를 호출 하는 비용에 비해~ 
- 데이터 저장에 들어가는 비용은 계산에 들어가는 비용보다 매우 크다.
- 컨트랙트 실행시 가스가 모자르면 그 동안 사용한 가스는 모두 몰수하고 원상복귀다. (예외 발생) 
- 송금을 포함한 모든 트랙잭션은 기본적으로 21000가스가 소모되며, 컨트랙트 호출은 +알파(코드실행)가 든다.
- view 키워드가 붙으면 외부에서 호출하는 경우 비용이 들지 않는다. 자기 로컬에서 만 호출하니깐~ (트랜잭션이 아님)
- view 키워드가 붙었지만 내부(동일한 컨트랙) 에서 호출하는 경우, view 성질은 없어지며, 계산 비용이 들어간다. 
- 컨트랙트간 호출에서도 상대 컨트랙트의 view 함수를 호출하면 비용이 들지 않겠지. 
- 컨트랙트간 호출(메세지콜) 에 들어가는 비용은, 애초에 EOA 에서 호출 할 때 계산되어져야 한다.
- call 은 내부에서 놀고 (비용이 안든다) , 트랜잭션은 외부에서 논다. (기본 비용 등등 든다) 
- memory 키워드를 사용하여 비용을 절약하라. 함수외부는 디폴트가 storage 이고, 내부는 memory 지만, 구조체와 배열을 처리하는 경우라면 내부라도 명시적으로 써야 한다. (단순한 복사는 memory, 참조 해서 변경하려면 storage)
- 온갖 mapping 구조를 만들어서 저장공간을 낭비하지말고, 그냥 기본 구조의 loop 돌려서 새로 만들어서 리턴하라.예를들어 (id, kind) (id, count) (kind,count) 등 많이 만들어 두면 get 호출시 속도가 빨라져 좋았었잖아? 근데 블록체인에서는 가격이 더 문제다. 온갖 구조에서 변경이 일어 날때 쓰기 비용은 어마어마 할 것이다. 
-  address.send 나 address.transfer 의 이더전송 호출에 들어가는 가스는 2300이다. address.call.value(amount)( ) 를 통한 이더전송 호출은 가스를 세팅 할 수 있다. 
-  새로 변수 할당 할 때 20000가스, 변수의 값 바꾸는데 5000가스 
- 1mb 데이터를 쓴다고 할 때 대략 word 기준 (32byte) 32,768  번 쓰니깐 5 * (20,000 * 32,768) / 1,000,000 ETH, or ~ 3.7628 ETH.  이더당 500~600달러라고 하면, 대략 한국돈으로 150~2백만원 정도 하겠다. 1기가면 몇십억이다. 

출처: https://hamait.tistory.com/965 [HAMA 블로그]
```
