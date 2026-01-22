Dokumentacja API - Karaoke Machine
Wszystkie endpointy zwracają dane w formacie JSON. Adres bazowy dla środowiska lokalnego: http://localhost:8080

### 1. Autoryzacja (Auth)
Endpointy odpowiedzialne za zarządzanie kontem użytkownika i dostępem.

Rejestracja użytkownika
URL: `/api/auth/register`

Metoda: `POST`

Opis: Tworzy nowe konto użytkownika w systemie.

Logowanie (Standardowe)
URL: `/api/auth/login`

Metoda: `POST`

Opis: Logowanie za pomocą adresu e-mail i hasła. Zwraca token dostępu.

Logowanie przez Facebook
URL: `/api/auth/lfacebook`

Metoda: `POST`

Opis: Logowanie zewnętrzne przy użyciu konta Facebook.

### 2. Utwory i Kategorie (Songs & Categories)
Pobierz listę utworów
URL: `/api/songs`

Metoda: `GET`

Opis: Zwraca listę wszystkich utworów wraz z ich autorami i kategoriami.

Pobierz szczegóły utworu
URL: `/api/songs/{id}`

Metoda: `GET`

Opis: Zwraca pełne dane o piosence, w tym tekst (lyrics) oraz link do YouTube.

Pobierz utwory wg kategorii
URL: `/api/categories/by-category/{categoryId}`

Metoda: `GET`

Opis: Filtruje bazę utworów i zwraca tylko te przypisane do konkretnego ID kategorii.

### 3. Interakcje Użytkownika (User Likes)
Polub utwór
URL: `/api/categories/me/likes/{songId}`

Metoda: `POST`

Opis: Dodaje piosenkę do listy ulubionych zalogowanego użytkownika.

Usuń polubienie
URL: `/api/categories/me/likes/{songId}`

Metoda: `DELETE`

Opis: Usuwa piosenkę z listy ulubionych.

### 4. Sugestie i YouTube (Suggestions)
Wyślij sugestię utworu
URL: `/api/songs/suggest`

Metoda: POST

Body (JSON):

```json

{
  "title": "Tytuł piosenki",
  "youtubeUrl": "https://www.youtube.com/watch?v=...",
  "categories": ["Pop", "Rock"]
} 

```

Sprawdź status swojej sugestii
URL: `/api/suggestions/status/{id}`

Metoda: `GET`

### 5. Panel Administratora (Admin Panel)
Zarządzanie Użytkownikami
Pobierz listę użytkowników - URL: /api/admin/users

Metoda: `GET`

Opis: Zwraca listę wszystkich zarejestrowanych użytkowników.

Zmień rolę użytkownika - URL: `/api/admin/users/{id}/role`

Metoda: `PATCH`

Body (JSON):

```json

 {
   "role": "ADMIN"
 }

```

Banowanie / Odblokowanie użytkownika
URL: `/api/admin/users/{id}/ban`

Metoda: `POST`

Body (JSON):

 ```json { "isBanned": true }

```


### Zarządzanie Treścią (Edycja Utworów)
- **Pobierz wszystkie piosenki (widok admina)** - **URL:** `/api/admin/songs`
  - **Metoda:** `GET`

- **Pełna edycja utworu** - **URL:** `/api/admin/songs/{id}`
  - **Metoda:** `PUT`
  - **Body (JSON):**

 ```json 
{ 
  "title": "Nowy Tytuł", 
  "author": "Nowy Autor", 
  "genre": "Rock", 
  "lyrics": "Zaktualizowany tekst...", 
  "timestampOffset": 1500 
}

```

Zarządzanie Sugestiami
Pobierz oczekujące sugestie - URL: /api/admin/suggestions/pending

Zatwierdź lub Odrzuć sugestię - URL: /api/admin/suggestions/{id}/status - Metoda: PATCH

Analityka i Statystyki
URL: /api/admin/stats

Metoda: GET

Opis: Zwraca dane o liczbie odtworzeń i aktywnych użytkownikach.