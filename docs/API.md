# Dokumentacja API - Karaoke Machine

Wszystkie endpointy zwracają dane w formacie JSON. Adres bazowy dla środowiska lokalnego: `http://localhost:8080`

---

## 1. Utwory (Songs)

Endpointy służące do przeglądania i wyszukiwania dostępnych piosenek.

### Pobierz listę utworów
- **URL:** `/api/songs`
- **Metoda:** `GET`
- **Opis:** Zwraca listę wszystkich utworów wraz z ich autorami i kategoriami.

### Pobierz szczegóły utworu
- **URL:** `/api/songs/{id}`
- **Metoda:** `GET`
- **Opis:** Zwraca pełne dane o piosence, w tym tekst (`lyrics`) oraz link do YouTube.

---

## 2. Sugestie i YouTube (Suggestions)

System pozwalający użytkownikom na zgłaszanie nowych utworów lub poprawek.

### Wyślij sugestię utworu
- **URL:** `/api/songs/suggest`
- **Metoda:** `POST`
- **Body (JSON):**

```json
{
  "title": "Tytuł piosenki",
  "youtubeUrl": "[https://www.youtube.com/watch?v=](https://www.youtube.com/watch?v=)...",
  "categories": ["Pop", "Rock"]
} 

```

### Sprawdź status swojej sugestii
- **URL:** `/api/suggestions/status/{id}`
- **Metoda:** `GET`



## 3. Panel Administratora (Admin Panel)

Endpointy zabezpieczone, służące do moderacji treści i zarządzania bazą utworów.

### Zarządzanie Użytkownikami
- **Pobierz listę użytkowników** - **URL:** `/api/admin/users`  
  - **Metoda:** `GET`  
  - **Opis:** Zwraca listę wszystkich zarejestrowanych użytkowników.

- **Zmień rolę użytkownika** - **URL:** `/api/admin/users/{id}/role`  
  - **Metoda:** `PATCH`  
  - **Body (JSON):**
 ```json

  {
    "role": "ADMIN"
  }

```

### Banowanie / Odblokowanie użytkownika 
- URL: `/api/admin/users/{id}/ban`
- Metoda: POST
- Body (JSON): 

```json

 { "isBanned": true }

```

### Zarządzanie Treścią (Edycja Utworów)
Pobierz wszystkie piosenki (widok admina) 
- URL: /api/admin/songs
- Metoda: GET
- Opis: Pobiera pełną listę piosenek z dodatkowymi metadanymi.

### Pełna edycja utworu 
- URL: /api/admin/songs/{id}
- Metoda: PUT

Body (JSON): 
```json 

{ "title": "Nowy Tytuł", "author": "Nowy Autor", "genre": "Rock", "lyrics": "Zaktualizowany tekst piosenki", "timestampOffset": 1500 }

```

- **Opis:** Pozwala na zmianę autora, gatunku, tekstu oraz znacznika czasowego synchronizacji.

### Pobierz oczekujące sugestie
- **URL:** `/api/admin/suggestions/pending`
- **Metoda:** `GET`
- **Opis:** Zwraca listę wszystkich piosenek zgłoszonych przez użytkowników, które czekają na akceptację.

### Zatwierdź lub Odrzuć sugestię
- **URL:** `/api/admin/suggestions/{id}/status`
- **Metoda:** `PATCH`
- **Body (JSON):**

```json

{
  "status": "APPROVED",
  "adminComment": "Opcjonalny komentarz"
}


```
	
- **Opis:** Zmienia status sugestii. Zatwierdzenie powoduje automatyczne dodanie piosenki do głównej bazy utworów.

### Analityka i Statystyki
- URL: `/api/admin/stats`
- Metoda: `GET`
- Opis: Zwraca dane o liczbie odtworzeń, najpopularniejszych utworach i liczbie aktywnych użytkowników.

	