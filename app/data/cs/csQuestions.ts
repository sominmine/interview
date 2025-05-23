import { QnA } from "../../types";

const csQuestions: QnA[] = [
  {
    question: "OSI 7계층에 대해 설명해주세요.",
    answer:
      "OSI 7계층은 네트워크 통신을 7개의 계층으로 나눈 모델로, 물리계층, 데이터링크계층, 네트워크계층, 전송계층, 세션계층, 표현계층, 응용계층으로 구성됩니다. 각 계층은 독립적인 기능을 수행하며 하위 계층의 서비스를 이용합니다.",
  },
  {
    question: "시간 복잡도와 공간 복잡도의 차이점은 무엇인가요?",
    answer:
      "시간 복잡도는 알고리즘이 실행되는 데 걸리는 시간을 분석한 것이고, 공간 복잡도는 알고리즘이 실행되는 데 필요한 메모리 공간을 분석한 것입니다. 두 가지 모두 알고리즘의 효율성을 판단하는 중요한 지표입니다.",
  },
  {
    question: "빅오(Big-O) 표기법이란 무엇인가요?",
    answer:
      "빅오 표기법은 알고리즘의 시간 복잡도 또는 공간 복잡도를 표현하는 방법으로, 입력 크기에 따른 알고리즘의 최악의 경우 성능을 나타냅니다. 예를 들어, O(1)은 상수 시간, O(n)은 선형 시간, O(n²)은 제곱 시간을 의미합니다.",
  },
  {
    question: "정렬 알고리즘의 종류와 각각의 시간 복잡도는 어떻게 되나요?",
    answer:
      "버블 정렬: O(n²), 선택 정렬: O(n²), 삽입 정렬: O(n²), 퀵 정렬: 평균 O(n log n), 최악 O(n²), 병합 정렬: O(n log n), 힙 정렬: O(n log n), 계수 정렬: O(n+k), 기수 정렬: O(d(n+k)), 버킷 정렬: O(n+k)입니다.",
  },
  {
    question: "스택과 큐의 차이점은 무엇인가요?",
    answer:
      "스택은 LIFO(Last In First Out) 구조로, 가장 나중에 들어온 데이터가 가장 먼저 나가는 구조입니다. 큐는 FIFO(First In First Out) 구조로, 가장 먼저 들어온 데이터가 가장 먼저 나가는 구조입니다.",
  },
  {
    question: "그래프와 트리의 차이점은 무엇인가요?",
    answer:
      "트리는 사이클이 없는 그래프의 한 종류입니다. 트리는 단일 루트 노드를 가지며, 모든 노드는 하나의 부모 노드만 가질 수 있습니다. 반면 그래프는 사이클이 존재할 수 있으며, 방향성이 있을 수도 없을 수도 있습니다.",
  },
  {
    question: "이진 탐색 트리(BST)란 무엇인가요?",
    answer:
      "이진 탐색 트리는 각 노드가 최대 두 개의 자식 노드를 가지는 트리로, 왼쪽 자식 노드는 부모 노드보다 작은 값을, 오른쪽 자식 노드는 부모 노드보다 큰 값을 가집니다. 평균적으로 O(log n) 시간에 검색, 삽입, 삭제가 가능하지만, 최악의 경우 O(n)이 될 수 있습니다.",
  },
  {
    question: "BFS와 DFS의 차이점은 무엇인가요?",
    answer:
      "BFS(너비 우선 탐색)는 큐를 사용하여 같은 레벨의 노드들을 먼저 탐색하는 방법입니다. DFS(깊이 우선 탐색)는 스택 또는 재귀를 사용하여 가능한 한 깊게 탐색한 후 다음 경로를 탐색하는 방법입니다. BFS는 최단 경로 문제에 유리하고, DFS는 모든 노드를 방문하는 문제에 유리합니다.",
  },
  {
    question: "동적 계획법(DP)이란 무엇인가요?",
    answer:
      "동적 계획법은 복잡한 문제를 여러 개의 작은 하위 문제로 나누어 해결하는 알고리즘 기법입니다. 각 하위 문제의 결과를 저장(메모이제이션)하여 중복 계산을 피하고, 이를 통해 효율성을 향상시킵니다. 피보나치 수열, 최장 공통 부분 수열(LCS), 배낭 문제 등이 DP로 해결 가능한 대표적인 문제입니다.",
  },
  {
    question: "프로세스와 스레드의 차이점은 무엇인가요?",
    answer:
      "프로세스는 실행 중인 프로그램의 인스턴스로, 독립적인 메모리 공간을 가집니다. 스레드는 프로세스 내에서 실행되는 작업의 단위로, 같은 프로세스 내의 스레드들은 메모리 자원을 공유합니다. 프로세스 간 전환은 컨텍스트 스위칭 비용이 크지만, 스레드 간 전환은 상대적으로 비용이 적습니다.",
  },
  {
    question: "교착 상태(Deadlock)란 무엇이며, 발생 조건은 무엇인가요?",
    answer:
      "교착 상태는 두 개 이상의 프로세스나 스레드가 서로 상대방이 점유하고 있는 자원을 기다리며 무한정 대기하는 상태입니다. 교착 상태의 발생 조건은 1) 상호 배제(Mutual Exclusion), 2) 점유 대기(Hold and Wait), 3) 비선점(No Preemption), 4) 순환 대기(Circular Wait)입니다. 이 네 가지 조건 중 하나라도 충족되지 않으면 교착 상태는 발생하지 않습니다.",
  },
  {
    question: "페이지 교체 알고리즘의 종류와 각각의 특징은 무엇인가요?",
    answer:
      "FIFO(First-In-First-Out): 가장 오래된 페이지 교체, 구현이 간단하지만 성능이 좋지 않음. LRU(Least Recently Used): 가장 오랫동안 사용되지 않은 페이지 교체, 시간 지역성 활용. LFU(Least Frequently Used): 사용 빈도가 가장 적은 페이지 교체. 최적(Optimal): 가장 오랫동안 사용되지 않을 페이지 교체, 이론상 최적이지만 실제 구현 어려움. Clock: LRU 근사, 참조 비트 사용.",
  },
  {
    question: "가상 메모리란 무엇인가요?",
    answer:
      "가상 메모리는 실제 물리적 메모리보다 더 큰 메모리 공간을 프로그램에 제공하는 메모리 관리 기법입니다. 프로그램은 가상 주소를 사용하고, 이는 메모리 관리 장치(MMU)에 의해 물리적 주소로 변환됩니다. 필요한 데이터만 물리 메모리에 로드하고 나머지는 디스크에 저장함으로써 메모리를 효율적으로 사용할 수 있습니다.",
  },
  {
    question: "캐시(Cache)의 지역성 원리에 대해 설명해주세요.",
    answer:
      "캐시의 지역성 원리는 프로그램이 특정 시간에 일부 영역의 데이터만 집중적으로 접근하는 경향을 의미합니다. 시간 지역성(Temporal Locality)은 최근에 접근한 데이터에 다시 접근할 가능성이 높다는 것이고, 공간 지역성(Spatial Locality)은 인접한 메모리 위치의 데이터에 접근할 가능성이 높다는 것입니다. 캐시는 이러한 원리를 활용하여 성능을 향상시킵니다.",
  },
  {
    question: "최소 신장 트리(MST)란 무엇이며, 대표적인 알고리즘은 무엇인가요?",
    answer:
      "최소 신장 트리는 그래프의 모든 정점을 포함하면서 사이클이 없고 간선의 가중치 합이 최소인 부분 그래프입니다. 대표적인 MST 알고리즘으로는 Kruskal 알고리즘과 Prim 알고리즘이 있습니다. Kruskal 알고리즘은 간선을 가중치 오름차순으로 정렬한 후 사이클을 형성하지 않는 간선을 선택합니다. Prim 알고리즘은 시작 정점에서부터 트리를 확장해 나가는 방식입니다.",
  },
  {
    question: "최단 경로 알고리즘의 종류와 각각의 특징은 무엇인가요?",
    answer:
      "Dijkstra 알고리즘: 음의 가중치가 없는 그래프에서 한 정점에서 다른 모든 정점까지의 최단 경로를 찾는 알고리즘(O(E log V)). Bellman-Ford 알고리즘: 음의 가중치가 있는 그래프에서 사용 가능하며, 음의 사이클 감지 가능(O(VE)). Floyd-Warshall 알고리즘: 모든 정점 쌍 사이의 최단 경로를 찾는 알고리즘(O(V³)).",
  },
  {
    question: "B-트리와 B+트리의 차이점은 무엇인가요?",
    answer:
      "B-트리는 모든 노드(내부 노드와 리프 노드)에 키와 데이터를 저장할 수 있습니다. B+트리는 내부 노드에는 키만 저장하고 모든 데이터는 리프 노드에 저장합니다. 또한 B+트리는 리프 노드들이 연결 리스트로 연결되어 있어 순차적 접근이 용이합니다. B+트리는 데이터베이스 인덱싱에 주로 사용됩니다.",
  },
  {
    question: "멀티스레딩과 멀티프로세싱의 차이점은 무엇인가요?",
    answer:
      "멀티스레딩은 하나의 프로세스 내에서 여러 스레드가 병렬로 실행되는 것으로, 스레드 간 메모리 공유가 쉽지만 하나의 스레드에 문제가 생기면 전체 프로세스에 영향을 줄 수 있습니다. 멀티프로세싱은 여러 프로세스가 병렬로 실행되는 것으로, 프로세스 간 메모리 공유가 어렵지만 한 프로세스의 문제가 다른 프로세스에 영향을 주지 않아 안정성이 높습니다.",
  },
  {
    question: "세마포어(Semaphore)와 뮤텍스(Mutex)의 차이점은 무엇인가요?",
    answer:
      "뮤텍스는 한 번에 하나의 스레드만 접근할 수 있는 이진 신호 체계(0 또는 1)로, 잠금을 획득한 스레드만이 잠금을 해제할 수 있습니다. 세마포어는 여러 스레드가 동시에 접근할 수 있는 개수를 제한하는 신호 체계로, 잠금을 획득한 스레드가 아닌 다른 스레드도 잠금을 해제할 수 있습니다. 뮤텍스는 소유권 개념이 있고, 세마포어는 없습니다.",
  },
  {
    question: "TCP와 UDP의 차이점은 무엇인가요?",
    answer:
      "TCP(Transmission Control Protocol)는 연결 지향적, 신뢰성 있는 데이터 전송, 흐름 제어, 혼잡 제어 기능을 제공합니다. UDP(User Datagram Protocol)는 비연결형, 신뢰성 없는 데이터 전송이지만 오버헤드가 적어 속도가 빠릅니다. TCP는 웹 브라우징, 이메일 등에 사용되고, UDP는 실시간 스트리밍, 온라인 게임 등에 사용됩니다.",
  },
  {
    question: "HTTP와 HTTPS의 차이점은 무엇인가요?",
    answer:
      "HTTP는 웹 서버와 클라이언트 간의 통신 프로토콜로, 암호화되지 않은 데이터를 전송합니다. HTTPS는 HTTP에 SSL/TLS 암호화 계층을 추가한 것으로, 데이터를 암호화하여 보안성을 높입니다. HTTPS는 중간자 공격을 방지하고 사용자의 개인 정보를 안전하게 보호할 수 있습니다.",
  },
  {
    question: "데이터베이스 인덱스란 무엇이며, 장단점은 무엇인가요?",
    answer:
      "인덱스는 데이터베이스 테이블의 검색 속도를 향상시키기 위한 자료구조(주로 B-트리, B+트리)입니다. 장점: 검색, 정렬 속도 향상, 디스크 I/O 감소. 단점: 추가적인 저장 공간 필요, 데이터 변경(삽입, 수정, 삭제) 시 인덱스 업데이트 오버헤드 발생, 잘못 설계된 인덱스는 오히려 성능 저하 가능.",
  },
  {
    question: "데이터베이스 트랜잭션의 ACID 속성이란 무엇인가요?",
    answer:
      "원자성(Atomicity): 트랜잭션의 연산은 모두 실행되거나 모두 실행되지 않아야 함. 일관성(Consistency): 트랜잭션 실행 전후로 데이터베이스는 일관된 상태를 유지해야 함. 격리성(Isolation): 동시에 실행되는 트랜잭션들이 서로 영향을 미치지 않아야 함. 지속성(Durability): 트랜잭션이 성공적으로 완료되면 그 결과는 영구적으로 반영되어야 함.",
  },
  {
    question: "객체지향 프로그래밍의 4가지 특징은 무엇인가요?",
    answer:
      "캡슐화(Encapsulation): 데이터와 해당 데이터를 처리하는 메서드를 하나의 단위로 묶고, 접근 제어를 통해 정보 은닉. 상속(Inheritance): 기존 클래스의 속성과 기능을 새로운 클래스가 재사용. 다형성(Polymorphism): 같은 인터페이스나 메서드가 다양한 형태로 동작. 추상화(Abstraction): 복잡한 시스템에서 핵심적인 개념이나 기능을 간추려내는 것.",
  },
  {
    question: "SOLID 원칙이란 무엇인가요?",
    answer:
      "S(Single Responsibility): a모든 클래스는 단 하나의 책임만 가져야 함. O(Open-Closed): 확장에는 열려 있고, 수정에는 닫혀 있어야 함. L(Liskov Substitution): 하위 타입은 상위 타입을 대체할 수 있어야 함. I(Interface Segregation): 클라이언트는 사용하지 않는 인터페이스에 의존하지 않아야 함. D(Dependency Inversion): 고수준 모듈은 저수준 모듈에 의존하지 않고, 둘 다 추상화에 의존해야 함.",
  },
  {
    question: "동기와 비동기 처리의 차이점은 무엇인가요?",
    answer:
      "동기 처리는 작업이 순차적으로 실행되어 이전 작업이 완료될 때까지 다음 작업이 대기하는 방식입니다. 비동기 처리는 작업이 병렬적으로 실행되어 이전 작업의 완료를 기다리지 않고 다음 작업을 시작하는 방식입니다. 비동기 처리는 I/O 작업과 같이 대기 시간이 긴 작업에 유용하며, 콜백, Promise, async/await 등의 방식으로 구현됩니다.",
  },
  {
    question: "분산 시스템의 CAP 정리란 무엇인가요?",
    answer:
      "CAP 정리는 분산 시스템에서 일관성(Consistency), 가용성(Availability), 분단 허용성(Partition Tolerance) 세 가지 속성을 동시에 만족시킬 수 없다는 이론입니다. 네트워크 분단이 발생했을 때, 일관성과 가용성 중 하나를 선택해야 합니다. CA 시스템은 일관성과 가용성을 보장하지만 분단 허용성이 없고, CP 시스템은 일관성과 분단 허용성을, AP 시스템은 가용성과 분단 허용성을 보장합니다.",
  },
  {
    question: "디자인 패턴의 종류와 각각의 특징은 무엇인가요?",
    answer:
      "생성 패턴: 객체 생성 메커니즘을 다루는 패턴으로 싱글톤, 팩토리 메서드, 추상 팩토리, 빌더, 프로토타입 등이 있습니다. 구조 패턴: 클래스와 객체를 조합하여 더 큰 구조를 만드는 패턴으로 어댑터, 브리지, 컴포지트, 데코레이터, 퍼사드, 플라이웨이트, 프록시 등이 있습니다. 행동 패턴: 객체 간의 통신과 책임 분배를 다루는 패턴으로 책임 연쇄, 커맨드, 인터프리터, 이터레이터, 옵저버, 전략, 템플릿 메서드 등이 있습니다.",
  },
  {
    question: "REST API의 특징과 RESTful한 API를 설계하는 원칙은 무엇인가요?",
    answer:
      "REST API의 특징: 무상태(Stateless), 클라이언트-서버 구조, 캐시 가능, 계층화된 시스템, 인터페이스 일관성, 코드 온 디맨드(선택적). 설계 원칙: 1) 자원(URI)으로 구분하고 명사로 표현, 2) HTTP 메서드(GET, POST, PUT, DELETE)로 행위 표현, 3) 버전 관리, 4) 에러 처리, 5) HATEOAS(Hypermedia as the Engine of Application State) 적용, 6) 명확한 응답 형식(JSON, XML 등).",
  },
  {
    question: "HTTP/1.1과 HTTP/2의 차이점을 설명해주세요.",
    answer:
      "HTTP/2는 HTTP/1.1의 성능 한계를 개선한 프로토콜입니다. 주요 특징으로는 멀티플렉싱을 통한 단일 TCP 연결에서 여러 요청/응답 처리, 헤더 압축을 통한 오버헤드 감소, 서버 푸시를 통한 클라이언트 요청 없이 리소스 전송, 바이너리 프레이밍 계층을 통한 효율적인 데이터 전송 등이 있습니다. HTTP/1.1은 요청당 하나의 TCP 연결이 필요하고 헤더가 일반 텍스트로 전송되어 효율성이 떨어지며, Head of Line Blocking 문제가 있었습니다. HTTP/2는 이러한 문제들을 해결하여 웹 페이지 로딩 속도를 크게 개선했으며, 특히 많은 리소스를 포함한 웹 애플리케이션에서 효과적입니다.",
  },
  {
    question: "해시 테이블이란 무엇인가요?",
    answer:
      "해시 테이블은 키-값 쌍을 저장하는 자료구조로, 해시 함수를 사용하여 키를 배열의 인덱스로 변환합니다. 이를 통해 O(1) 시간에 데이터 접근이 가능하지만, 해시 충돌 문제가 발생할 수 있습니다. 충돌 해결 방법으로는 체이닝, 개방 주소법 등이 있습니다.",
  },
  {
    question: "해시(Hash) 충돌 해결 방법은 무엇인가요?",
    answer:
      "체이닝(Chaining): 같은 해시 값을 가진 항목들을 연결 리스트로 연결합니다. 개방 주소법(Open Addressing): 충돌 시 다른 버킷을 찾아 저장하는 방법으로, 선형 탐사(Linear Probing), 이차 탐사(Quadratic Probing), 이중 해싱(Double Hashing) 등이 있습니다. 재해싱(Rehashing): 테이블 크기를 늘리고 모든 항목을 다시 해싱합니다.",
  },
  {
    question: "해시(Hash)와 암호화(Encryption)의 차이점은 무엇인가요?",
    answer:
      "해시와 암호화는 모두 데이터를 변환하는 방식이지만 목적과 특성이 다릅니다. 해시는 단방향 변환으로, 원본 데이터를 고정된 길이의 해시값으로 변환하며 복원이 불가능합니다. 같은 입력은 항상 같은 해시값을 생성하며, 주로 데이터 무결성 검증, 비밀번호 저장, 데이터 식별에 사용됩니다(예: MD5, SHA-256). 반면 암호화는 양방향 변환으로, 키를 사용하여 데이터를 암호화하고 복호화할 수 있습니다. 기밀성이 필요한 데이터 보호에 사용되며, 대칭키 암호화(AES, DES)와 비대칭키 암호화(RSA, ECC)로 나뉩니다.",
  },
  {
    question:
      "대칭키 암호화와 비대칭키 암호화의 차이점과 각각의 사용 사례를 설명해주세요.",
    answer:
      "대칭키 암호화는 동일한 키로 암호화와 복호화를 수행하는 방식입니다. 처리 속도가 빠르고 구현이 간단하지만, 안전한 키 공유가 어렵다는 단점이 있습니다. AES, DES 등이 대표적이며, 대용량 데이터 암호화에 주로 사용됩니다. 비대칭키 암호화는 공개키와 개인키 쌍을 사용하는 방식입니다. 공개키로 암호화한 데이터는 개인키로만 복호화할 수 있으며, 그 반대도 가능합니다. RSA, ECC 등이 대표적이며, 키 교환, 전자서명, 인증서 등에 사용됩니다. 실제 시스템에서는 두 방식을 혼합하여 사용하는 것이 일반적입니다.",
  },
  {
    question: "SSL/TLS 동작 방식과 HTTPS 통신 과정을 설명해주세요.",
    answer:
      "SSL/TLS는 네트워크 통신의 보안을 담당하는 프로토콜입니다. HTTPS 통신은 다음과 같은 과정으로 이루어집니다. 먼저 클라이언트가 서버에 연결을 요청하면, 서버는 인증서(공개키 포함)를 전송합니다. 클라이언트는 인증서의 유효성을 확인하고, 대칭키(세션키)를 생성하여 서버의 공개키로 암호화해 전송합니다. 서버는 개인키로 이를 복호화하여 세션키를 얻습니다. 이후 통신은 이 세션키를 사용한 대칭키 암호화로 이루어집니다. 이러한 과정을 TLS Handshake라고 하며, 통신의 기밀성, 무결성, 인증을 보장합니다.",
  },
  {
    question:
      "JWT(JSON Web Token)의 구조와 동작 원리, 그리고 보안 고려사항을 설명해주세요.",
    answer:
      "JWT는 Header, Payload, Signature 세 부분으로 구성된 토큰 기반 인증 방식입니다. Header는 토큰 타입과 알고리즘 정보를, Payload는 실제 데이터(Claims)를, Signature는 토큰의 유효성 검증을 위한 서명을 포함합니다. 서버는 비밀키로 토큰을 서명하여 발급하고, 클라이언트는 이를 저장하여 요청시 함께 전송합니다. 서버는 토큰의 서명을 검증하여 위변조 여부를 확인합니다. 보안을 위해 중요한 정보는 Payload에 포함하지 않아야 하며, 토큰의 만료 시간 설정, 안전한 비밀키 관리, HTTPS 사용, XSS/CSRF 대비가 필요합니다. 또한 토큰 폐기가 어렵다는 단점이 있어, 리프레시 토큰 등의 추가적인 메커니즘을 고려해야 합니다.",
  },
];

export default csQuestions;
