### **📌 API 스펙**

- **Base URL**: `/api`

---

### **1. 소설 관련 API**

### **1.1 소설 생성**

- **Endpoint**: `POST /api/novels`
- **Description**: 새로운 소설을 생성.
- **Request Body**:
    
    ```json
    {
      "title": "소설 제목",
      "genre": "소설 장르",
      "background": "소설 배경",
      "character": "주인공 이름",
      "length": 1000
    }
    
    ```
    
    - `title` (string): 소설 제목 (필수).
    - `genre` (string): 소설 장르 (예: Fantasy, SciFi, Romance, Thriller).
    - `background` (string): 소설 배경 설명.
    - `character` (string): 주인공 이름.
    - `length` (number): 소설 분량 (예: 글자 수).
- **Response**:
    
    ```json
    {
      "id": "소설 ID",
    }
    
    ```
    

---

### **1.2 소설 목록 조회**

- **Endpoint**: `GET /api/novels`
- **Description**: 생성된 모든 소설을 조회.
- **Response**:
    
    ```json
    [
      {
        "id": "소설 ID",
        "title": "소설 제목",
        "genre": "소설 장르",
        "background": "소설 배경",
        "character": "주인공 이름",
        "length": 1000,
        "createdAt": "생성 날짜"
      },
      {
        "id": "소설 ID",
        "title": "소설 제목",
        "genre": "소설 장르",
        "background": "소설 배경",
        "character": "주인공 이름",
        "length": 1000,
        "createdAt": "생성 날짜"
      },
      {
        "id": "소설 ID",
        "title": "소설 제목",
        "genre": "소설 장르",
        "background": "소설 배경",
        "character": "주인공 이름",
        "length": 1000,
        "createdAt": "생성 날짜"
      },
      ...
    ]
    
    ```
    

---

### **1.2 소설 정보 조회**

- **Endpoint**: `GET /api/novels`
- **Description**: 생성된 모든 소설을 조회.
- **Response**:
    
    ```json
    {
      "id": "소설 ID",
      "title": "소설 제목",
      "genre": "소설 장르",
      "background": "소설 배경",
      "character": "주인공 이름",
      "length": 1000,
      "leftlength":32,
      "createdAt": "생성 날짜"
      "content":["첫번째 내용","두번째 내용","세번째 내용"]
    ]
    
    ```
    

---

### **2. 챕터(이어쓰기) 관련 API**

### **2.1 내용 추가 (이어쓰기)**

- **Endpoint**: `POST /api/novels/:novelId/`
- **Description**: 특정 소설에 내용 추가
- **Request Body**:
    
    ```json
    {
      "content": "하지만, 별이 정말 멀리 있긴하네.. 어떻게 하지?",
    }
    
    ```
    
    - `content` (string): 챕터 내용.
- **Response**:
    
    ```json
    {
      "id": "챕터 ID",
      "author": "작성자 이름",
      "content": "챕터 내용",
      "createdAt": "작성 날짜"
    }
    ```
    

---